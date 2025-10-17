import React from 'react'

interface VideoTrack {
  src: string
  kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'
  srcLang?: string
  label?: string
  default?: boolean
}

interface VideoProps {
  ref?: React.RefObject<HTMLVideoElement>
  src: string
  width?: number | string
  height?: number | string
  poster?: string | undefined | null
  autoPlay?: boolean
  controls?: boolean
  loop?: boolean
  muted?: boolean
  preload?: 'none' | 'metadata' | 'auto'
  tracks?: VideoTrack[]
  className?: string
  style?: React.CSSProperties
}

export const Video: React.FC<VideoProps> = ({
  ref,
  src,
  width = '1920px',
  height = '1024px',
  poster = null,
  autoPlay = true,
  controls = false,
  loop = false,
  muted = false,
  preload = 'metadata',
  tracks = [],
  className,
  style,
}) => {
  const resolvePath = (path?: string | null) => {
    if (!path) return undefined
    return path.startsWith('/') ? path : `/${path}`
  }

  // Функция для преобразования числовых значений в пиксели
  const formatDimension = (dim: number | string): string => {
    if (typeof dim === 'number') {
      return `${dim}px`
    }
    return dim
  }

  const videoStyle: React.CSSProperties = {
    width: formatDimension(width),
    height: formatDimension(height),
    ...style,
  }

  return (
    <video
      ref={ref}
      poster={resolvePath(poster)}
      autoPlay={autoPlay}
      controls={controls}
      loop={loop}
      muted={muted}
      preload={preload}
      className={className}
      style={videoStyle}
    >
      <source src={resolvePath(src)} type="video/mp4" />
      {tracks.map((track, index) => (
        <track
          key={index}
          src={resolvePath(track.src)}
          kind={track.kind}
          srcLang={track.srcLang}
          label={track.label}
          default={track.default}
        />
      ))}
      Ваш браузер не поддерживает тег <code>video</code>.
    </video>
  )
}
