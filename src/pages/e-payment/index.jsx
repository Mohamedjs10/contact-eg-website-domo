import React from "react";
import Image from "next/image";
import { styles } from "../../utils/styles/careers-styles";
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
import Head from "next/head";
import ContactPaySection from "../../sections/home/ContactPaySection.jsx";

export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let dir = locale === "en" ? "mr" : "ml";
  return (
    <>
      <Head>
        <title>E-Payment</title>
        <meta name="" content="" />
      </Head>

      <Box sx={{}} className="horizontal-safe-margin">
        <ContactPaySection></ContactPaySection>
      </Box>
    </>
  );
}
