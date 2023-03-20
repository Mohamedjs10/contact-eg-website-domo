import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./place_card";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function MemberCard({ img, name }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box
      sx={{
        "&:hover": { cursor: "grab" },
        "&:active": { cursor: "grabbing" },
        width: "220px", // change me
        height: "258px", //change me
        color: colors.black,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          my: 1,
          height: "200px",
          width: "200px",
        }}
      />

      <Box sx={{ m: 1, fontSize: "18px", alignSelf: "flex-start" }}>{name}</Box>
    </Box>
  );
}
