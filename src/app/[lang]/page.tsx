import Link from "next/link";
import { getDictionary } from "../dictionaries/dictionaries";

export default async function Home({ params: { lang } }) {
  console.log("lang");
  console.log(lang);
  const dict = await getDictionary(lang);
  console.log(dict);

  return (
    <>
      <main>
        <Link href="/about" className="text-slate-300 text-4xl justify-center">
          Wang HaiLin
        </Link>
      </main>
    </>
  );
}
