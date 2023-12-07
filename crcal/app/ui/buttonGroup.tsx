export default function ButtonGroup({ label }: { label: string[] }) {
  return (
    <div className="flex">
      <button className="border-x-0 border-2 border-black p-2 hover:bg-gray-300">
        {label[0]}
      </button>
      <button className="border-2 border-black p-2 hover:bg-gray-300">
        {label[1]}
      </button>
    </div>
  );
}
