import React from "react";

const PercentageCircle = (payload: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  strokeClassName?: string;
}) => {
  const {
    percentage,
    size = 50,
    strokeWidth = 4,
    strokeClassName = "text-blue-600",
  } = payload;

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          className="text-gray-300"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={strokeClassName}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <span className={`absolute font-semibold text-sm ${strokeClassName}`}>
        {percentage}
      </span>
    </div>
  );
};

export default PercentageCircle;
