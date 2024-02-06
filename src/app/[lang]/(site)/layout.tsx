import Menu from "../components/Menu";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Menu />
      <main className=" flex flex-col  grow w-full p-[4rem]">
        {/* use grow to fill in the whole page */}
        {children}
      </main>
    </>
  );
}
