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
      <Box>
        {news.map(({ title, description, img }) => (
          <NewsCard title={title} description={description} img={img} />
        ))}
      </Box>
    </Box>
  );
}
