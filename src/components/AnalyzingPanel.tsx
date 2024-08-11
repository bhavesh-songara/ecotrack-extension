import { DotLoader } from "./DotLoader";
import { Header } from "./Header";

export const AnalyzingPanel = (props: { srcUrl: string }) => {
  const { srcUrl } = props;

  return (
    <div>
      <Header />

      <section className="px-2 py-2">
        <div className="border border-gray-200 border-solid p-2 shadow-md max-w-full">
          <img src={srcUrl} alt="Analyzed product" className="w-full" />
        </div>

        <section className="flex gap-2 mt-2">
          <p className="text-sm">Ecotrack</p>
          <DotLoader />
        </section>
      </section>
    </div>
  );
};
