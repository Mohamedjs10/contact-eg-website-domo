import React, { useState } from "react";
import store from "../Redux/store";
import { Provider } from "react-redux";
import { styles } from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "@/styles/globals.css";
import { Box, Drawer } from "@mui/material";
import { colors } from "../utils/const";
import Footer from "../components/Footer.jsx";
import { useRouter } from "next/router";
import Cover from "../components/Cover.jsx";
import HomeDropdown from "../components/HomeDropdown.jsx";
import SideDrawer from "../components/SideDrawer.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { arEG } from "@mui/material/locale";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "../components/navbar.jsx";
import Button from "@mui/material/Button";
import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";
import FlyingCard from "@/components/mini-components/FlyingCard";
const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { locale } = router;

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
    <Provider store={store}>
      {/* <h1>{t("test")}</h1> */}
      <Box dir={locale === "en" ? "ltr" : "rtl"} sx={{}}>
        {/* large screens ---------------------------------------------------------------------- */}
        <Navbar
          setRight={setRight}
          setIsOPen={setIsOPen}
          state={state}
          setState={setState}
        />
        {/* small screens ---------------------------------------------------------------------- */}

        {!matches && (
          <>
            <FlyingCard setState={setState} right={right} />
            <HomeDropdown isOpen={isOpen} />
          </>
        )}
        <Cover />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </Provider>
  );
};

export default appWithTranslation(App);
