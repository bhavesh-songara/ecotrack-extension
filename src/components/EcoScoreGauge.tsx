import { useMemo } from "react";

export const EcoScoreGauge = (props: { score: number }) => {
  const { score } = props;

  const { circleClassName, scoreClassName } = useMemo(() => {
    let circleClassName = "";
    let scoreClassName = "";

    if (score < 50) {
      circleClassName = "text-red-500";
      scoreClassName = "text-red-600";
    } else if (score < 80) {
      circleClassName = "text-yellow-500";
      scoreClassName = "text-yellow-600";
    } else {
      circleClassName = "text-green-500";
      scoreClassName = "text-green-600";
    }

    return { circleClassName, scoreClassName };
  }, [score]);

  return (
    <div className="relative w-40 h-40 mx-auto mb-4">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        <circle
          className={`${circleClassName} progress-ring stroke-current`}
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 - (251.2 * score) / 100}
        ></circle>
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className={`text-3xl font-bold ${scoreClassName}`}>{score}</div>
        <div className="text-sm text-gray-500">Eco Score</div>
      </div>
    </div>
  );
};
