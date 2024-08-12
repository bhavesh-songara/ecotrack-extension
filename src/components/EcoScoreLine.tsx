import { PoweredByGemini } from "./PoweredByGemini";

export const EcoScoreLine = (props: { ecoScore: number }) => {
  const { ecoScore } = props;

  return (
    <section className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold text-gray-700">Eco Score</h2>

      <div
        className="h-2 rounded-2 relative mt-2 mb-1"
        style={{
          background: `linear-gradient(to right, #FF0000 ${
            100 - ecoScore
          }%, #00FF00 ${ecoScore}%)`,
        }}
      >
        <section
          className="h-2 w-0.5 bg-black absolute"
          style={{ left: `${ecoScore}%` }}
        ></section>
      </div>

      <section className="flex justify-end">
        <PoweredByGemini className="text-xs" />
      </section>
    </section>
  );
};
