import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const NotFound = (): ReactElement => (
  <section className="auth-fullpage">
    <div className="auth-center-wrapper" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '72px', fontWeight: 800, color: 'var(--primary)', margin: '0 0 8px' }}>404</h1>
      <p style={{ fontSize: '20px', fontWeight: 500, marginBottom: '8px' }}>Page Not Found / 페이지를 찾을 수 없습니다</p>
      <p style={{ color: 'var(--text-light)', marginBottom: '32px' }}>The page you requested does not exist or has been moved.</p>
      <Link to="/" className="btn btn-primary">홈으로</Link>
    </div>
  </section>
);

export default NotFound;
