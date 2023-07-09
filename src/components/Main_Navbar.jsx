import React from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Button from "@mui/material/Button";
import { colors } from "../utils/const";
import { styles } from "./main_navbar.js";
import { mainTabActions, gifActions } from "../Redux/store";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { useSelector, useDispatch } from "react-redux";

export default function Main_Navbar({ anchorEl, setAnchorEl }) {
  const mainTab = useSelector((state) => state.mainTab.mainTab);
  const gif = useSelector((state) => state.gif.gif);

  const router = useRouter();

  const dispatch = useDispatch();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  // ------------------------------

  const toAr = () => {
    const locale = "ar";
    router.push(router.pathname, router.asPath, { locale });
  };
  const toEn = () => {
    const locale = "en";
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <Box sx={styles.container} className="horizontal-safe-padding">
      <Box
        component="img"
        src={gif == "hi" ? t.general.gifs.hi : t.general.gifs.calculationg}
        sx={{
          zIndex: "100000000000",
          height: "150px",
          position: "fixed",
          bottom: "30px",
          [locale === "en" ? "right" : "left"]: "60px",
        }}
      ></Box>
      <a href="https://wa.me/20216177" target="_blank">
        <Box
          component="img"
          src="/whatsapp.png"
          sx={{
            zIndex: "100000000000",
            height: "65px",
            position: "fixed",
            bottom: "65px",
            [locale === "en" ? "right" : "left"]: "15px",
          }}
        ></Box>
      </a>

      <Button
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
        sx={{
          py: 1,
        }}
      >
        {anchorEl ? (
          <CloseIcon
            sx={{
              fontSize: 30,
              color: colors.blue,
            }}
          />
        ) : (
          <MenuIcon
            sx={{
              fontSize: 30,
              color: colors.blue,
            }}
          />
        )}
      </Button>

      <Box
        component={Link}
        sx={styles.tab}
        style={{
          fontWeight: mainTab === "افراد" ? "bold" : "normal",
          borderBottom: mainTab === "افراد" ? `2px solid ${colors.blue}` : "",
        }}
        href="/"
        onClick={() => {
          dispatch(mainTabActions.update("افراد"));
        }}
      >
        {t.main_nav.individuals}
      </Box>
      {/* <Box
        component={Link}
        sx={styles.tab}
        style={{
          fontWeight: mainTab === "شركات" ? "bold" : "normal",
          borderBottom: mainTab === "شركات" ? `2px solid ${colors.blue}` : "",
        }}
        href="/"
        onClick={() => {
          dispatch(mainTabActions.update("شركات"));
        }}
      >
        {t.main_nav.companies}
      </Box>
      <Box
        component={Link}
        sx={styles.tab}
        style={{
          fontWeight: mainTab === "مستثمرين" ? "bold" : "normal",
          borderBottom:
            mainTab === "مستثمرين" ? `2px solid ${colors.blue}` : "",
        }}
        href="/"
        onClick={() => {
          dispatch(mainTabActions.update("مستثمرين"));
        }}
      >
        {t.main_nav.investors}
      </Box> */}
      <Box
        onClick={locale === "en" ? toAr : toEn}
        component={Button}
        sx={{
          color: colors.blue,
          fontWeight: "bold",
          mr: locale === "en" ? 0 : "auto",
          ml: locale === "en" ? "auto" : 0,
        }}
      >
        {t.main_nav.lang}
      </Box>
    </Box>
  );
}
