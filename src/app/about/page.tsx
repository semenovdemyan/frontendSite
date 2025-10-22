import '.././globals.scss'

export default function Page() {
  return (
    <>
      <div
        style={{
          width: '100vw',
          margin: 0,
          padding: 0,
          position: 'fixed',
          top: 0,
          left: 0,
          overflow: 'hidden',
          // Отрицательные маржины для компенсации safe area
          marginTop: `calc(env(safe-area-inset-top, 0px) * -1)`,
          marginBottom: `calc(env(safe-area-inset-bottom, 0px) * -1)`,
          // Высота с учётом safe area
          height: `calc(100dvh + env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px))`,
        }}
      >
        <ol
          style={{
            width: '100%',
            height: '100%',
            margin: 0,
            padding: `
              env(safe-area-inset-top, 0px)
              0
              env(safe-area-inset-bottom, 0px)
              0
            `,
            listStyle: 'none',
            overflow: 'auto',
            boxSizing: 'border-box',
          }}
        >
          <li>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT1</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT1</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT1</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT1</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT1</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT1</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT1</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT1</p>
          </li>
          <li>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT2</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT2</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT2</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT2</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT2</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT2</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT2</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT2</p>
          </li>
          <li>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT3</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT3</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT3</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT3</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT3</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT3</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT3</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT3</p>
          </li>
          <li>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT4</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT4</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT4</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT4</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT4</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT4</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT4</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT4</p>
          </li>
          <li>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT5</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT5</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT5</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT5</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT5</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT5</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT5</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT5</p>
          </li>
          <li>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT6</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT6</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT6</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT6</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT6</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT6</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT6</p>
            <p style={{ color: '#FFF', fontSize: '60px' }}>ABOUT6</p>
          </li>
        </ol>
      </div>
    </>
  )
}
