import React from "react";
import Image from "next/image";
import { styles } from "./[pid]";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Pagination, Button } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export default function index() {
  const router = useRouter();
  const { pid } = router.query;
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let dir = locale === "en" ? "mr" : "ml";

  return (
    <Box sx={{ color: colors.blue }} className="horizontal-safe-margin">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", lg: "space-between" },
          gap: 2,
        }}
      >
        <Box>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "30px",

              mb: 3,
            }}
          >
            كونتكت تطلق منتج رقمي لتأمين السيارات
          </Box>
          <Box>كتب: حابي</Box>
          <Box sx={{ mb: 3 }}>5 دقائق قرائة</Box>
          <Box sx={{ mb: 1, fontWeight: "bold" }}>شارك</Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <a href="https://www.facebook.com/" target="_blank">
              <Box component="img" src="/f-b.png" sx={styles.img} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Box component="img" src="/t-b.png" sx={styles.img} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Box component="img" src="/l-b.png" sx={styles.img} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Box component="img" src="/pin-b.png" sx={styles.img} />
            </a>
          </Box>
        </Box>
        <Box
          component="img"
          src="/image.png"
          sx={{
            width: "100%",
            maxWidth: "450px",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
