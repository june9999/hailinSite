import { getDictionary } from "../../dictionaries/dictionaries";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col p-[1rem]">
      <Menu />
      {/* use grow to fill in the whole page */}
      <div className="flex grow  p-[1rem]">{children}</div>
      {/* <Footer /> */}
    </main>
  );
}
