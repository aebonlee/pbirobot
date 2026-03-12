export default function NotFound() {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily:
            'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          backgroundColor: '#ffffff',
          color: '#4b5563',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '5rem',
              fontWeight: 700,
              color: '#0056b3',
              margin: '0 0 0.5rem',
              lineHeight: 1,
            }}
          >
            404
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#111827',
              margin: '0 0 0.5rem',
              fontWeight: 500,
            }}
          >
            페이지를 찾을 수 없습니다
          </p>
          <p
            style={{
              fontSize: '0.95rem',
              color: '#9ca3af',
              margin: '0 0 2rem',
            }}
          >
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
          <a
            href="/ko"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              backgroundColor: '#0056b3',
              color: '#ffffff',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
            }}
          >
            홈으로 돌아가기
          </a>
        </div>
      </body>
    </html>
  );
}
