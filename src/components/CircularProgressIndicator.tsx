export const CircularProgressIndicator = (props: {
  value: number;
  label?: string;
  size?: number;
  strokeWidth?: number;
  backgroundColor?: string;
  foregroundColor?: string;
  textClassName?: string;
  labelClassName?: string;
}) => {
  const {
    value,
    label,
    size = 100,
    strokeWidth = 4,
    backgroundColor = "#ffffff",
    foregroundColor = "#4ade80",
    textClassName,
    labelClassName,
  } = props;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
          <circle
            className="transition-all duration-300 ease-in-out"
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            fill="none"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="transition-all duration-300 ease-in-out"
            stroke={foregroundColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            fill="none"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <div
          className={`absolute inset-0 flex items-center justify-center ${textClassName}`}
        >
          {value}
        </div>
      </div>
      {label && (
        <div
          className={`mt-2 text-center text-sm font-medium ${labelClassName}`}
        >
          {label}
        </div>
      )}
    </div>
  );
};
