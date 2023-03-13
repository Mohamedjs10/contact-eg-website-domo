import "@/styles/globals.css";
import Main_Navbar from "../components/Main_Navbar.jsx";
export default function App({ Component, pageProps }) {
  return (
    <div dir="rtl">
      <Main_Navbar></Main_Navbar>
      <Component {...pageProps} />
    </div>
  );
}
