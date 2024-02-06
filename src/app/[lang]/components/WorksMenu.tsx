import { getDataYear } from "@/src/lib/works";
import Link from "next/link";
import { uuid } from "uuidv4";

const WorksMenu = () => {
  const dateSet = [2022, 2023, 2024];
  return (
    <div className="absolute top-[100%]  mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-10 flex flex-col">
      <Link href="./works">
        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">
          All
        </span>
      </Link>
      {dateSet.map((e) => (
        <span
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
          key={uuid()}
        >
          {e}
        </span>
      ))}
    </div>
  );
};

export default WorksMenu;
