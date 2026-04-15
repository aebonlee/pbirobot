import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) return <div className="flex justify-center items-center min-h-[60vh]"><div className="w-8 h-8 border-3 border-gray-300 border-t-blue-600 rounded-full animate-spin" /></div>;
  if (!isAuthenticated || !isAdmin) return <Navigate to="/" replace />;
  return <>{children}</>;
}
