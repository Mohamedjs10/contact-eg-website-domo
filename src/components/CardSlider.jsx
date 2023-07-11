import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";
import Card from "./Card.jsx";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function BottomCard({ page }) {
  const [state, setState] = useState(0);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  let arr;
  let title;

  switch (page) {
    case "cars":
      arr = t.products_cars.plans;
      title = t.products_cars.plans_title;
      break;
    case "trucks":
      arr = t.products_trucks.plans;
      title = t.products_trucks.plans_title;
      break;
    case "mortgage":
      arr = t.products_home.plans;
      title = t.products_home.plans_title;
      break;
    // default:
    // arr = t.products_trucks.plans;
    // title = t.products_trucks.plans_title;
  }

  return (
    <Box
      className="vertical-safe-padding"
      sx={{
        // py: 5,
        "& .swiper-slide-active": {
          transition: ".5s",
          scale: { xs: "1", md: "1.2" },
          // overflow: "visible",
        },
        "& .swiper": {
          overflowX: "hidden",
          py: "20px",
        },
      }}
    >
      <Box
        sx={{
          pb: 5,
          textAlign: "center",
          color: "#1064A0",
          fontWeight: "bold",
          fontSize: "35px",
        }}
      >
        {title}
      </Box>

      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            // spaceBetween: 20,
          },
          900: {
            slidesPerView: 2.5,
            // spaceBetween: 25,
          },
          1200: {
            slidesPerView: 3.1,
            // spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        className="mySwiper"
      >
        {arr.map((item, index) => (
          <SwiperSlide>
            <Card
              state={state}
              index={index}
              title={item.title}
              bodyList={item.bodyList}
              color="#1169A8"
            ></Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
