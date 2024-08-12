import { AnalyzedCarbonFootPrint } from "./AnalyzedCarbonFootPrint";
import { EcoScoreGauge } from "./EcoScoreGauge";
import { EcoScoreLine } from "./EcoScoreLine";
import { EcotrackAnalyzeSection } from "./EcotrackAnalyzeSection";
import { PoweredByGemini } from "./PoweredByGemini";

const data = {
  product: {
    name: "Google Pixel 7a",
    category: "Electronics",
    subCategory: "Smartphone",
    brand: "Google",
    metaData: {
      color: "Green",
      displayType: "Full-screen display",
      operatingSystem: "Android",
      camera: "Dual rear cameras",
      features: "Weather widget, Time display, Notification icons, App drawer",
      connectivity:
        "Likely 5G (based on current market trends and Google Pixel phone offerings)",
    },
  },
  ecoScore: 78,
  carbonFootPrint: {
    kgCO2e: 59,
    description:
      "The estimated carbon footprint of the Google Pixel 7a is 59 kg CO2e, based on life cycle assessment data from similar Google Pixel models. This includes emissions from manufacturing, transportation, use, and end-of-life processing. Google actively works to reduce its environmental impact through initiatives like using recycled materials, plastic-free packaging, and energy-efficient design.",
  },
  reportUrl:
    "https://www.gstatic.com/gumdrop/sustainability/pixel-7a-product-environmental-report.pdf",
  recyclingOptions: [
    {
      icon: "♻️",
      title: "Google Trade-In",
      description:
        "Trade in your old phone for a credit towards a new Pixel, ensuring responsible recycling or reuse.",
    },
    {
      icon: "📦",
      title: "E-Waste Recycling Centers",
      description:
        "Find local e-waste recycling centers to properly dispose of your old smartphone and its components. 75% of e-waste is recycled improperly, polluting our environment and harming communities.",
    },
  ],
  sustainabilityTips: [
    {
      icon: "🔋",
      title: "Optimize Battery Life",
      description:
        "Extend the life of your phone's battery by adjusting brightness, turning off unused features, and using power-saving modes, reducing the need for frequent charging and ultimately reducing your carbon footprint. You can save 30% of battery by reducing your screen brightness to 50%.",
    },
    {
      icon: "📱",
      title: "Use a Case",
      description:
        "Protect your Pixel 7a with a durable case to prevent damage and extend its lifespan, contributing to a lower environmental impact by delaying the need for a new device. 25% of cracked screens are caused by accidental drops, a case can reduce your risk.",
    },
    {
      icon: "🔄",
      title: "Software Updates",
      description:
        "Keep your phone's software updated for optimal performance and security, potentially prolonging its lifespan and contributing to sustainability. Regular updates can improve battery life by up to 10%.",
    },
  ],
  initiativesByBrand: [
    {
      icon: "♻️",
      title: "Recycled Materials",
      description:
        "Google uses recycled aluminum and plastics in the Pixel 7a, reducing reliance on virgin resources and lowering the environmental footprint. The Pixel 7a is made with over 21% recycled materials, including 100% recycled aluminum in the housing.",
    },
    {
      icon: "📦",
      title: "Plastic-Free Packaging",
      description:
        "The Pixel 7a packaging is 99% plastic-free, minimizing waste and promoting responsible disposal. This initiative contributes to Google's commitment to sustainability and reducing plastic pollution.",
    },
    {
      icon: "🌱",
      title: "UL Ecologo Gold",
      description:
        "The Pixel 7a is certified UL Ecologo Gold, indicating its compliance with strict environmental standards throughout its life cycle, from material sourcing and production to energy efficiency and end-of-life management. Google aims to achieve this certification for all its new products by 2025.",
    },
  ],
};

export const AnalyzedPanelV2 = (props: { data: any; imageSrc: string }) => {
  // const { data, imageSrc } = props;

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

      {/* <EcoScoreGauge score={ecoScore} /> */}

      <div className="flex flex-col gap-4 px-2 py-4">
        <EcoScoreLine ecoScore={ecoScore} />

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
