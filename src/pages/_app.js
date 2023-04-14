import React, { useRef, forwardRef, useEffect, useState } from "react";
import store from "../Redux/store";
import { Provider } from "react-redux";
import { styles } from "../utils/styles/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "@/styles/globals.css";
import { Box, Drawer } from "@mui/material";
import { colors } from "../utils/const";
import Footer from "../components/Footer.jsx";
import { useRouter } from "next/router";
import Cover from "../sections/home/CoverSection.jsx";
import HomeDropdown from "../components/HomeDropdown.jsx";
import SideDrawer from "../components/SideDrawer.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { arEG } from "@mui/material/locale";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "../components/Navbar.jsx";
import Button from "@mui/material/Button";
import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";
import FlyingCard from "@/components/mini-components/FlyingCard";
import CardSlider from "@/components/CardSlider.jsx";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { locale } = router;
  const [arrDirA, setArrDirA] = useState("down");
  const [arrDirB, setArrDirB] = useState("down");
  const [isOpenA, setIsOPenA] = useState(false);
  const [isOpenB, setIsOPenB] = useState(false);
  const [type, setType] = useState("a");
  const [state, setState] = React.useState(false);
  const [leftOrRightValue, setLeftOrRightValue] = useState(-500);
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <Provider store={store}>
      <Box dir={locale === "en" ? "ltr" : "rtl"} sx={{}}>
        {/* large screens ---------------------------------------------------------------------- */}
        <Navbar
          arrDirA={arrDirA}
          arrDirB={arrDirB}
          setArrDirA={setArrDirA}
          setArrDirB={setArrDirB}
          leftOrRightValue={leftOrRightValue}
          setLeftOrRightValue={setLeftOrRightValue}
          setIsOPenA={setIsOPenA}
          setIsOPenB={setIsOPenB}
          state={state}
          setState={setState}
          setType={setType}
        />
        {/* small screens ---------------------------------------------------------------------- */}

        {!matches && (
          <>
            <FlyingCard
              setState={setState}
              leftOrRightValue={leftOrRightValue}
              setLeftOrRightValue={setLeftOrRightValue}
              // wrapperRef={wrapperRef}
            />
            <HomeDropdown
              isOpen={isOpenA || isOpenB}
              setIsOPenA={setIsOPenA}
              setIsOPenB={setIsOPenB}
              setArrDirA={setArrDirA}
              setArrDirB={setArrDirB}
              type={type}
            />
          </>
        )}
        <Component {...pageProps} />
        <Footer />
      </Box>
    </Provider>
  );
};

export default appWithTranslation(App);
