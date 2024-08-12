import { Header } from "./Header";

export const DefaultPanel = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-2 text-gray-600 text-sm px-2 py-2">
        <p>
          Start making sustainable choices by analyzing images of products
          you're interested in.
        </p>

        <p>
          Right click on an image and select "Track Sustainability" to analyze
          it
        </p>
      </div>
    </div>
  );
};
