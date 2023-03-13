import React from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

import { colors } from "../utils/const";
import { styles } from "./main_navbar.js";

export default function Main_Navbar() {
  return (
    <Box sx={styles.container} style={{}} className="horizontal-safe-padding">
      <MenuIcon sx={{ fontSize: 40 }} />
      <Box component={Link} sx={styles.tab} href="/">
        أفراد
      </Box>
    </Box>
  );
}
