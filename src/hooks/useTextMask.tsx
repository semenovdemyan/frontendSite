import { useEffect, useId, useRef } from 'react'
import ReactDOM from 'react-dom/client'

type Size = number | string

interface UseTextMaskProps {
  text: string
  width?: Size
  height?: Size
  fontSize?: Size
  fontFamily?: string
  color?: string
}

function toNumber(value: Size, fallback: number): number {
  if (typeof value === 'number') return value
  const parsed = parseFloat(value)
  return isNaN(parsed) ? fallback : parsed
}

export function useTextMask({
  text,
  width = 500,
  height = 150,
  fontSize = 100,
  fontFamily = "'Titan One', cursive",
  color = 'black',
}: UseTextMaskProps) {
  const maskId = useId()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rootRef = useRef<ReactDOM.Root | null>(null)

  const numericWidth = toNumber(width, 500)
  const numericHeight = toNumber(height, 150)
  const numericFontSize = toNumber(fontSize, 100)

  useEffect(() => {
    if (!containerRef.current) {
      const container = document.createElement('div')
      container.id = 'svg-mask-container'
      container.style.position = 'absolute'
      container.style.width = '0'
      container.style.height = '0'
      container.style.overflow = 'visible'
      document.body.appendChild(container)
      containerRef.current = container
      rootRef.current = ReactDOM.createRoot(container)
    }

    if (rootRef.current) {
      const svg = (
        <svg
          width={typeof width === 'string' ? width : numericWidth}
          height={typeof height === 'string' ? height : numericHeight}
          viewBox={`0 0 ${numericWidth} ${numericHeight}`}
          aria-hidden="true"
        >
          <defs>
            <mask id={maskId} maskUnits="userSpaceOnUse">
              <rect width={numericWidth} height={numericHeight} fill="white" />
              <text
                x={numericWidth / 2}
                y={numericHeight / 2}
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily={fontFamily}
                fontSize={
                  typeof fontSize === 'string' ? fontSize : numericFontSize
                }
                fontWeight="700"
                fill={color}
              >
                {text}
              </text>
            </mask>
          </defs>
        </svg>
      )

      rootRef.current.render(svg)
    }

    return () => {
      if (rootRef.current && containerRef.current) {
        rootRef.current.unmount()
        containerRef.current.remove()
        containerRef.current = null
        rootRef.current = null
      }
    }
  }, [
    maskId,
    text,
    width,
    height,
    fontSize,
    fontFamily,
    color,
    numericWidth,
    numericHeight,
    numericFontSize,
  ])

  return maskId
}
