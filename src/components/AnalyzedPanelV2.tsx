import { AnalyzedCarbonFootPrint } from "./AnalyzedCarbonFootPrint";
import { EcoScoreGauge } from "./EcoScoreGauge";
import { EcoScoreLine } from "./EcoScoreLine";
import { EcotrackAnalyzeSection } from "./EcotrackAnalyzeSection";
import { PoweredByGemini } from "./PoweredByGemini";

export const AnalyzedPanelV2 = (props: { data: any; imageSrc: string }) => {
  const { data, imageSrc } = props;

  const {
    product,
    ecoScore,
    carbonFootPrint,
    reportUrl,
    recyclingOptions,
    quantitativePoints,
  } = data;

  return (
    <div className="bg-gray-100">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 ">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <section className="flex gap-1 items-center">
          <p className="text-green-100">EcoTrack Assessment</p>
          <PoweredByGemini className="text-white" />
        </section>
      </div>

      {/* <EcoScoreGauge score={ecoScore} /> */}

      <div className="flex flex-col gap-4 px-2 py-4">
        <EcoScoreLine ecoScore={ecoScore} />

        <AnalyzedCarbonFootPrint
          carbonFootPrint={carbonFootPrint}
          reportUrl={reportUrl}
        />

        {quantitativePoints?.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {quantitativePoints?.map((point: any, index: number) => {
              return (
                <section
                  key={index}
                  className="bg-white shadow-lg p-4 rounded-lg"
                >
                  <div className="flex gap-2 items-start">
                    <div>{point.icon}</div>
                    <p className="font-semibold text-sm text-gray-700">
                      {point.title}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">{point.description}</p>
                </section>
              );
            })}
          </div>
        )}

        <EcotrackAnalyzeSection
          title="Recycling Options"
          items={recyclingOptions}
        />

        <EcotrackAnalyzeSection
          title="Sustainability Tips"
          items={data.sustainabilityTips}
        />

        <EcotrackAnalyzeSection
          title="Initiatives by Brand"
          items={data.initiativesByBrand}
        />
      </div>
    </div>
  );
};
