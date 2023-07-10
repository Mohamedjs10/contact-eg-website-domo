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

      <Box>
        <AboutSection type="sustainability" />

        <Box
          sx={{
            my: {
              xs: 6,
              md: 12,
            },
            py: 8,
            bgcolor: "#F9FAFB",
            textAlign: t.textAlign,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "block",
              color: colors.blue,
              fontWeight: "600",
              mx: 5,
            }}
          >
            {t.sustainability.subTitle}
          </Typography>
          <Typography sx={{ color: colors.blue, my: 2, mx: 5 }} variant="h5">
            {t.sustainability.title}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 4,
              mx: 5,
              width: {
                xs: "100",
                md: "34%",
              },
            }}
          >
            {t.sustainability.text}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
                justifyContent: "space-around",
              },
            }}
          >
            {t.sustainability.card.card_sections.map((item) => (
              <AboutCardVal
                type="sustainability"
                key={item.id}
                icon={item.img}
                heading={item.title}
                textArr={item.text}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            mx: {
              xs: 6,
              md: 12,
            },
            my: {
              xs: 6,
              md: 12,
            },
            bgcolor: "#F9FAFB",
            borderRadius: "15px",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
              justifyContent: "space-around",
            },
          }}
        >
          {t.sustainability.statistic.map((item) => (
            <Statistics
              key={item.id}
              type="sustainability"
              num={item.count}
              suffix={item.sufTheous}
              text={item.text}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
