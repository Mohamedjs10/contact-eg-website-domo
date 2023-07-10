import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { colors } from "../../utils/const";
//
import { styles } from "../../components/secondary_navbar";
//
import AboutSection from "../../components/aboutSec/about";
import AboutCardVal from "../../components/aboutCard/aboutCard";
import Statistics from "../../components/statistics/statistics";
import Carousal from "../../components/VerticalCarousel";
import MemberItem from "../../components/MemberCard";

//
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import Head from "next/head";

export default function About() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  const [active, setActive] = useState("1");

  const handleActiveChange = (idx) => {
    setActive(idx);
  };

  return (
    <>
      <Head>
        <title>Sustainability</title>
        <meta name="" content="" />
      </Head>

      <Box>Dummy Customer Protection Guide Content</Box>
    </>
  );
}
