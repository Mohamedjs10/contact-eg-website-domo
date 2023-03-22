import React from "react";
import Image from "next/image";
import { styles } from "./styles";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import Button from "@mui/material/Button";
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
export default function index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let dir = locale === "en" ? "mr" : "ml";
  return (
    <Box sx={{}} className="horizontal-safe-margin">
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 2,
            flex: "1 1 50%",
          }}
        >
          <img src="/image.png" width="100%" />
          <Box>كونتكت تطلق منتج رقمي لتأمين السيارات</Box>
          <Box>كونتكت تطلق منتج رقمي لتأمين السيارات</Box>
          <Box
            component={Button}
            sx={{
              color: colors.ratty,
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            إقرأ المزيد
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flex: "1 1 50%" }}>
          <Box sx={{ display: "flex" }}>
            <img src="/image.png" width="30%" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box>كونتكت تطلق منتج رقمي لتأمين السيارات</Box>
              <Box>
                كونتكت المالية القابضة تعلن اليوم عن إطلاق منتج رقمي بالكامل
                للتأمين التكميلى للسيارات في مصر. يتوفر المنتج من خلال منصة
                كونتكت كارز دوت كوم وشركة ثروة للتأمين وشركة كونتكت ...
              </Box>
              <Box
                component={Button}
                sx={{
                  color: colors.ratty,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                إقرأ المزيد
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
