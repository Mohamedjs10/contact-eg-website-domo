import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./service";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { Swiper, SwiperSlide } from "swiper/react";
import MemberCard from "./MemberCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "url(forward-arrow.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "url(back-arrow.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

// ======================
export default function VerticalCarousel() {
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "en" ? en : ar;

  return (
    // <Box
    //   sx={{
    //     width: "1400px",
    //     zIndex: "9999",
    //     mb: 3,
    //     "& .slick-prev:before": {
    //       display: "none",
    //     },
    //     "& .slick-next:before": {
    //       display: "none",
    //     },

    //     "& .slick-prev": {
    //       top: "500px",
    //       left: "900px !important",
    //       zIndex: 1,
    //     },
    //     "& .slick-next": {
    //       top: "500px",

    //       left: "1000px!important",
    //       zIndex: 1,
    //     },
    //   }}
    // >
    //   <Slider {...settings} class="carousel-rtl" dir="rtl">
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     <MemberCard></MemberCard>
    //     {/* <Box>11111111111</Box> */}
    //   </Slider>
    // </Box>
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <MemberCard></MemberCard>
        </SwiperSlide>
        <SwiperSlide>
          <MemberCard></MemberCard>
        </SwiperSlide>
        <SwiperSlide>
          <MemberCard></MemberCard>
        </SwiperSlide>
        <SwiperSlide>
          <MemberCard></MemberCard>
        </SwiperSlide>
        <SwiperSlide>
          <MemberCard></MemberCard>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
