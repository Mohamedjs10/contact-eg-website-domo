import React from "react";
import Image from "next/image";
import { styles } from "../../../utils/styles/products-factoring-styles";
import { colors } from "../../../utils/const";
import Link from "next/link";

import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";
import ContentCard from "../../../components/our-brands/ContentCard";
import VerticalCarousel from "@/components/VerticalCarousel";
import PageCover from "@/components/PageCover";
import PlaceCard from "@/components/PlaceCard";
import IconTileSection from "../../../components/mini-components/IconTileSection.jsx";
import ImgListSection from "../../../components/mini-components/ImgListSection.jsx";
import { useFormik } from "formik";
// import { EnSchema } from "../utils/en_schema";
// import { ArSchema } from "../utils/ar_schema";
import { Box, TextField, InputLabel, MenuItem, Button } from "@mui/material";
import Calculator from "../../../components/Calculator.jsx";

// ================================================================
export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  console.log(t.general.reviews);
  // formik ==========================================================
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // simulate delay
    console.log(values);
    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      governorate: "",
      area: "",
      username: "",
      lastname: "",
      car_type: "",
      car_price: "",
    },
    // validationSchema: locale === "en" ? EnSchema : ArSchema,
    onSubmit,
  });
  return (
    <Box sx={styles.container}>
      <PageCover
        color={t.products_factoring.cover.color}
        img={t.products_factoring.cover.img}
        title1={t.products_factoring.cover.title1}
        title2={t.products_factoring.cover.title2}
        description={t.products_factoring.cover.description}
        formType="a"
      />
      <IconTileSection page="factoring"></IconTileSection>

      {/* =============================================================== */}
      <Calculator></Calculator>
    </Box>
  );
}
