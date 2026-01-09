import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'VibeCheck';
  const desc = searchParams.get('desc') || '나의 결과는?';
  const type = searchParams.get('type') || 'Unknown';

  // In a real app, load fonts here. For now, use system-ui implicitly or default.
  // const fontData = await fetch(new URL('../../../assets/fonts/Inter-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom right, #ffe4e6, #ffedd5)',
          padding: '40px',
        }}
      >
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 60,
                fontWeight: 900,
                color: '#e11d48',
                marginBottom: 20,
            }}
        >
            VibeCheck
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: 24,
            padding: '40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '1px solid rgba(0,0,0,0.05)',
            width: '80%',
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 10 }}>🎁</div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: '#18181b',
              textAlign: 'center',
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#52525b',
              textAlign: 'center',
              lineHeight: 1.5,
              wordBreak: 'keep-all',
            }}
          >
            {desc}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // fonts: [{ name: 'Inter', data: fontData, style: 'normal' }],
    },
  );
}
