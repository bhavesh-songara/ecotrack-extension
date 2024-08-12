import { PoweredByGemini } from "./PoweredByGemini";

const EMISSION_OFFSET_PER_TREE = 25.97;
const EMISSION_PER_CAR_KM = 0.136;
const EMISSION_PER_DAY_ELECTRICITY = 12.12; // Average electricity use 30kwh/day worldwide * 0.43 kgCO2e/kWh

export const AnalyzedCarbonFootPrint = (props: {
  carbonFootPrint: { kgCO2e: number; description: string };
  reportUrl?: string;
}) => {
  const { carbonFootPrint, reportUrl } = props;

  const emissionMetrics = [
    {
      icon: "🌳",
      label: `Equivalent to planting ${Math.ceil(
        carbonFootPrint.kgCO2e / EMISSION_OFFSET_PER_TREE
      )} trees`,
    },
    {
      icon: "🚗",
      label: `Equivalent to driving ${Math.ceil(
        carbonFootPrint.kgCO2e / EMISSION_PER_CAR_KM
      )} km in a car`,
    },
    {
      icon: "💡",
      label: `Equivalent to the electricity use of an average home for ${Math.round(
        carbonFootPrint.kgCO2e / EMISSION_PER_DAY_ELECTRICITY
      )} days`,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <section className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Carbon Footprint
        </h2>

        <PoweredByGemini className="text-xs" />
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
