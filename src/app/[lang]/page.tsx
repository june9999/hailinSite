import Link from "next/link";
import { getDictionary } from "../dictionaries/dictionaries";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <main>
        <Link href="/about" className="text-slate-300 text-4xl justify-center">
          {dict.menu.Name}
        </Link>
      </main>
    </>
  );
}
