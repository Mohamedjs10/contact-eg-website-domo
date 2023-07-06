import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "../sections/home/image_section";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";

export default function ImageCard({ img, title1, title2, url, delay }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <Box
      data-aos="fade-up"
      // data-aos-delay={`${delay}`}
    >
      <Box
        component={Link}
        href={url}
        sx={{
          // width: "282px",
          width: { xs: "140px", sm: "282px" },
          // height: "154px",
          height: { xs: "75px", sm: "154px" },
          color: colors.white,
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${img})`,
          backgroundSize: "282px 154px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: 5,
          textAlign: t.textAlign,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          transition: "1.5s",
          textDecoration: "none",
          "&:hover": {
            backgroundSize: "310px 180px",
            color: colors.white,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* <Box sx={{ fontSize: "25px" }}>{title1}</Box> */}
          <Box sx={{ fontSize: { xs: "12.5", sm: "25px" } }}>{title1}</Box>
          {/* <Box sx={{ fontWeight: "bold", fontSize: "32px" }}>{title2}</Box> */}
          <Box
            sx={{ fontWeight: "bold", fontSize: { xs: "16px", sm: "32px" } }}
          >
            {title2}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
