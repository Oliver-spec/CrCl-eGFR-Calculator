export default function SexSelector() {
  return (
    <div className="flex flex-col w-96">
      <span className="text-sm mb-1">Sex</span>
      <div className="flex">
        <button className="border-r-0 border-2 border-black p-2 hover:bg-gray-300">
          Male
        </button>
        <button className="border-2 border-black p-2 hover:bg-gray-300">
          Female
        </button>
      </div>
    </div>
  );
}
