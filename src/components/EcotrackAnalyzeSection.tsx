import { PoweredByGemini } from "./PoweredByGemini";

export const EcotrackAnalyzeSection = (props: {
  title: string;
  items?: { icon?: string; title: string; description: string }[];
}) => {
  const { title, items } = props;

  if (!items?.length) {
    return <></>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <section className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>

        <PoweredByGemini />
      </section>

      <div className="flex flex-col gap-4 mt-3">
        {items?.map((item, index) => {
          return (
            <section className="flex gap-2">
              {item.icon && <section>{item.icon}</section>}

              <section>
                <h3 className="text-gray-700 font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </section>
            </section>
          );
        })}
      </div>
    </div>
  );
};
