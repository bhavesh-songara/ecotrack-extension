import { PoweredByGemini } from "./PoweredByGemini";

export const AnalyzedCarbonFootPrint = (props: {
  carbonFootPrint: { kgCO2e: number; description: string };
  reportUrl?: string;
}) => {
  const { carbonFootPrint, reportUrl } = props;

  const emissionMetrics = [
    {
      icon: "🌳",
      label: `Equivalent to planting ${Math.round(
        carbonFootPrint.kgCO2e / 20
      )} trees`,
    },
    {
      icon: "🚗",
      label: `Equivalent to driving ${Math.round(
        carbonFootPrint.kgCO2e / 0.2
      )} miles in a car`,
    },
    {
      icon: "💡",
      label: `Equivalent to the energy use of an average  home for ${Math.round(
        carbonFootPrint.kgCO2e / 8
      )} days`,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <section className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Carbon Footprint
        </h2>

        <PoweredByGemini />
      </section>

      <div className="text-2xl font-bold text-blue-600 mb-2 mt-2">
        {carbonFootPrint?.kgCO2e}{" "}
        <span className="text-sm font-normal">
          kgCO<sub>2</sub>e
        </span>
      </div>
      <p className="text-sm text-gray-600">{carbonFootPrint.description}</p>

      <div className="flex flex-col gap-2 mt-2">
        {emissionMetrics.map((metric, index) => {
          return (
            <div className="flex gap-2">
              {metric.icon}
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
          );
        })}
      </div>

      {reportUrl && (
        <section className="mt-2 flex justify-end">
          <a
            href={reportUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 text-sm hover:underline "
          >
            View Report
          </a>
        </section>
      )}
    </div>
  );
};
