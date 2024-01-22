import Link from "next/link";

export default function Home() {
  console.log("render");
  return (
    <>
      <main
        id="new"
        className="flex min-h-screen flex-col items-center bg-cover justify-between bg-[url('./../img/Index.webp')] "
      >
        <Link href="/about"> Wang HaiLin</Link>
      </main>
    </>
  );
}
