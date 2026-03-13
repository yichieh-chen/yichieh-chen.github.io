function BackgroundBeams() {
  const beams = [
    { left: '8%', delay: '-2s', duration: '16s', opacity: 0.42 },
    { left: '22%', delay: '-8s', duration: '13s', opacity: 0.35 },
    { left: '41%', delay: '-4s', duration: '17s', opacity: 0.3 },
    { left: '63%', delay: '-11s', duration: '12s', opacity: 0.48 },
    { left: '82%', delay: '-6s', duration: '15s', opacity: 0.33 },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,138,70,0.22),transparent_34%),radial-gradient(circle_at_88%_22%,rgba(53,206,255,0.24),transparent_32%),radial-gradient(circle_at_50%_88%,rgba(240,242,255,0.4),transparent_40%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="absolute -top-20 left-1/2 h-80 w-[90vw] -translate-x-1/2 rounded-full bg-cyan-200/35 blur-3xl animate-blob-drift" />
      <div className="absolute bottom-[-140px] right-[8%] h-96 w-96 rounded-full bg-orange-200/40 blur-3xl animate-blob-drift [animation-delay:-7s]" />

      {beams.map((beam, index) => (
        <span
          key={index}
          className="beam-line"
          style={{
            left: beam.left,
            opacity: beam.opacity,
            animationDelay: beam.delay,
            animationDuration: beam.duration,
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundBeams
