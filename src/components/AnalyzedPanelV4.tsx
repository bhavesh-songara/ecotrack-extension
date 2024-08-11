import { AnalyzedCarbonFootPrint } from "./AnalyzedCarbonFootPrint";
import { EcoScoreGauge } from "./EcoScoreGauge";
import { EcotrackAnalyzeSection } from "./EcotrackAnalyzeSection";
import { PoweredByGemini } from "./PoweredByGemini";

const data = {
  product: {
    name: "iPhone 13",
    brand: "Apple",
  },
  ecoScore: 85,
  carbonFootPrint: {
    kgCO2e: 87,
    description:
      "Low carbon footprint due to energy efficiency and use of renewable energy in production.",
  },
  reportUrl: "https://example.com/report",
  recyclingOptions: [
    {
      icon: "♻️",
      title: "Recycle at Apple Store",
      description:
        "Recycle your device at an Apple Store for free and get a 10% discount on your next purchase.",
    },
    {
      icon: "📱",
      title: "Trade in for a new device",
      description:
        "Trade in your device for a new one and get a discount on your purchase.",
    },
  ],
  sustainabilityTips: [
    {
      icon: "📱",
      title: "Extend Device Lifespan",
      description:
        "Use a protective case and screen protector to prevent damage and extend your device's life.",
    },
    {
      icon: "🔋",
      title: "Battery Care",
      description:
        "Avoid overcharging your device to extend battery life and reduce energy consumption.",
    },
  ],
  initiativesByBrand: [
    {
      icon: "🌳",
      title: "Renewable Energy",
      description:
        "Apple is committed to using 100% renewable energy in its operations.",
    },
    {
      icon: "♻️",
      title: "Recycling Program",
      description:
        "Apple has a recycling program to recover materials from old devices for reuse.",
    },
  ],
};

export const AnalyzedPanelV4 = (props: { data: any; imageSrc: string }) => {
  const { data, imageSrc } = props;

  const { product, ecoScore, carbonFootPrint, reportUrl, recyclingOptions } =
    data;

  return (
    <div className="bg-gray-100">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 ">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <section className="flex gap-1 items-center">
          <p className="text-green-100">EcoTrack Assessment</p>
          <PoweredByGemini className="text-white" />
        </section>
      </div>

      <EcoScoreGauge score={ecoScore} />

      <div className="flex flex-col gap-4 px-2">
        <AnalyzedCarbonFootPrint
          carbonFootPrint={carbonFootPrint}
          reportUrl={reportUrl}
        />

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
