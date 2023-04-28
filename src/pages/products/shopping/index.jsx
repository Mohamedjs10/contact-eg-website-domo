import React from "react";
import Image from "next/image";
import { styles } from "../../../utils/styles/products-shopping-styles";
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
  // formik ==========================================================
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // simulate delay
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
        color="#74357D"
        img="/cart.png"
        title1={t.products_shopiing_page.cover.title1}
        title2={t.products_shopiing_page.cover.title2}
        description={t.products_shopiing_page.cover.description}
        formType="a"
      />
      <Box
        sx={{ textAlign: "center" }}
        className="horizontal-safe-padding vertical-safe-padding"
      >
        <Box
          sx={{
            color: colors.orange,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box sx={{ fontSize: "56px" }}>
            {t.products_shopiing_page.section_a.title2}

            {/* 36 months */}
          </Box>
          <Box sx={{ fontSize: "30px" }}>
            {t.products_shopiing_page.section_a.title1}
            {/* payment period */}
          </Box>
        </Box>
        <Box sx={{ maxWidth: "1000px", m: "auto" }}>
          {t.products_shopiing_page.section_a.body}
        </Box>
      </Box>
      <IconTileSection page="shopping"></IconTileSection>
      <ImgListSection></ImgListSection>
      {/* ============================ Form ============================= */}

      <Box
        className="horizontal-safe-padding section-safe-padding-top"
        component="form"
        sx={{
          display: "flex",
          gap: 5,
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        {/* Governorate ---------------------------------------------------------------------------------------------------------- */}
        <Box sx={styles.inputWrapper}>
          <InputLabel sx={styles.label}>{t.form_labels.governorate}</InputLabel>
          <TextField
            value={values.governorate || "default"}
            onChange={handleChange}
            name="governorate"
            type="text"
            onBlur={handleBlur}
            error={touched.governorate && errors.governorate}
            sx={styles.input}
            select
            style={{ height: "45px" }}
            InputProps={{
              sx: {
                height: "45px",
                color: "grey",
                // fontWeight: "bold",
                lineHeight: "2",
              },
            }}
          >
            {/* <Box sx={{ height: "100px" }}> */}
            <MenuItem disabled value="default">
              {t.form_labels.g_placeholder}
            </MenuItem>
            {t.governorates.map((option) => (
              <MenuItem key={option.id} value={option.governorate_name}>
                {option.governorate_name}
              </MenuItem>
            ))}
            {/* </Box> */}
          </TextField>
          <Box sx={styles.helperText}>
            {touched.governorate && errors.governorate}
          </Box>
        </Box>
        {/* Governorate ---------------------------------------------------------------------------------------------------------- */}
        <Box sx={styles.inputWrapper}>
          <InputLabel sx={styles.label}>{t.form_labels.governorate}</InputLabel>
          <TextField
            value={values.governorate || "default"}
            onChange={handleChange}
            name="governorate"
            type="text"
            onBlur={handleBlur}
            error={touched.governorate && errors.governorate}
            sx={styles.input}
            select
            style={{ height: "45px" }}
            InputProps={{
              sx: {
                height: "45px",
                color: "grey",
                // fontWeight: "bold",
                lineHeight: "2",
              },
            }}
          >
            {/* <Box sx={{ height: "100px" }}> */}
            <MenuItem disabled value="default">
              {t.form_labels.g_placeholder}
            </MenuItem>
            {t.governorates.map((option) => (
              <MenuItem key={option.id} value={option.governorate_name}>
                {option.governorate_name}
              </MenuItem>
            ))}
            {/* </Box> */}
          </TextField>
          <Box sx={styles.helperText}>
            {touched.governorate && errors.governorate}
          </Box>
        </Box>
        {/* Governorate ---------------------------------------------------------------------------------------------------------- */}
        <Box sx={styles.inputWrapper}>
          <InputLabel sx={styles.label}>{t.form_labels.governorate}</InputLabel>
          <TextField
            value={values.governorate || "default"}
            onChange={handleChange}
            name="governorate"
            type="text"
            onBlur={handleBlur}
            error={touched.governorate && errors.governorate}
            sx={styles.input}
            select
            style={{ height: "45px" }}
            InputProps={{
              sx: {
                height: "45px",
                color: "grey",
                // fontWeight: "bold",
                lineHeight: "2",
              },
            }}
          >
            {/* <Box sx={{ height: "100px" }}> */}
            <MenuItem disabled value="default">
              {t.form_labels.g_placeholder}
            </MenuItem>
            {t.governorates.map((option) => (
              <MenuItem key={option.id} value={option.governorate_name}>
                {option.governorate_name}
              </MenuItem>
            ))}
            {/* </Box> */}
          </TextField>
          <Box sx={styles.helperText}>
            {touched.governorate && errors.governorate}
          </Box>
        </Box>
      </Box>

      {/* =============================================================== */}
      <VerticalCarousel
        itemsArray={t.general.places}
        Component={PlaceCard}
        slidesPerView={4.3}
      ></VerticalCarousel>
      {/* =============================================================== */}
      <Calculator products_packages={t.calc_packages.consumer_finance} />
    </Box>
  );
}
