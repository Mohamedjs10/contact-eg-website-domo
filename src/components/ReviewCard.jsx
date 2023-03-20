import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./review-card";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";

import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function MemberCard({ img, title, description, color }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box
      sx={{
        "&:hover": { cursor: "grab" },
        "&:active": { cursor: "grabbing" },
        width: { xs: "260px", sm: "270", md: "280px", md: "290px" }, // change me
        height: "200px", //change me
        color: colors.black,
        border: "1px solid black",
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        p: 1,
      }}
    >
      <Rating name="read-only" value={2} readOnly />
      <Box sx={{ m: 1, fontSize: "15px", alignSelf: "flex-start" }}>
        لقد كنت متأكدا من أن هذا المنتج لن يعمل كما هو متوقع، ولكن بعد التجربة
        كان هو يعمل بشكل جيد جدا
      </Box>
      <Box sx={{ m: 1, fontSize: "18px", display: "flex", gap: 1 }}>
        <Avatar alt="Remy Sharp" src="member.png" />
        <Box sx={{ fontSize: "15px" }}>
          <Box sx={{ fontWeight: "bold" }}>ماهر فياض</Box>
          <Box sx={{}}>مش رئيس مجلس إدارة, كونتكت</Box>
        </Box>
      </Box>
    </Box>
  );
}
