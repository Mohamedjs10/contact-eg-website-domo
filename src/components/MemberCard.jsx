import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./service";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function MemberCard({ img, title, description, color }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box sx={{ position: "relative", color: colors.white, width: "350px" }}>
      <Box
        component="img"
        src="member.png"
        sx={{
          height: "450px",
          width: "100%",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(12px)",
          height: "30%",
          width: "100%",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ m: 1, fontSize: "30px" }}>سعيد زعتر</Box>
        <Box sx={{ m: 1, fontSize: "20px" }}>
          العضو المنتدب للشركة القابضة والرئيس التنفيذي
        </Box>
      </Box>
    </Box>
  );
}
