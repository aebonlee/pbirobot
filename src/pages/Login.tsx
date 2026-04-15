import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

type TabType = 'login' | 'register';

export default function Login() {
  const { login, signup, loginWithGoogle, loginWithKakao, isAuthenticated, error, loading } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<TabType>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (isAuthenticated) {
    navigate('/');
    return null;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    setSuccessMessage(null);

    if (!email || !password) {
      setLocalError('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    const result = await login(email, password);
    if (!result.error) {
      navigate('/');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    setSuccessMessage(null);

    if (!email || !password) {
      setLocalError('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    if (password.length < 6) {
      setLocalError('비밀번호는 6자 이상이어야 합니다.');
      return;
    }

    if (password !== confirmPassword) {
      setLocalError('비밀번호가 일치하지 않습니다.');
      return;
    }

    const result = await signup(email, password);
    if (!result.error) {
      setSuccessMessage('회원가입이 완료되었습니다. 이메일을 확인해주세요.');
      setActiveTab('login');
      setPassword('');
      setConfirmPassword('');
    }
  };

  const handleGoogleLogin = async () => {
    setLocalError(null);
    await loginWithGoogle();
  };

  const handleKakaoLogin = async () => {
    setLocalError(null);
    await loginWithKakao();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">PBI Robot</h1>
          <p className="mt-2 text-gray-500">서비스 로그인</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => { setActiveTab('login'); setLocalError(null); setSuccessMessage(null); }}
              className={`flex-1 py-4 text-sm font-semibold transition-colors ${
                activeTab === 'login'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              로그인
            </button>
            <button
              onClick={() => { setActiveTab('register'); setLocalError(null); setSuccessMessage(null); }}
              className={`flex-1 py-4 text-sm font-semibold transition-colors ${
                activeTab === 'register'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              회원가입
            </button>
          </div>

          <div className="p-6">
            {/* Error/Success Messages */}
            {(localError || error) && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                {localError || error}
              </div>
            )}
            {successMessage && (
              <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
                {successMessage}
              </div>
            )}

            {/* Login Form */}
            {activeTab === 'login' && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">
                    이메일
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">
                    비밀번호
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호 입력"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    autoComplete="current-password"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  {loading ? '로그인 중...' : '로그인'}
                </button>
              </form>
            )}

            {/* Register Form */}
            {activeTab === 'register' && (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">
                    이메일
                  </label>
                  <input
                    id="register-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">
                    비밀번호
                  </label>
                  <input
                    id="register-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="6자 이상 입력"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    autoComplete="new-password"
                  />
                </div>
                <div>
                  <label htmlFor="register-confirm" className="block text-sm font-medium text-gray-700 mb-1">
                    비밀번호 확인
                  </label>
                  <input
                    id="register-confirm"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="비밀번호 재입력"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    autoComplete="new-password"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  {loading ? '가입 중...' : '회원가입'}
                </button>
              </form>
            )}

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-gray-400">또는</span>
              </div>
            </div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google로 로그인
            </button>

            {/* Kakao Login */}
            <button
              type="button"
              onClick={handleKakaoLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all mt-3 disabled:opacity-50"
              style={{ background: '#FEE500', color: '#191919' }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 3C6.48 3 2 6.36 2 10.44c0 2.62 1.74 4.93 4.36 6.24-.19.7-.69 2.53-.79 2.93-.12.49.18.48.38.35.15-.1 2.44-1.66 3.43-2.33.85.13 1.73.19 2.62.19 5.52 0 10-3.36 10-7.38C22 6.36 17.52 3 12 3z" fill="#191919"/>
              </svg>
              카카오로 계속하기
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
