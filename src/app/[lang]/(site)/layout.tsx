import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Menu />
      {/* use grow to fill in the whole page */}
      <div className="flex grow">{children}</div>
      <Footer />
    </main>
  );
}
