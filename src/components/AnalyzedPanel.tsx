import { useMemo } from "react";
import { CircularProgressIndicator } from "./CircularProgressIndicator";
import { Divider } from "./Divider";
import { SustainabilityProgressIndicator } from "./SustainabilityProgressIndicator";
import { ProductDetail } from "./ProductDetail";

// const analyzedData = {
//   product: {
//     name: "iPhone 13",
//     category: "Smartphone",
//     brand: "Apple",
//     sustainabilityScore: "65",
//     priceRange: "$599 - $1099",
//   },
//   sustainabilityAnalysis: {
//     overallAssessment:
//       "The iPhone 13 shows some improvements in sustainability compared to previous models, particularly in its use of recycled materials and energy efficiency. However, like most electronics, it still has significant environmental impacts, especially in its production and end-of-life phases.",
//     carbonFootprint: {
//       value: "70 kg CO2e (estimated)",
//       comparison: "Slightly lower than average for smartphones",
//       breakdown: {
//         production: "73%",
//         transportation: "11%",
//         usage: "5%",
//         endOfLife: "11%",
//       },
//     },
//     waterFootprint: {
//       value: "72,000 liters (estimated)",
//       comparison: "Higher than average for smartphones",
//     },
//     materialSustainability: {
//       score: "11",
//       details:
//         "Apple utilizes recycled aluminum, gold, and plastic in the iPhone 13's construction, reducing the demand for virgin materials. However, the mining of rare earth elements for components remains environmentally intensive.",
//       sourcingEthics:
//         "Apple has implemented programs to improve labor conditions and responsible sourcing practices in its supply chain, but challenges remain.",
//     },
//     energyEfficiency: {
//       score: "10",
//       annualEnergyCost: "$1.50 (estimated)",
//       energyLabel: "ENERGY STAR certified",
//     },
//     durability: {
//       score: "75",
//       estimatedLifespan: "4-5 years (with proper care)",
//       repairability:
//         "Repairability score: 6/10. Apple offers authorized repair services, but access to parts and repair information for independent shops is limited.",
//     },
//     recyclability: {
//       score: "60",
//       recyclableComponents: "90% (by weight)",
//       recyclingInstructions:
//         "Apple offers a trade-in program and partners with recycling facilities. Check local regulations for proper e-waste disposal.",
//     },
//     packaging: {
//       score: "85",
//       details:
//         "Apple has minimized packaging waste by using recycled and sustainably sourced materials. The iPhone 13 packaging is now completely plastic-free.",
//     },
//   },
//   sustainabilityTips: [
//     {
//       category: "Usage",
//       tip: "Optimize your phone's battery life by reducing screen brightness, limiting background app activity, and using Wi-Fi when available.",
//       impact:
//         "Can reduce energy consumption and extend the lifespan of your phone's battery.",
//     },
//     {
//       category: "Maintenance",
//       tip: "Use a protective case and screen protector to prevent damage and prolong the life of your phone.",
//       impact:
//         "Can delay the need for repairs or replacement, reducing electronic waste.",
//     },
//     {
//       category: "Disposal",
//       tip: "Trade in your old phone with Apple or a certified recycler instead of discarding it.",
//       impact:
//         "Ensures responsible recycling of valuable materials and prevents e-waste from ending up in landfills.",
//     },
//   ],
// };

// const srcUrl =
//   "https://m.media-amazon.com/images/I/819yMWbmg5L._AC_UY436_FMwebp_QL65_.jpg";

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
