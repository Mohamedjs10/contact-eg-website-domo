import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../../utils/const";
import { styles } from "./icons_section";
import ImageCard from "../../components/ImageCard.jsx";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import Title from "../../components/mini-components/Title.jsx";
export default function IconsSection({}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let leftOrRight = locale === "en" ? { right: "0px" } : { left: "0px" };
  let margin = locale === "en" ? "mr" : "ml";
  return (
    <Box
      sx={styles.container}
      className="horizontal-safe-padding vertical-safe-padding"
    >
      <Box sx={styles.item}>
        <img src="shopping.png" alt="shopping" width="80px" />
        <Box sx={{ fontSize: "40px", fontWeight: "bold", color: colors.blue }}>
          تسوق
        </Box>
        <Box
          sx={{
            wordWrap: "break-word",
            textAlign: "center",
            ontSize: 2,
            color: colors.petroli,
          }}
        >
          ابحث عن منتجات وعلامات تجارية جديدة. احصل على أفضل صفقة واكسب مكافآت -
          فقط للتسوق.
        </Box>
      </Box>
      <Box sx={styles.item}>
        <img src="shopping.png" alt="shopping" width="80px" />
        <Box sx={{ fontSize: "40px", fontWeight: "bold", color: colors.blue }}>
          تسوق
        </Box>
        <Box
          sx={{
            wordWrap: "break-word",
            textAlign: "center",
            ontSize: 2,
            color: colors.petroli,
          }}
        >
          ابحث عن منتجات وعلامات تجارية جديدة. احصل على أفضل صفقة واكسب مكافآت -
          فقط للتسوق.
        </Box>
      </Box>
      <Box sx={styles.item}>
        <img src="shopping.png" alt="shopping" width="80px" />
        <Box sx={{ fontSize: "40px", fontWeight: "bold", color: colors.blue }}>
          تسوق
        </Box>
        <Box
          sx={{
            wordWrap: "break-word",
            textAlign: "center",
            ontSize: 2,
            color: colors.petroli,
          }}
        >
          ابحث عن منتجات وعلامات تجارية جديدة. احصل على أفضل صفقة واكسب مكافآت -
          فقط للتسوق.
        </Box>
      </Box>
    </Box>
  );
}
