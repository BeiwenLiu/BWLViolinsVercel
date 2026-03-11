import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '@/lib/products';
import type { Product } from '@/lib/types';
import '@/styles/admin.css';

type Tab = 'All' | 'Violin' | 'Viola' | 'Cello';
const TABS: Tab[] = ['All', 'Violin', 'Viola', 'Cello'];

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('All');
  const navigate = useNavigate();

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch {
      setError('Failed to load products.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadProducts(); }, [loadProducts]);

  const filtered = activeTab === 'All'
    ? products
    : products.filter((p) => p.type === activeTab);

  const counts: Record<string, number> = {
    All: products.length,
    Violin: products.filter((p) => p.type === 'Violin').length,
    Viola: products.filter((p) => p.type === 'Viola').length,
    Cello: products.filter((p) => p.type === 'Cello').length,
  };

  return (
    <>
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="admin-page-title">Instrument Catalog</h1>
          <p className="admin-page-subtitle" style={{ marginBottom: 0 }}>
            {products.length} instrument{products.length !== 1 ? 's' : ''} total
          </p>
        </div>
        <button className="admin-btn-primary" onClick={() => navigate('/admin/add')}>
          + Add Instrument
        </button>
      </div>

      {/* Tabs */}
      <div className="admin-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`admin-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} {counts[tab] > 0 && <span style={{ opacity: 0.6, fontSize: '0.75rem' }}>({counts[tab]})</span>}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <div className="admin-loading"><div className="admin-spinner" /></div>
      ) : error ? (
        <div className="admin-error">{error}</div>
      ) : filtered.length === 0 ? (
        <div className="admin-empty">
          <div className="admin-empty-icon">🎻</div>
          <div className="admin-empty-title">
            {activeTab === 'All' ? 'No instruments yet' : `No ${activeTab}s yet`}
          </div>
          <div className="admin-empty-text">
            {activeTab === 'All'
              ? 'Add your first instrument to get started.'
              : `Click "Add Instrument" and select ${activeTab} to add one.`}
          </div>
          <button className="admin-btn-primary" onClick={() => navigate('/admin/add')}>
            + Add Instrument
          </button>
        </div>
      ) : (
        <div className="admin-grid">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="admin-card"
              onClick={() => navigate(`/admin/products/${product.id}`)}
            >
              <div className="admin-card-image">
                <img src={product.front_image_url} alt={product.name} />
              </div>
              <div className="admin-card-body">
                <div className="admin-card-name">{product.name}</div>
                <div className="admin-card-type">{product.type}</div>
                {product.is_coming_soon && (
                  <div className="admin-coming-soon-badge">Coming Soon</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
