import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <header>OTKRyu's Blog</header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
