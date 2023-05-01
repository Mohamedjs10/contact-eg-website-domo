import React from "react";
import Image from "next/image";
import { styles } from "../../../utils/styles/products-car-styles";
import { colors } from "../../../utils/const";
import Link from "next/link";

import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";
import ContentCard from "../../../components/our-brands/ContentCard";
import VerticalCarousel from "@/components/VerticalCarousel";
import PageCover from "@/components/PageCover";
import Card from "@/components/Card.jsx";
import IconTileSection from "../../../components/mini-components/IconTileSection.jsx";
import ImgListSection from "../../../components/mini-components/ImgListSection.jsx";
import { useFormik } from "formik";
// import { EnSchema } from "../utils/en_schema";
// import { ArSchema } from "../utils/ar_schema";
import { Box, TextField, InputLabel, MenuItem, Button } from "@mui/material";
import Calculator from "../../../components/Calculator.jsx";
import CardSlider from "../../../components/CardSlider.jsx";

// ================================================================
export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  // formik ==========================================================
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // simulate delay
    actions.resetForm();
  };

  return (
    <Box sx={styles.container}>
      <PageCover
        color={t.products_cars.cover.color}
        img={t.products_cars.cover.img}
        title1={t.products_cars.cover.title1}
        title2={t.products_cars.cover.title2}
        description={t.products_cars.cover.description}
        formType="a"
      />
      {/* =============================================================== */}
      <IconTileSection page="auto"></IconTileSection>
      {/* =============================================================== */}
      <CardSlider page="cars"></CardSlider>
      {/* =============================================================== */}
      <Calculator products_packages={t.calc_packages.auto} />
    </Box>
  );
}
