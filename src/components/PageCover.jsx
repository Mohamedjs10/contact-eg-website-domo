import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./page_cover";
import Form from "./Form.jsx";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function PageCover({
  title1,
  title2,
  description,
  img,
  color,
  formType,
}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let leftOrRight = locale === "en" ? { right: "0px" } : { left: "0px" };
  return (
    <Box
      sx={styles.container}
      style={{ backgroundColor: color, position: "relative" }}
    >
      {/* decorator ================================================================================ */}
      <Box
        sx={{
          width: { xs: "200px", md: "300px", lg: "400px" },
          position: "absolute",
          top: "0px",
          ...leftOrRight,
          opacity: ".2",
          transform: locale === "en" ? "scaleX(-1)" : "scaleX(1)",
        }}
      >
        <img src="/decorator.png" width="100%" />
      </Box>
      {/* container ================================================================================ */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", lg: "flex-start" },
          textAlign: { xs: "center", lg: locale === "en" ? "left" : "right" },
          m: 3,
        }}
      >
        {/* title1 ================================================================================ */}
        <Box
          data-aos="fade-up"
          sx={{
            fontSize: { xs: "30px", sm: "35px", md: "42px" },

            fontWeight: "bold",
          }}
        >
          {title1}
        </Box>
        {/* line ================================================================================ */}
        <Box sx={{ width: "300px" }}>
          <img src="/title.png" width="100%" />
        </Box>
        {/* title2 ================================================================================ */}
        <Box
          data-aos="fade-up"
          data-aos-delay="100"
          sx={{
            fontSize: { xs: "30px", sm: "35px", md: "42px" },

            fontWeight: "bold",
          }}
        >
          {title2}
        </Box>
        {/* description ================================================================================ */}

        <Box
          data-aos="fade-up"
          data-aos-delay="300"
          sx={{
            fontSize: "16px",
            wordWrap: "break-word",
            maxWidth: "600px",
            pb: 2,
            lineHeight: 2,
            textAlign: {
              xs: "justify",
              lg: locale === "en" ? "left" : "right",
            },
          }}
        >
          {description}
        </Box>
        {/* image ================================================================================ */}
        <Box
          data-aos="fade-up"
          sx={{
            width: { xs: "500px" },
            // height: { xs: "500px" },
            display: { xs: "none", lg: "block" },
            m: 5,
            transform: locale === "en" ? "scaleX(-1)" : "scaleX(1)",
          }}
        >
          <img src={img} width="100%" />
        </Box>
      </Box>
      {/* form ================================================================================ */}
      <Form color={color} type={formType} />
    </Box>
  );
}
