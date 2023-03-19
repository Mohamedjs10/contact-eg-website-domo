import React from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Button from "@mui/material/Button";
import { colors } from "../utils/const";
import { styles } from "./main_navbar.js";
import { useSelector, useDispatch } from "react-redux";
import { mainTabActions } from "../Redux/store";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function Main_Navbar({
  leftOrRightValue,
  setLeftOrRightValue,
  wrapperRef,
}) {
  console.log("MainNavbar", wrapperRef);

  const mainTab = useSelector((state) => state.mainTab.mainTab);
  const dispatch = useDispatch();
  const router = useRouter();
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
    <Box sx={styles.container} style={{}} className="horizontal-safe-padding">
      <Button ref={wrapperRef}>
        <MenuIcon
          sx={{
            fontSize: 40,
            color: colors.blue,
          }}
          onClick={() => {
            console.log("btn touched", leftOrRightValue);
            // if (leftOrRightValue == -500) {
            //   setLeftOrRightValue(0);
            // }
            setLeftOrRightValue((prev) => (prev == 0 ? -500 : 0));
            // setLeftOrRightValue((prev) => {
            //   if (prev == -500) {
            //     return 0;
            //   } else {
            //     return -500;
            //   }
            // });
          }}
        />
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
