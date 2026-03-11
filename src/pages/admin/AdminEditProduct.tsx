import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, updateProduct, deleteProduct } from '@/lib/products';
import { deleteImage, getPathFromUrl } from '@/lib/storage';
import type { Product } from '@/lib/types';
import '@/styles/admin.css';

export default function AdminEditProduct() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<0 | 1>(0);
  const [description, setDescription] = useState('');
  const [isComingSoon, setIsComingSoon] = useState(true);
  const [toast, setToast] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast(msg);
    setToastType(type);
    setTimeout(() => setToast(''), 3000);
  };

  const loadProduct = useCallback(async () => {
    if (!id) return;
    try {
      const data = await getProductById(id);
      if (!data) { navigate('/admin'); return; }
      setProduct(data);
      setDescription(data.description || '');
      setIsComingSoon(data.is_coming_soon);
    } catch {
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => { loadProduct(); }, [loadProduct]);

  const handleSave = async () => {
    if (!product) return;
    setSaving(true);
    try {
      await updateProduct(product.id, {
        description,
        is_coming_soon: isComingSoon,
      });
      showToast('✓ Changes saved');
    } catch {
      showToast('Failed to save changes', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!product) return;
    setDeleting(true);
    try {
      // Delete images from storage
      const frontPath = getPathFromUrl(product.front_image_url);
      const backPath = getPathFromUrl(product.back_image_url);
      await Promise.allSettled([deleteImage(frontPath), deleteImage(backPath)]);
      await deleteProduct(product.id);
      navigate('/admin');
    } catch {
      showToast('Failed to delete product', 'error');
      setDeleting(false);
      setShowDeleteConfirm(false);
    }
  };

  if (loading) {
    return (
      <div className="admin-loading" style={{ minHeight: '50vh' }}>
        <div className="admin-spinner" />
      </div>
    );
  }

  if (!product) return null;

  const images = [
    { label: 'Front', url: product.front_image_url },
    { label: 'Back', url: product.back_image_url },
  ];

  return (
    <>
      {/* Toast */}
      {toast && <div className={`admin-toast ${toastType}`}>{toast}</div>}

      {/* Delete confirm dialog */}
      {showDeleteConfirm && (
        <div className="admin-overlay" onClick={() => setShowDeleteConfirm(false)}>
          <div className="admin-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="admin-dialog-title">Delete {product.name}?</div>
            <div className="admin-dialog-text">
              This will permanently remove the instrument listing and its images from storage.
              This action cannot be undone.
            </div>
            <div className="admin-dialog-actions">
              <button className="admin-btn-secondary" onClick={() => setShowDeleteConfirm(false)}>
                Cancel
              </button>
              <button className="admin-btn-danger" onClick={handleDelete} disabled={deleting}>
                {deleting ? 'Deleting…' : 'Delete Permanently'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back link */}
      <button className="admin-back-link" onClick={() => navigate('/admin')}>
        ← Back to Dashboard
      </button>

      <div style={{ marginBottom: '2rem' }}>
        <h1 className="admin-page-title">{product.name}</h1>
        <p className="admin-page-subtitle" style={{ marginBottom: 0 }}>{product.type}</p>
      </div>

      <div className="admin-two-col">
        {/* Left: Image gallery */}
        <div>
          <div className="admin-section-title">Photos</div>
          <div className="admin-gallery-main">
            <img src={images[selectedImage].url} alt={`${product.name} - ${images[selectedImage].label}`} />
          </div>
          <div className="admin-gallery-thumbs">
            {images.map((img, i) => (
              <button
                key={img.label}
                className={`admin-thumb ${selectedImage === i ? 'active' : ''}`}
                onClick={() => setSelectedImage(i as 0 | 1)}
                title={img.label}
              >
                <img src={img.url} alt={img.label} />
              </button>
            ))}
          </div>
          <p style={{ fontSize: '0.75rem', color: '#4a4540', marginTop: '0.75rem' }}>
            Click thumbnails to switch between front and back views.
          </p>
        </div>

        {/* Right: Details */}
        <div>
          <div className="admin-section-title">Details</div>

          {/* Coming Soon toggle */}
          <div className="admin-form-group" style={{ marginBottom: '1.5rem' }}>
            <div className="admin-toggle-wrapper">
              <label className="admin-toggle">
                <input
                  type="checkbox"
                  checked={isComingSoon}
                  onChange={(e) => setIsComingSoon(e.target.checked)}
                />
                <span className="admin-toggle-slider" />
              </label>
              <div>
                <div style={{ fontSize: '0.875rem', color: '#e8e0d0' }}>Coming Soon</div>
                <div style={{ fontSize: '0.75rem', color: '#8a7d6a' }}>
                  {isComingSoon
                    ? 'Showing "info still being developed" notice on public page'
                    : 'Description is visible on the public detail page'}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="admin-form-group">
            <label className="admin-label" htmlFor="description">Description</label>
            <textarea
              id="description"
              className="admin-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a description for this instrument. Use blank lines to separate paragraphs."
              rows={8}
            />
            <div style={{ fontSize: '0.75rem', color: '#4a4540', marginTop: '0.4rem' }}>
              Blank lines create separate paragraphs on the public page.
            </div>
          </div>

          {/* Save button */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button className="admin-btn-primary" onClick={handleSave} disabled={saving}>
              {saving ? 'Saving…' : 'Save Changes'}
            </button>
          </div>

          <div className="admin-divider" />

          {/* Danger zone */}
          <div>
            <div style={{ fontSize: '0.8rem', color: '#8a7d6a', marginBottom: '0.75rem' }}>
              Danger Zone
            </div>
            <button
              className="admin-btn-danger"
              onClick={() => setShowDeleteConfirm(true)}
            >
              Delete Instrument
            </button>
            <div style={{ fontSize: '0.72rem', color: '#4a4540', marginTop: '0.5rem' }}>
              Permanently removes this listing and its images.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
