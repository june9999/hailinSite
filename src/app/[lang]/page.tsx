import Link from "next/link";
import { getDictionary } from "../dictionaries/dictionaries";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <main className="flex main-background h-full justify-center items-center">
        <Link href="/home" className=" text-slate-300 text-4xl ">
          {dict.menu.Name}
        </Link>
      </main>
    </>
  );
}
