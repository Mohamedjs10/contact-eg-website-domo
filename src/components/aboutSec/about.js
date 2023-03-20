import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { colors } from "../../utils/const";
import en from "../../../locales/en";
import ar from "../../../locales/ar";

export default function Statistics() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  const contentGeneration = ({ heading, text }) => {
    return (
      <Box sx={{ width: "75%", mb: 3, color: colors.blue }}>
        <Typography variant="h5" sx={{ fontWeight: "700" }}>
          {heading}
        </Typography>
        <Typography sx={{ mt: 1, lineHeight: 1.7 }} variant="subtitle2">
          {text}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ p: 5, bgcolor: "#f2f2f2", position: "relative" }}>
      <Box
        component="img"
        src="/images/about-line.png"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: locale === "en" ? "scaleX(-1)" : "scaleX(1)",
          left: locale === "en" ? "" : 0,
          right: locale === "ar" ? "" : 0,
          height: "50%",
          display: {
            xs: "none",
            md: "block",
          },
        }}
      />
      <Typography
        variant="subtitle2"
        sx={{ color: colors.blue, display: "block", mb: 2, fontWeight: "bold" }}
      >
        {t.about.aboutTitle}
      </Typography>
      <Box
        src="/images/logo contact.png"
        component="img"
        sx={{ width: "120px" }}
      />
      <Typography
        variant="subtitle2"
        sx={{
          position: "relative",
          zIndex: 999999,
          color: colors.blue,
          display: "block",
          my: 3,
          width: {
            md: "65%",
            xs: "100%",
          },
          lineHeight: 1.6,
        }}
      >
        {t.about.aboutText}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          marginTop: "100px",
        }}
      >
        <Box>
          {contentGeneration({
            heading: t.about.aboutCard.heading1,
            text: t.about.aboutCard.text1,
          })}
          {contentGeneration({
            heading: t.about.aboutCard.heading2,
            text: t.about.aboutCard.text2,
          })}
          {contentGeneration({
            heading: t.about.aboutCard.heading3,
            text: t.about.aboutCard.text3,
          })}
        </Box>
        <Box
          component="img"
          src="/images/about-member.png"
          sx={{
            width: {
              lg: "715px",
              md: "500px",
              sm: "500px",
            },
            margin: {
              sm: "auto",
            },
            zIndex: 9999,
            borderRadius: "40% 0% 40% 0%",
          }}
        />
      </Box>
    </Box>
  );
}
