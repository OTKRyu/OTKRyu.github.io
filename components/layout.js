import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="bg-blue-400">
      <div className="p-5">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
