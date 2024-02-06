import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { getData } from "@/src/lib/works";

const page = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex grow w-full">
        <SideBar data={data} />
      </main>
    </div>
  );
};

export default page;
