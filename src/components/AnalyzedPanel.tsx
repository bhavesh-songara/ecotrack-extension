import { useMemo } from "react";
import { CircularProgressIndicator } from "./CircularProgressIndicator";
import { Divider } from "./Divider";
import { SustainabilityProgressIndicator } from "./SustainabilityProgressIndicator";
import { ProductDetail } from "./ProductDetail";

export const AnalyzedPanel = (props: { analyzedData: any; srcUrl: string }) => {
  const { analyzedData, srcUrl } = props;

  const { sustainabilityScores } = useMemo(() => {
    const sustainabilityScores = [
      {
        label: "Material Sustainability",
        score: analyzedData.sustainabilityAnalysis.materialSustainability.score,
      },
      {
        label: "Energy Efficiency",
        score: analyzedData.sustainabilityAnalysis.energyEfficiency.score,
      },
      {
        label: "Durability",
        score: analyzedData.sustainabilityAnalysis.durability.score,
      },
      {
        label: "Recyclability",
        score: analyzedData.sustainabilityAnalysis.recyclability.score,
      },
      {
        label: "Packaging",
        score: analyzedData.sustainabilityAnalysis.packaging.score,
      },
    ];

    return { sustainabilityScores };
  }, [analyzedData]);

  return (
    <div>
      <section className="flex justify-center gap-6 flex-wrap">
        {sustainabilityScores?.map((item) => {
          return (
            <SustainabilityProgressIndicator
              key={item.label}
              label={item.label}
              score={Number(item.score)}
            />
          );
        })}
      </section>

      <Divider className="my-4" />

      <ProductDetail
        name={analyzedData.product.name}
        category={analyzedData.product.category}
        brand={analyzedData.product.brand}
        sustainabilityScore={Number(analyzedData.product.sustainabilityScore)}
        priceRange={analyzedData.product.priceRange}
      />

      <div className="mt-2 grid grid-cols-2">
        <p className="text-sm text-gray-700">
          {analyzedData.sustainabilityAnalysis.overallAssessment}
        </p>

        <section>
          <img src={srcUrl} className="w-full" />
        </section>
      </div>

      <Divider className="my-4" />

      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Sustainability Tips For Consumer
        </h1>

        <div className="flex flex-col gap-4 mt-2">
          {analyzedData?.sustainabilityTips?.map((tip: any, index: number) => {
            return (
              <section className="py-4 px-2 rounded-4 flex gap-1 flex-col border border-solid border-gray-200 shadow-sm">
                <h3 className="font-semibold text-gray-800">{tip.category}</h3>
                <p className="text-xs text-gray-600">{tip.tip}</p>
                <p className="text-xs text-gray-25 bg-primary-400 rounded-4 p-1">
                  {tip.impact}
                </p>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
