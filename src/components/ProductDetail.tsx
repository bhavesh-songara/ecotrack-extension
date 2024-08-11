import { SustainabilityProgressIndicator } from "./SustainabilityProgressIndicator";

export const ProductDetail = (props: {
  name: string;
  category: string;
  brand: string;
  sustainabilityScore: number;
  priceRange: string;
}) => {
  const { name, category, brand, priceRange, sustainabilityScore } = props;

  return (
    <div className="flex gap-8 justify-center">
      <SustainabilityProgressIndicator
        score={sustainabilityScore}
        label="Sustainability Score"
      />

      <section>
        <h1
          className="text-2xl font-semibold text-gray-800
         capitalize
        "
        >
          {name}
        </h1>

        <p className="text-xs font-normal text-gray-700 capitalize bg-gray-100 w-fit px-2 py-1 rounded-full mt-1 mb-2">
          {category}
        </p>
        <p className="text-sm font-normal text-gray-500 capitalize">
          {priceRange}
        </p>
      </section>
    </div>
  );
};
