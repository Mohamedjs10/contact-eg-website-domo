import React from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Button from "@mui/material/Button";
import { colors } from "../utils/const";
import { styles } from "./main_navbar.js";
import { mainTabActions } from "../Redux/store";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { useSelector, useDispatch } from "react-redux";

export default function Main_Navbar({ anchorEl, setAnchorEl }) {
  const mainTab = useSelector((state) => state.mainTab.mainTab);
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
      <Button
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
        sx={{
          p: 0,
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
          fontWeight: mainTab === "افراد" ? "bold" : "",
          borderBottom: mainTab === "افراد" ? `2px solid ${colors.blue}` : "",
        }}
        href="/"
        onClick={() => {
          dispatch(mainTabActions.update("افراد"));
        }}
      >
        {t.main_nav.individuals}
      </Box>
      <Box
        component={Link}
        sx={styles.tab}
        style={{
          fontWeight: mainTab === "شركات" ? "bold" : "",
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
          fontWeight: mainTab === "مستثمرين" ? "bold" : "",
          borderBottom:
            mainTab === "مستثمرين" ? `2px solid ${colors.blue}` : "",
        }}
        href="/"
        onClick={() => {
          dispatch(mainTabActions.update("مستثمرين"));
        }}
      >
        {t.main_nav.investors}
      </Box>
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
