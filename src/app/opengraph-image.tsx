import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mate Moscoloni - Freelance Developer & AI Consultant'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 50% 40%, rgba(74, 158, 255, 0.08) 20%, transparent 70%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: '0',
            backgroundImage:
              'radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            display: 'flex',
          }}
        />

        {/* Blue radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(74, 158, 255, 0.12) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '20px',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#f0f0f0',
              lineHeight: 1.1,
              letterSpacing: '-2px',
              textShadow: '0 0 40px rgba(74, 158, 255, 0.3)',
            }}
          >
            Mate Moscoloni
          </div>
          <div
            style={{
              fontSize: '32px',
              color: '#5aaaff',
              fontWeight: '600',
            }}
          >
            Freelance Developer & AI Consultant
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#999999',
              letterSpacing: '-0.01em',
            }}
          >
            Web products and AI automations for businesses
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
