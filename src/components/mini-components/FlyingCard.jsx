import React, { useRef, useEffect } from "react";
import { styles } from "./flying_card";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import { useSelector, useDispatch } from "react-redux";
import { updateMenu } from "../../Redux/store";

export default function FlyingCard({ setAnchorEl }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const dispatch = useDispatch();
  return (
    <>
      <Box
        dir={locale === "en" ? "ltr" : "rtl"}
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "5px",
          bgcolor: colors.white,
          transition: "1s",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        style={{
          width: "250px",
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
            href="/about"
            onClick={() => {
              setAnchorEl(null);
            }}
            sx={styles.tab}
            style={{}}
          >
            {t.general.menu.about_us}
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/media"
            onClick={() => {
              setAnchorEl(null);
            }}
            sx={styles.tab}
            style={{}}
          >
            {t.general.menu.media}
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/careers"
            onClick={() => {
              setAnchorEl(null);
            }}
            sx={styles.tab}
            style={{}}
          >
            {t.general.menu.careers}
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/our-brands"
            onClick={() => {
              setAnchorEl(null);
            }}
            sx={styles.tab}
            style={{}}
          >
            {t.general.menu.our_brand}
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/contact-us"
            onClick={() => {
              setAnchorEl(null);
            }}
            sx={styles.tab}
            style={{}}
          >
            {t.general.menu.contact_us}
          </Box>
          <Box sx={styles.line}></Box>
        </Box>
      </Box>
    </>
  );
}
