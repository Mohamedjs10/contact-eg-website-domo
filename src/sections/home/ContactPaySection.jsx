import React, { useState } from "react";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import { styles } from "./contact-pay-section";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
export default function IconsSection({}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let leftOrRight = locale === "en" ? { right: "0px" } : { left: "0px" };
  let margin = locale === "en" ? "mr" : "ml";

  return (
    <Box
      sx={styles.container}
      className="horizontal-safe-padding vertical-safe-padding my-5"
      id="contact-pay"
    >
      <Box
        // data-aos={locale == "en" ? "fade-right" : "fade-left"}
        data-aos="fade-up"
        // data-aos-delay="100"
        sx={styles.text}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "40px",
              color: colors.blue,
            }}
          >
            {t.home_page.bos.title1}
          </Box>
          <Box
            sx={{ fontWeight: "bold", fontSize: "40px", color: colors.orange }}
          >
            {t.home_page.bos.title2}
          </Box>
        </Box>
        <Box
          sx={{
            fontWeight: "bold",
            fontSize: "15px",
            color: colors.blue,
            textAlign: { xs: "justify" },
          }}
        >
          {t.home_page.bos.body1}
        </Box>
        <Box
          component="ul"
          sx={{
            listStylePosition: "inside",
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            flexWrap: "wrap",
            fontSize: "13px",
            padding: 0,
          }}
        >
          {t.home_page.bos.body2.map((item, index) => (
            <Box
              key={index}
              component="li"
              sx={{
                width: { xs: "195px", sm: "205px", md: "220px" },
                margin: "5px 0",
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={styles.img}
        // data-aos={locale == "en" ? "fade-left" : "fade-right"}
        data-aos="fade-up"

        // data-aos-delay="200"
      >
        <img
          src="/bos.png"
          loading="lazy"
          width="100%"
          style={{
            transform: locale === "en" ? "scaleX(-1)" : "scaleX(1)",
          }}
        />
      </Box>
    </Box>
  );
}
