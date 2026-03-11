import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadImage } from '@/lib/storage';
import { createProduct } from '@/lib/products';
import type { Product } from '@/lib/types';
import '@/styles/admin.css';

type InstrumentType = 'Violin' | 'Viola' | 'Cello';
type Step = 1 | 2 | 3 | 4;

interface ImageFile {
  file: File;
  preview: string;
}

const STEP_LABELS = ['Type', 'Name', 'Photos', 'Preview'];

export default function AdminAddProduct() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [type, setType] = useState<InstrumentType | null>(null);
  const [name, setName] = useState('');
  const [frontImage, setFrontImage] = useState<ImageFile | null>(null);
  const [backImage, setBackImage] = useState<ImageFile | null>(null);
  const [publishing, setPublishing] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');
  const [dragOver, setDragOver] = useState<'front' | 'back' | null>(null);

  const frontInputRef = useRef<HTMLInputElement>(null);
  const backInputRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleFile = (file: File, side: 'front' | 'back') => {
    if (file.type !== 'image/png') {
      setError('Only PNG files are accepted (images must have a transparent background).');
      return;
    }
    setError('');
    const preview = URL.createObjectURL(file);
    if (side === 'front') setFrontImage({ file, preview });
    else setBackImage({ file, preview });
  };

  const handleDrop = (e: React.DragEvent, side: 'front' | 'back') => {
    e.preventDefault();
    setDragOver(null);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file, side);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>, side: 'front' | 'back') => {
    const file = e.target.files?.[0];
    if (file) handleFile(file, side);
    e.target.value = '';
  };

  const canProceed = () => {
    if (step === 1) return type !== null;
    if (step === 2) return name.trim().length > 0;
    if (step === 3) return frontImage !== null && backImage !== null;
    return true;
  };

  const handlePublish = async () => {
    if (!type || !name || !frontImage || !backImage) return;
    setPublishing(true);
    setError('');
    try {
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const timestamp = Date.now();
      const frontPath = `${type.toLowerCase()}s/${slug}-front-${timestamp}.png`;
      const backPath = `${type.toLowerCase()}s/${slug}-back-${timestamp}.png`;

      const [frontUrl, backUrl] = await Promise.all([
        uploadImage(frontImage.file, frontPath),
        uploadImage(backImage.file, backPath),
      ]);

      await createProduct({
        name: name.trim(),
        type,
        front_image_url: frontUrl,
        back_image_url: backUrl,
        description: '',
        is_coming_soon: true,
        display_order: 0,
      } as Omit<Product, 'id' | 'slug' | 'created_at' | 'updated_at'>);

      showToast(`✓ ${name} published successfully`);
      setTimeout(() => navigate('/admin'), 1000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to publish. Please try again.');
    } finally {
      setPublishing(false);
    }
  };

  return (
    <>
      {/* Toast */}
      {toast && <div className={`admin-toast success`}>{toast}</div>}

      {/* Back link */}
      <button className="admin-back-link" onClick={() => navigate('/admin')}>
        ← Back to Dashboard
      </button>

      <h1 className="admin-page-title">Add Instrument</h1>
      <p className="admin-page-subtitle">Add a new instrument to the public catalog</p>

      {/* Step indicator */}
      <div className="admin-steps">
        {STEP_LABELS.map((label, i) => {
          const stepNum = (i + 1) as Step;
          const isDone = step > stepNum;
          const isActive = step === stepNum;
          return (
            <div key={label} style={{ display: 'flex', alignItems: 'center', flex: i < STEP_LABELS.length - 1 ? '1' : 'none' }}>
              <div className={`admin-step ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}>
                <div className="admin-step-num">{isDone ? '✓' : stepNum}</div>
                <span>{label}</span>
              </div>
              {i < STEP_LABELS.length - 1 && <div className="admin-step-divider" />}
            </div>
          );
        })}
      </div>

      {/* Step content */}
      <div style={{ maxWidth: '560px' }}>
        {/* Step 1: Type */}
        {step === 1 && (
          <>
            <p className="admin-page-subtitle">What type of instrument is this?</p>
            <div className="admin-type-grid">
              {(['Violin', 'Viola', 'Cello'] as InstrumentType[]).map((t) => (
                <button
                  key={t}
                  className={`admin-type-btn ${type === t ? 'selected' : ''}`}
                  onClick={() => setType(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Step 2: Name */}
        {step === 2 && (
          <>
            <p className="admin-page-subtitle">What is this instrument called?</p>
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="name">Instrument Name</label>
              <input
                id="name"
                type="text"
                className="admin-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={`e.g. Joe Farley ${type}`}
                autoFocus
                onKeyDown={(e) => { if (e.key === 'Enter' && canProceed()) setStep(3); }}
              />
            </div>
          </>
        )}

        {/* Step 3: Photos */}
        {step === 3 && (
          <>
            <p className="admin-page-subtitle">Upload transparent PNG photos. The checkerboard confirms transparency.</p>
            {error && <div className="admin-error">{error}</div>}
            <div className="admin-upload-grid">
              {/* Front */}
              <div>
                <div className="admin-upload-title">Front View</div>
                <div
                  className={`admin-upload-zone ${frontImage ? 'has-image' : ''} ${dragOver === 'front' ? 'drag-over' : ''}`}
                  onClick={() => frontInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setDragOver('front'); }}
                  onDragLeave={() => setDragOver(null)}
                  onDrop={(e) => handleDrop(e, 'front')}
                >
                  {frontImage ? (
                    <img src={frontImage.preview} alt="Front" />
                  ) : (
                    <>
                      <div style={{ fontSize: '2rem', opacity: 0.4 }}>🖼</div>
                      <div className="admin-upload-label">Drop PNG here or click</div>
                      <div className="admin-upload-hint">PNG only (transparent bg)</div>
                    </>
                  )}
                </div>
                {frontImage && (
                  <button
                    className="admin-back-link"
                    style={{ marginTop: '0.5rem', marginBottom: 0 }}
                    onClick={(e) => { e.stopPropagation(); setFrontImage(null); }}
                  >
                    ↺ Re-upload
                  </button>
                )}
                <input
                  ref={frontInputRef}
                  type="file"
                  accept="image/png"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileInput(e, 'front')}
                />
              </div>

              {/* Back */}
              <div>
                <div className="admin-upload-title">Back View</div>
                <div
                  className={`admin-upload-zone ${backImage ? 'has-image' : ''} ${dragOver === 'back' ? 'drag-over' : ''}`}
                  onClick={() => backInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setDragOver('back'); }}
                  onDragLeave={() => setDragOver(null)}
                  onDrop={(e) => handleDrop(e, 'back')}
                >
                  {backImage ? (
                    <img src={backImage.preview} alt="Back" />
                  ) : (
                    <>
                      <div style={{ fontSize: '2rem', opacity: 0.4 }}>🖼</div>
                      <div className="admin-upload-label">Drop PNG here or click</div>
                      <div className="admin-upload-hint">PNG only (transparent bg)</div>
                    </>
                  )}
                </div>
                {backImage && (
                  <button
                    className="admin-back-link"
                    style={{ marginTop: '0.5rem', marginBottom: 0 }}
                    onClick={(e) => { e.stopPropagation(); setBackImage(null); }}
                  >
                    ↺ Re-upload
                  </button>
                )}
                <input
                  ref={backInputRef}
                  type="file"
                  accept="image/png"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileInput(e, 'back')}
                />
              </div>
            </div>
          </>
        )}

        {/* Step 4: Preview */}
        {step === 4 && frontImage && (
          <>
            <p className="admin-page-subtitle">This is how the card will appear on the public site.</p>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div className="admin-preview-card">
                <div className="admin-preview-image">
                  <img src={frontImage.preview} alt={name} />
                </div>
                <div className="admin-preview-body">
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, color: '#e8e0d0' }}>{name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#8a7d6a', marginTop: '0.25rem' }}>Description coming soon</div>
                </div>
              </div>
              <div style={{ flex: 1, minWidth: '180px' }}>
                <div style={{ fontSize: '0.8rem', color: '#8a7d6a', lineHeight: 1.8 }}>
                  <div>Type: <span style={{ color: '#c8a96e' }}>{type}</span></div>
                  <div>Name: <span style={{ color: '#e8e0d0' }}>{name}</span></div>
                  <div>Status: <span style={{ color: '#c8a96e' }}>Coming Soon</span></div>
                  <div style={{ marginTop: '0.5rem', opacity: 0.7, fontSize: '0.75rem' }}>
                    Description can be added later via the edit page.
                  </div>
                </div>
              </div>
            </div>
            {error && <div className="admin-error" style={{ marginTop: '1rem' }}>{error}</div>}
          </>
        )}

        {/* Navigation buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
          {step > 1 && (
            <button
              className="admin-btn-secondary"
              onClick={() => setStep((s) => (s - 1) as Step)}
              disabled={publishing}
            >
              ← Back
            </button>
          )}
          {step < 4 ? (
            <button
              className="admin-btn-primary"
              onClick={() => setStep((s) => (s + 1) as Step)}
              disabled={!canProceed()}
            >
              Continue →
            </button>
          ) : (
            <button
              className="admin-btn-primary"
              onClick={handlePublish}
              disabled={publishing}
            >
              {publishing ? 'Publishing…' : 'Publish Instrument'}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
