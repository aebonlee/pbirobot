"use client";
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || 'ko';

  useEffect(() => {
    if (!loading && !isAuthenticated) router.replace(`/${locale}/login`);
    if (!loading && isAuthenticated && !isAdmin) router.replace(`/${locale}`);
  }, [loading, isAuthenticated, isAdmin, router, locale]);

  if (loading) return <div className="flex justify-center items-center min-h-[60vh]"><div className="w-8 h-8 border-3 border-gray-300 border-t-blue-600 rounded-full animate-spin" /></div>;
  if (!isAuthenticated || !isAdmin) return null;
  return <>{children}</>;
}
