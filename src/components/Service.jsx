import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./service";

export default function Service({ img, title, description, color }) {
  return (
    <Box>
      <Box sx={styles.container}>
        <img src={img} />
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
