import { PoweredByGemini } from "./PoweredByGemini";

export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 ">
      <h1 className="text-2xl font-bold mb-2">Ecotrack</h1>
      <section className="flex gap-1 items-center">
        <p className="text-green-100">Make sustainable choices</p>
        <PoweredByGemini className="text-white" />
      </section>
    </div>
  );
};
