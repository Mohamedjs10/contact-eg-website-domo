import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { services } from "../utils/data";
import { news } from "../utils/data";
import { styles } from "./home_dropdown";
import Service from "./Service.jsx";
import NewsCard from "./NewsCard.jsx";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
export default function Secondary_Navbar() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ overflow: "auto", height: "600px" }}>
        {services.A.map(({ color, title, description, img }) => (
          <Service
            color={color}
            title={title}
            description={description}
            img={img}
          />
        ))}
      </Box>
      <Box sx={{ overflow: "auto", height: "600px" }}>
        {services.B.map(({ color, title, description, img }) => (
          <Service
            color={color}
            title={title}
            description={description}
            img={img}
          />
        ))}
      </Box>
      <Box sx={{ bgcolor: colors.light_grey, p: 3 }}>
        <Box
          sx={{
            color: colors.blue,
            fontSize: "20px",
            fontWeight: "bold",
            mb: 3,
          }}
        >
          أخبارنا
        </Box>
        {news.map(({ title, description, img }) => (
          <NewsCard title={title} description={description} img={img} />
        ))}
        <Box
          component={Button}
          sx={{
            color: colors.ratty,
            fontSize: "20px",
            fontWeight: "bold",
            mt: 3,
          }}
        >
          المزيد
          <KeyboardArrowLeftIcon />
        </Box>
      </Box>
    </Box>
  );
}
