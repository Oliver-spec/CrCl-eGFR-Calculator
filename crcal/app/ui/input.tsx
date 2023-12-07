import { Roboto } from "next/font/google";
import ButtonGroup from "./buttonGroup";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Input({
  label,
  buttonLabels,
}: {
  label: string;
  buttonLabels?: string[];
}) {
  return (
    <div className="flex flex-col items-center w-96">
      <span className="w-full text-left text-sm mb-1">{label}</span>
      <div className="flex w-full h-12">
        <input
          className={`${roboto.className} antialiased text-lg focus:outline-none p-1 w-full border-2 border-black`}
        />
        {buttonLabels ? <ButtonGroup label={buttonLabels} /> : null}
      </div>
    </div>
  );
}
