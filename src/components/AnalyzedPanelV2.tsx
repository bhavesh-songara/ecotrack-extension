import React from "react";
import { Leaf, Zap, Recycle, BarChart3, Droplet } from "lucide-react";

// Simulated data (in a real extension, this would be fetched or passed from background script)
const ecoData = {
  product: {
    name: "iPhone 13",
    brand: "Apple",
    ecoScore: 85,
    sustainabilityFeatures: [
      { icon: Leaf, text: "Recycled materials", value: "35%" },
      { icon: Zap, text: "Energy efficiency", value: "+54%" },
      { icon: BarChart3, text: "Carbon footprint", value: "-6%" },
      { icon: Recycle, text: "Recyclable packaging", value: "95%" },
    ],
  },
  carbonFootprint: {
    value: 87,
    unit: "kg CO2e",
    comparisonToPrevious: "6% reduction",
  },
  waterUsage: {
    value: 100,
    unit: "liters",
    comparisonToPrevious: "10% reduction",
  },
  sustainabilityTip: {
    title: "Extend Device Lifespan",
    description:
      "Use a protective case and screen protector to prevent damage and extend your device's life.",
  },
};

const EcoScoreGauge = (props: { score: number }) => {
  const { score } = props;
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
          className="text-green-500 progress-ring stroke-current"
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
        <div className="text-3xl font-bold text-green-600">{score}</div>
        <div className="text-sm text-gray-500">Eco Score</div>
      </div>
    </div>
  );
};

const FeatureCard = (props: { icon: any; text: string; value: string }) => {
  const { icon: Icon, text, value } = props;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
      <div className="bg-green-100 rounded-full p-2">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <div className="text-sm text-gray-600">{text}</div>
        <div className="text-lg font-semibold text-green-600">{value}</div>
      </div>
    </div>
  );
};

const ImpactMeter = (props: {
  icon: any;
  title: string;
  value: number;
  unit: string;
  comparison: string;
}) => {
  const { icon: Icon, title, value, unit, comparison } = props;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center space-x-2 mb-2">
        <Icon className="w-5 h-5 text-blue-500" />
        <span className="font-medium">{title}</span>
      </div>
      <div className="text-2xl font-bold text-blue-600">
        {value} <span className="text-sm font-normal">{unit}</span>
      </div>
      <div className="text-sm text-gray-600">{comparison}</div>
    </div>
  );
};

const AnalyzedPanelV2 = () => {
  return (
    <div className="w-96 bg-gray-100 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6">
        <h1 className="text-2xl font-bold mb-2">{ecoData.product.name}</h1>
        <p className="text-green-100">EcoTrack Assessment</p>
      </div>

      <div className="p-6 space-y-6">
        <EcoScoreGauge score={ecoData.product.ecoScore} />

        <div className="grid grid-cols-2 gap-4">
          {ecoData.product.sustainabilityFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ImpactMeter
            icon={BarChart3}
            title="Carbon Footprint"
            value={ecoData.carbonFootprint.value}
            unit={ecoData.carbonFootprint.unit}
            comparison={ecoData.carbonFootprint.comparisonToPrevious}
          />
          <ImpactMeter
            icon={Droplet}
            title="Water Usage"
            value={ecoData.waterUsage.value}
            unit={ecoData.waterUsage.unit}
            comparison={ecoData.waterUsage.comparisonToPrevious}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold text-lg mb-2">Eco Tip</h3>
          <h4 className="font-medium text-green-600">
            {ecoData.sustainabilityTip.title}
          </h4>
          <p className="text-sm text-gray-600">
            {ecoData.sustainabilityTip.description}
          </p>
        </div>

        <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105">
          Compare with Other Devices
        </button>
      </div>
    </div>
  );
};

export default AnalyzedPanelV2;
