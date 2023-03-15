import React, { useState } from "react";
import store from "../Redux/store";
import { Provider } from "react-redux";
import { styles } from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import "@/styles/globals.css";
import { Box, Drawer } from "@mui/material";
import { colors } from "../utils/const";
import Footer from "../components/Footer.jsx";
import Main_Navbar from "../components/Main_Navbar.jsx";
import Secondary_Navbar from "../components/Secondary_Navbar.jsx";
import Cover from "../components/Cover.jsx";
import Service from "../components/service.jsx";
import HomeDropdown from "../components/HomeDropdown.jsx";
import SideDrawer from "../components/SideDrawer.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { arEG } from "@mui/material/locale";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Button from "@mui/material/Button";
import { useTranslation, Trans } from "react-i18next";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App({ Component, pageProps }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [isOpen, setIsOPen] = useState(false);
  const [state, setState] = React.useState(false);

  const [right, setRight] = useState(-500);
  const matches = useMediaQuery("(max-width:900px)");

  const theme = createTheme(
    {
      palette: {
        primary: { main: "#1976d2" },
      },
    },
    arEG
  );
  return (
    // <CacheProvider value={cacheRtl}>
    //   <ThemeProvider theme={theme}>
    <Provider store={store}>
      <h2>{t("Welcome to React")}</h2>
      <Box dir="rtl" sx={{}}>
        {!matches && (
          <>
            <Main_Navbar setRight={setRight}></Main_Navbar>
            <Secondary_Navbar setIsOPen={setIsOPen}></Secondary_Navbar>
          </>
        )}

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
            width: right == -500 ? 0 : "300px",
            height: "250px",
            overflow: "hidden",
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

        {!matches && (
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
              // height: "620px",
            }}
          >
            <HomeDropdown />
          </Box>
        )}
        {matches && (
          <>
            <Box
              className="horizontal-safe-padding vertical-safe-padding"
              sx={{
                bgcolor: colors.dark_grey,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{ color: colors.blue }}
                onClick={() => {
                  setState((prev) => !prev);
                }}
              >
                <MenuIcon />
              </IconButton>
              <img src="logo.png" width="50px" height="20px" />
              <Box
                component={Button}
                sx={{ color: colors.blue, fontWeight: "bold" }}
              >
                En
              </Box>
            </Box>
            <SideDrawer state={state} setState={setState} />
          </>
        )}
        <Cover />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </Provider>
    //   </ThemeProvider>
    // </CacheProvider>
  );
}
