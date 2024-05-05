import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar.js";
import LandingPage from "./landingPage/page.js";
import Footer from "./components/footer.js";
import Logins from "./logins/page.js";

export default function Home() {
  return (
    <div>
      <Logins />
    </div>
  );
}
