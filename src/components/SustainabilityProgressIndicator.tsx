import { useMemo } from "react";
import { CircularProgressIndicator } from "./CircularProgressIndicator";
import { theme } from "../constants/theme";

export const SustainabilityProgressIndicator = (props: {
  label: string;
  score: number;
}) => {
  const { label, score } = props;

  const { backgroundColor, foregroundColor, textClassName } = useMemo(() => {
    let backgroundColor = theme.colors.primary[50];
    let foregroundColor = theme.colors.primary[400];
    let textClassName = "text-primary-400";

    if (score < 40) {
      backgroundColor = theme.colors.error[50];
      foregroundColor = theme.colors.error[400];
      textClassName = "text-error-400";
    } else if (score < 70) {
      backgroundColor = theme.colors.warning[50];
      foregroundColor = theme.colors.warning[400];
      textClassName = "text-warning-400";
    }

    return { backgroundColor, foregroundColor, textClassName };
  }, [score]);

  return (
    <div className="w-16">
      <CircularProgressIndicator
        value={score}
        label={label}
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
        textClassName={`text-lg font-semibold ${textClassName}`}
        labelClassName="text-gray-800 text-xs font-medium"
        size={65}
        strokeWidth={5}
      />
    </div>
  );
};
