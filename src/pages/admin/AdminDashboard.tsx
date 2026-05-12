import { useState, useEffect, useCallback, type ReactElement } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';

const SUPER_ADMINS = ['aebon@kakao.com', 'aebon@kyonggi.ac.kr', 'radical8566@gmail.com'];

interface UserProfile {
  id: string;
  email: string;
  display_name: string | null;
  signup_domain: string | null;
  visited_sites: string[] | null;
  last_sign_in_at: string | null;
  created_at: string | null;
}

type TabType = 'members' | 'stats';

const AdminDashboard = (): ReactElement => {
  const { user } = useAuth();

  const isAdmin = user && SUPER_ADMINS.includes(user.email || '');

  if (!isAdmin) {
    return (
      <>
        <section className="page-header">
          <div className="container"><h1>Access Denied</h1></div>
        </section>
        <section style={{ padding: '80px 0', textAlign: 'center' }}>
          <div className="container">
            <p style={{ color: 'var(--text-secondary)' }}>관리자 권한이 필요합니다.</p>
          </div>
        </section>
      </>
    );
  }

  return <AdminContent user={user} />;
};

const AdminContent = ({ user }: { user: { email?: string } }): ReactElement => {
  const [activeTab, setActiveTab] = useState<TabType>('members');
  const [members, setMembers] = useState<UserProfile[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingData, setLoadingData] = useState(false);
  const pageSize = 10;

  const fetchMembers = useCallback(async () => {
    if (!supabase) return;
    setLoadingData(true);
    try {
      const from = (currentPage - 1) * pageSize;
      const to = from + pageSize - 1;
      let query = supabase
        .from('user_profiles')
        .select('id, email, display_name, signup_domain, visited_sites, last_sign_in_at, created_at', { count: 'exact' });
      if (searchQuery.trim()) {
        query = query.or(`email.ilike.%${searchQuery}%,display_name.ilike.%${searchQuery}%`);
      }
      const { data, count, error } = await query.order('created_at', { ascending: false }).range(from, to);
      if (error) { console.error('Error fetching members:', error); return; }
      setMembers((data as UserProfile[]) || []);
      setTotalCount(count || 0);
    } finally {
      setLoadingData(false);
    }
  }, [currentPage, searchQuery]);

  useEffect(() => { if (activeTab === 'members') fetchMembers(); }, [activeTab, fetchMembers]);
  useEffect(() => { setCurrentPage(1); }, [searchQuery]);

  const totalPages = Math.ceil(totalCount / pageSize);
  const formatDate = (d: string | null) => d ? new Date(d).toLocaleDateString('ko-KR') : '-';

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>관리자 대시보드</h1>
          <p>{user?.email}</p>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            {(['members', 'stats'] as TabType[]).map(tab => (
              <button
                key={tab}
                className={activeTab === tab ? 'btn btn-primary' : 'btn btn-ghost'}
                onClick={() => setActiveTab(tab)}
                style={{ fontSize: '14px' }}
              >
                {tab === 'members' ? '회원관리' : '통계'}
              </button>
            ))}
          </div>

          {activeTab === 'members' && (
            <div style={{ background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
              {/* Search */}
              <div style={{ padding: '16px', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="이메일 또는 이름으로 검색..."
                  style={{ flex: 1, maxWidth: '400px', padding: '8px 12px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '14px', background: 'var(--bg-white)', color: 'var(--text-primary)' }}
                />
                <span style={{ fontSize: '14px', color: 'var(--text-light)' }}>총 <strong style={{ color: 'var(--text-primary)' }}>{totalCount}</strong>명</span>
              </div>

              {/* Table */}
              <div style={{ overflowX: 'auto' }}>
                <table className="spec-table" style={{ width: '100%', minWidth: '700px' }}>
                  <thead>
                    <tr>
                      <th>이메일</th>
                      <th>이름</th>
                      <th>가입 도메인</th>
                      <th>방문 사이트</th>
                      <th>최근 로그인</th>
                      <th>가입일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loadingData ? (
                      <tr><td colSpan={6} style={{ textAlign: 'center', padding: '40px 0' }}><div className="loading-spinner"></div></td></tr>
                    ) : members.length === 0 ? (
                      <tr><td colSpan={6} style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-light)' }}>{searchQuery ? '검색 결과가 없습니다.' : '등록된 회원이 없습니다.'}</td></tr>
                    ) : members.map(m => (
                      <tr key={m.id}>
                        <td style={{ fontWeight: 600 }}>{m.email || '-'}</td>
                        <td>{m.display_name || '-'}</td>
                        <td>{m.signup_domain || '-'}</td>
                        <td>{m.visited_sites?.slice(0, 3).join(', ') || '-'}{(m.visited_sites?.length || 0) > 3 ? ` +${m.visited_sites!.length - 3}` : ''}</td>
                        <td>{formatDate(m.last_sign_in_at)}</td>
                        <td>{formatDate(m.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderTop: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '13px', color: 'var(--text-light)' }}>{(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, totalCount)} / {totalCount}</span>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button className="btn btn-ghost" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} style={{ fontSize: '13px', padding: '4px 12px' }}>이전</button>
                    <button className="btn btn-ghost" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} style={{ fontSize: '13px', padding: '4px 12px' }}>다음</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'stats' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-color)', padding: '24px' }}>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '4px' }}>전체 회원수</p>
                <p style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)' }}>{totalCount.toLocaleString()}</p>
              </div>
              <div style={{ background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-color)', padding: '24px' }}>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '4px' }}>사이트</p>
                <p style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)' }}>pbirobot</p>
                <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '4px' }}>pbirobot.dreamitbiz.com</p>
              </div>
              <div style={{ background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-color)', padding: '24px' }}>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '4px' }}>관리자</p>
                <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>{user?.email}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
