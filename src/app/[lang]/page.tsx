import Link from "next/link";
import { getDictionary } from "../dictionaries/dictionaries";

interface Prop {
  params: {
    lang: string;
  };
}

export default async function Home(Prop: Prop) {
  const { params } = Prop;
  const dict = await getDictionary(params.lang);

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
