import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-8 pt-20">
      <h1 className="text-7xl font-bold text-primary mb-2">404</h1>
      <p className="text-xl font-medium text-text-primary mb-2">Page Not Found / 페이지를 찾을 수 없습니다</p>
      <p className="text-text-muted mb-8">The page you requested does not exist or has been moved.</p>
      <Link to="/" className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors">홈으로</Link>
    </div>
  );
}
