/**
 * SectionDivider Component
 * SVG-based section dividers for smooth transitions
 * Requirements: 4.1 - Section transition effects
 * 
 * @param {string} type - Divider type: 'wave', 'curve', 'angle', 'triangle' (default 'wave')
 * @param {string} fillColor - Fill color (default 'white')
 * @param {string} bgColor - Background color (default 'transparent')
 * @param {boolean} flip - Flip vertically for bottom placement (default false)
 * @param {number} height - Divider height in pixels (default 80)
 * @param {string} className - Additional CSS classes
 */
const SectionDivider = ({
  type = 'wave',
  fillColor = 'white',
  bgColor = 'transparent',
  flip = false,
  height = 80,
  className = ''
}) => {
  // SVG paths for different divider types
  const paths = {
    wave: 'M0,32 C150,96 350,0 500,32 C650,64 850,96 1000,32 L1000,100 L0,100 Z',
    curve: 'M0,100 Q500,0 1000,100 L1000,100 L0,100 Z',
    angle: 'M0,100 L500,0 L1000,100 L1000,100 L0,100 Z',
    triangle: 'M0,100 L500,20 L1000,100 L1000,100 L0,100 Z',
    waves: 'M0,50 C125,100 250,0 375,50 C500,100 625,0 750,50 C875,100 1000,0 1000,50 L1000,100 L0,100 Z'
  };

  const selectedPath = paths[type] || paths.wave;

  return (
    <div
      className={`w-full overflow-hidden leading-none ${className}`}
      style={{
        backgroundColor: bgColor,
        transform: flip ? 'rotate(180deg)' : 'none',
        marginTop: flip ? 0 : -1,
        marginBottom: flip ? -1 : 0
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height: `${height}px`, display: 'block' }}
      >
        <path
          d={selectedPath}
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

/**
 * GradientDivider Component
 * Section divider with gradient fill
 */
export const GradientDivider = ({
  type = 'wave',
  gradientFrom = '#3b82f6',
  gradientTo = '#1e40af',
  flip = false,
  height = 80,
  className = ''
}) => {
  const gradientId = `gradient-${type}-${Date.now()}`;
  
  const paths = {
    wave: 'M0,32 C150,96 350,0 500,32 C650,64 850,96 1000,32 L1000,100 L0,100 Z',
    curve: 'M0,100 Q500,0 1000,100 L1000,100 L0,100 Z',
    angle: 'M0,100 L500,0 L1000,100 L1000,100 L0,100 Z'
  };

  return (
    <div
      className={`w-full overflow-hidden leading-none ${className}`}
      style={{
        transform: flip ? 'rotate(180deg)' : 'none',
        marginTop: flip ? 0 : -1,
        marginBottom: flip ? -1 : 0
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height: `${height}px`, display: 'block' }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
        <path
          d={paths[type] || paths.wave}
          fill={`url(#${gradientId})`}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
