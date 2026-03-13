function PixelWalker({
  spriteSrc = '/pixel-runner.png',
  frameCount = 4,
  frameWidth = 224,
  frameHeight = 314,
  scale = 0.22,
  walkDuration = 7,
  frameDuration = 0.56,
}) {
  const scaledHeight = Math.round(frameHeight * scale)
  const scaledWidth = Math.round(frameWidth * scale)
  const walkers = [0, -walkDuration / 2]

  return (
    <div className="pixel-walker-track" style={{ height: `${scaledHeight + 4}px` }}>
      {walkers.map((phaseDelay, index) => (
        <div
          key={index}
          className="pixel-walker-mover"
          style={{
            '--walker-walk-duration': `${walkDuration}s`,
            '--walker-size': `${scaledWidth}px`,
            '--walker-phase-delay': `${phaseDelay}s`,
          }}
        >
          <div
            className="pixel-walker-sprite"
            style={{
              '--walker-frame-duration': `${frameDuration}s`,
              '--walker-frame-count': frameCount,
              '--walker-frame-width': `${frameWidth}px`,
              '--walker-frame-height': `${frameHeight}px`,
              '--walker-scale': scale,
              '--walker-sheet-width': `${frameCount * frameWidth}px`,
              backgroundImage: `url(${spriteSrc})`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default PixelWalker
