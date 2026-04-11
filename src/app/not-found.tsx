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
            "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
          backgroundColor: "#ffffff",
          color: "#4b5563",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "5rem",
              fontWeight: 700,
              color: "#0056b3",
              margin: "0 0 0.5rem",
              lineHeight: 1,
            }}
          >
            404
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#111827",
              margin: "0 0 0.5rem",
              fontWeight: 500,
            }}
          >
            Page Not Found / 페이지를 찾을 수 없습니다
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#9ca3af",
              margin: "0 0 2rem",
            }}
          >
            The page you requested does not exist or has been moved.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href="/ko"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                backgroundColor: "#0056b3",
                color: "#ffffff",
                borderRadius: "0.5rem",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.95rem",
              }}
            >
              홈으로 (KO)
            </a>
            <a
              href="/en"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                backgroundColor: "#0056b3",
                color: "#ffffff",
                borderRadius: "0.5rem",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.95rem",
              }}
            >
              Home (EN)
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
