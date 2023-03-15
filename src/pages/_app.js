import React, { useState } from "react";
import store from "../Redux/store";
import { Provider } from "react-redux";
import { styles } from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import "@/styles/globals.css";
import { Box } from "@mui/material";
import { colors } from "../utils/const";
import Footer from "../components/Footer.jsx";
import Main_Navbar from "../components/Main_Navbar.jsx";
import Secondary_Navbar from "../components/Secondary_Navbar.jsx";
import Cover from "../components/Cover.jsx";
import Service from "../components/service.jsx";
import HomeDropdown from "../components/HomeDropdown.jsx";
export default function App({ Component, pageProps }) {
  const [isOpen, setIsOPen] = useState(false);
  const [right, setRight] = useState(-500);
  return (
    <Provider store={store}>
      <Box dir="rtl" sx={{}}>
        <Main_Navbar setRight={setRight}></Main_Navbar>
        <Secondary_Navbar setIsOPen={setIsOPen}></Secondary_Navbar>
        <Box
          className="horizontal-safe-margin"
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "5px",
            bgcolor: colors.white,
            transition: "1s",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          style={{
            position: "absolute",
            top: "55px",
            right: right,
            width: "300px",
            height: "250px",
          }}
        >
          <img src="/line.png" alt="Picture of the author" width="100%" />
          <Box
            sx={{
              p: 2,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              component={Link}
              href="/"
              onClick={() => {
                setRight((prev) => (prev == 0 ? -500 : 0));
              }}
              sx={styles.tab}
              style={{}}
            >
              نبذة عن
            </Box>
            <Box sx={styles.line}></Box>
            <Box
              component={Link}
              href="/"
              onClick={() => {
                setRight((prev) => (prev == 0 ? -500 : 0));
              }}
              sx={styles.tab}
              style={{}}
            >
              ميديا
            </Box>
            <Box sx={styles.line}></Box>
            <Box
              component={Link}
              href="/"
              onClick={() => {
                setRight((prev) => (prev == 0 ? -500 : 0));
              }}
              sx={styles.tab}
              style={{}}
            >
              وظائف
            </Box>
            <Box sx={styles.line}></Box>
            <Box
              component={Link}
              href="/"
              onClick={() => {
                setRight((prev) => (prev == 0 ? -500 : 0));
              }}
              sx={styles.tab}
              style={{}}
            >
              شركاتنا
            </Box>
            <Box sx={styles.line}></Box>
            <Box
              component={Link}
              href="/"
              onClick={() => {
                setRight((prev) => (prev == 0 ? -500 : 0));
              }}
              sx={styles.tab}
              style={{}}
            >
              اتصل بنا
            </Box>
            <Box sx={styles.line}></Box>
          </Box>
        </Box>
        <Box
          className="horizontal-safe-padding"
          sx={{
            borderTop: `2px solid ${colors.light_grey}`,
            borderBottom: `2px solid ${colors.light_grey}`,
            bgcolor: colors.white,
            transition: "1s",
            opacity: isOpen ? "100" : "0",
            zIndex: isOpen ? "10" : "-1",
          }}
          style={{
            position: "absolute",
            top: "132px",
            width: "100%",
            height: "650px",
          }}
        >
          <HomeDropdown />
        </Box>
        <Cover />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </Provider>
  );
}
