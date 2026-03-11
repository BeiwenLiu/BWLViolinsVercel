import { useEffect, useState } from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { getUser, signOut, onAuthStateChange } from '@/lib/auth';
import type { User } from '@supabase/supabase-js';
import '@/styles/admin.css';

export default function AdminLayout() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getUser().then((u) => {
      setUser(u);
      setLoading(false);
      if (!u) navigate('/admin/login');
    });

    const { data: { subscription } } = onAuthStateChange((u) => {
      setUser(u);
      if (!u) navigate('/admin/login');
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="admin-root" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div className="admin-spinner" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="admin-root">
      <header className="admin-header">
        <Link to="/admin" style={{ textDecoration: 'none' }}>
          <div className="admin-brand">
            <span>BWL VIOLINS</span>
            <span className="admin-badge">ADMIN</span>
          </div>
        </Link>
        <div className="admin-header-actions">
          <span className="admin-user-email">{user.email}</span>
          <button className="admin-signout-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </header>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
