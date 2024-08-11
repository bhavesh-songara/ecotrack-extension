import React, { useState } from "react";
import {
  Leaf,
  Zap,
  Recycle,
  BarChart3,
  Trees,
  Sun,
  Factory,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

// TypeScript interfaces
interface SustainabilityFeature {
  icon: React.ElementType;
  text: string;
  value: string;
  description: string;
}

interface Initiative {
  icon: React.ElementType;
  label: string;
  description: string;
}

interface RecyclingOption {
  label: string;
  description: string;
}

interface SustainabilityTip {
  label: string;
  description: string;
}

interface SustainableAlternative {
  name: string;
  brand: string;
  description: string;
}

interface EcoData {
  product: {
    name: string;
    brand: string;
    category: string;
    subCategory: string;
    ecoScore: number;
    sustainabilityFeatures: SustainabilityFeature[];
  };
  carbonFootprint: {
    value: number;
    unit: string;
    description: string;
  };
  treesPlanted: {
    value: number;
    description: string;
  };
  initiatives: Initiative[];
  recyclingOptions: RecyclingOption[];
  sustainabilityTips: SustainabilityTip[];
  sustainableAlternatives: SustainableAlternative[];
}

// Configuration interface
interface EcoTrackConfig {
  sectionOrder: string[];
  initiallyExpandedSections: string[];
}

// Refined and expanded data object
const ecoData: EcoData = {
  product: {
    name: "iPhone 13",
    brand: "Apple",
    category: "Electronics",
    subCategory: "Mobile",
    ecoScore: 85,
    sustainabilityFeatures: [
      {
        icon: Leaf,
        text: "Recycled Materials",
        value: "35%",
        description:
          "35% of plastic in 12 components is recycled. Uses recycled gold, tin, rare earth elements, and tungsten.",
      },
      {
        icon: Zap,
        text: "Energy Efficiency",
        value: "+54%",
        description:
          "Consumes 54% less energy than U.S. Department of Energy requirements for battery charger systems.",
      },
      {
        icon: BarChart3,
        text: "Carbon Footprint",
        value: "-6%",
        description:
          "6% smaller carbon footprint compared to its predecessor due to the use of renewable energy in production.",
      },
      {
        icon: Trees,
        text: "Sustainable Packaging",
        value: "95%",
        description:
          "95% of packaging is fiber-based, originating from recycled or responsibly managed forests.",
      },
    ],
  },
  carbonFootprint: {
    value: 87,
    unit: "kg CO2e",
    description:
      "Low carbon footprint due to energy efficiency and use of renewable energy in production.",
  },
  treesPlanted: {
    value: 100,
    description:
      "For every 1000 devices sold, Apple plants 100 trees to offset carbon emissions.",
  },
  initiatives: [
    {
      icon: Sun,
      label: "Renewable Energy",
      description:
        "Transitioning to 100% renewable electricity in manufacturing by 2030.",
    },
    {
      icon: Recycle,
      label: "Recycled Materials",
      description: "Increasing the use of recycled materials in products.",
    },
    {
      icon: Factory,
      label: "Waste Management",
      description:
        "All established final assembly sites are Zero Waste to Landfill certified.",
    },
  ],
  recyclingOptions: [
    {
      label: "Apple Trade In",
      description:
        "Trade in old devices for responsible recycling or refurbishment.",
    },
    {
      label: "E-Waste Centers",
      description:
        "Recycle old electronics at certified e-waste recycling centers.",
    },
  ],
  sustainabilityTips: [
    {
      label: "Recycle Responsibly",
      description:
        "Use certified e-waste recycling centers to prevent environmental pollution.",
    },
    {
      label: "Energy Efficient Charging",
      description:
        "Use energy-efficient chargers to reduce electricity consumption.",
    },
    {
      label: "Trade In Old Devices",
      description:
        "Participate in the Apple Trade In program for responsible recycling.",
    },
  ],
  sustainableAlternatives: [
    {
      name: "Fairphone 4",
      brand: "Fairphone",
      description:
        "Focuses on repairability, ethical sourcing, and fair wages.",
    },
    {
      name: "Samsung Galaxy S21",
      brand: "Samsung",
      description: "Emphasizes energy efficiency and reduced carbon footprint.",
    },
  ],
};

// Configuration object
const config: EcoTrackConfig = {
  sectionOrder: [
    "ecoScore",
    "sustainabilityFeatures",
    "carbonFootprint",
    "treesPlanted",
    "initiatives",
    "recyclingOptions",
    "sustainabilityTips",
    "sustainableAlternatives",
  ],
  initiallyExpandedSections: [
    "ecoScore",
    "sustainabilityFeatures",
    "carbonFootprint",
  ],
};

const EcoScoreGauge: React.FC<{ score: number }> = ({ score }) => (
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

const FeatureCard: React.FC<SustainabilityFeature> = ({
  icon: Icon,
  text,
  value,
  description,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 rounded-full p-2">
            <Icon className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-600">{text}</div>
            <div className="text-lg font-semibold text-green-600">{value}</div>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-gray-400 hover:text-gray-600"
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              expanded ? "transform rotate-180" : ""
            }`}
          />
        </button>
      </div>
      {expanded && <p className="text-sm text-gray-600 mt-2">{description}</p>}
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-3 text-gray-700">{title}</h2>
    {children}
  </div>
);

const ListItem: React.FC<
  Initiative | RecyclingOption | SustainabilityTip | any
> = ({ icon: Icon, label, description }) => (
  <div className="flex items-start space-x-3 mb-3">
    <div className="bg-blue-100 rounded-full p-1 mt-1">
      {Icon && <Icon className="w-4 h-4 text-blue-600" />}
    </div>
    <div>
      <div className="font-medium text-gray-700">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </div>
);

const AnalyzedPanelV3: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    config.initiallyExpandedSections
  );

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const renderSection = (sectionName: string) => {
    const isExpanded = expandedSections.includes(sectionName);

    switch (sectionName) {
      case "ecoScore":
        return (
          <Section title="Eco Score">
            <EcoScoreGauge score={ecoData.product.ecoScore} />
          </Section>
        );
      case "sustainabilityFeatures":
        return (
          <Section title="Sustainability Features">
            <div className="grid grid-cols-1 gap-4">
              {ecoData.product.sustainabilityFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </Section>
        );
      case "carbonFootprint":
        return (
          <Section title="Carbon Footprint">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {ecoData.carbonFootprint.value}{" "}
                <span className="text-sm font-normal">
                  {ecoData.carbonFootprint.unit}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {ecoData.carbonFootprint.description}
              </p>
            </div>
          </Section>
        );
      case "treesPlanted":
        return (
          <Section title="Trees Planted">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-2xl font-bold text-green-600 mb-2">
                {ecoData.treesPlanted.value}{" "}
                <span className="text-sm font-normal">trees</span>
              </div>
              <p className="text-sm text-gray-600">
                {ecoData.treesPlanted.description}
              </p>
            </div>
          </Section>
        );
      case "initiatives":
        return (
          <Section title="Brand Initiatives">
            {ecoData.initiatives.map((initiative, index) => (
              <ListItem key={index} {...initiative} />
            ))}
          </Section>
        );
      case "recyclingOptions":
        return (
          <Section title="Recycling Options">
            {ecoData.recyclingOptions.map((option, index) => (
              <ListItem key={index} icon={Recycle} {...option} />
            ))}
          </Section>
        );
      case "sustainabilityTips":
        return (
          <Section title="Sustainability Tips">
            {ecoData.sustainabilityTips.map((tip, index) => (
              <ListItem key={index} icon={Leaf} {...tip} />
            ))}
          </Section>
        );
      case "sustainableAlternatives":
        return (
          <Section title="Sustainable Alternatives">
            {ecoData.sustainableAlternatives.map((alt, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 mb-3 last:mb-0"
              >
                <div className="font-medium text-gray-700">
                  {alt.name} by {alt.brand}
                </div>
                <p className="text-sm text-gray-600">{alt.description}</p>
              </div>
            ))}
          </Section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-96 bg-gray-100 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6">
        <h1 className="text-2xl font-bold mb-2">{ecoData.product.name}</h1>
        <p className="text-green-100">EcoTrack Comprehensive Assessment</p>
      </div>

      <div className="p-6 space-y-6 max-h-[600px] overflow-y-auto">
        {config.sectionOrder.map((sectionName) => (
          <div key={sectionName}>
            <button
              className="w-full text-left font-semibold text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => toggleSection(sectionName)}
            >
              {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
              <ChevronDown
                className={`inline-block w-5 h-5 ml-2 transition-transform ${
                  expandedSections.includes(sectionName)
                    ? "transform rotate-180"
                    : ""
                }`}
              />
            </button>
            {expandedSections.includes(sectionName) &&
              renderSection(sectionName)}
          </div>
        ))}

        <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center">
          <span>Compare with Other Devices</span>
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default AnalyzedPanelV3;
