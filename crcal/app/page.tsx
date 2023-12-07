import Input from "./ui/input";
import SexSelector from "./ui/sexSelector";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <div className="w-64 mt-10 mb-5 text-center border-solid border-4 border-black p-3 text-2xl font-bold">
        CrCal
      </div>
      <SexSelector />
      <Input label="Age" />
      <Input label="Weight" buttonLabels={["kg", "lbs"]} />
      <Input label="Serum Creatinine" buttonLabels={["umol/L", "mg/dL"]} />
    </main>
  );
}
