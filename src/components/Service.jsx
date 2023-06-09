import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./service";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function Service({
  img,
  title,
  description,
  color,
  setIsOPenA,
  setIsOPenB,
  setArrDirA,
  setArrDirB,
  url,
  // for side drawer toggle (close after click service)
  setState,
}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box>
      <Box
        onClick={() => {
          if (setIsOPenA) {
            setIsOPenA(false);
            setIsOPenB(false);
            setArrDirA("down");
            setArrDirB("down");
          }
          if (setState) {
            setState((prev) => !prev);
          }
        }}
        component={Link}
        href={url}
        sx={{
          fontSize: "11px",
          maxWidth: { xs: "90px", md: "170px", lg: "380px" },
          minWidth: { xs: "90px", md: "0px" },
          height: "75px",
          display: "flex",
          flexDirection: "column",
          textAlign: { xs: "center", md: "initial" },
          justifyContent: "center",
          alignItems: { xs: "center", lg: "flex-start" },
          borderRadius: "5px",
          gap: { xs: 1, sm: 0 },
          mt: 1,
          mb: 1,
          pr: locale === "en" ? 3 : 2,
          pl: locale === "en" ? 2 : 3,
          transition: "1s",
          textDecoration: "none",

          "&:hover": {
            pr: 2,
            pl: 3,
            pr: locale === "en" ? 2 : 3,
            pl: locale === "en" ? 3 : 2,
            bgcolor: colors.light_grey,
            textDecoration: "none",
          },
        }}
      >
        <img src={img} loading="lazy" />
        <Box sx={{ color, fontWeight: "bold" }}>{title}</Box>
        <Box
          sx={{
            color: colors.v_dark_grey,
            fontWeight: "regular",
            display: { xs: "none", lg: "block" },
          }}
        >
          {description}
        </Box>
      </Box>
    </Box>
  );
}
