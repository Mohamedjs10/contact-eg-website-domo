import React, { useEffect, useState } from "react";
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
import Head from "next/head";
import axios from "axios";

// ================================================================
export default function Index() {
  const [data, setData] = useState([]);
  console.log("====data====>", data);
  const [categories, setCategories] = useState([]);
  console.log("====categories====>", categories);
  // const [categoryId, setCategoryId] = useState("0");
  const [categoryId, setCategoryId] = useState("");
  console.log("====categoryId====>", categoryId);
  const [cities, setCities] = useState([]);
  console.log("====cities====>", cities);
  // const [cityId, setCityId] = useState("1");
  const [cityId, setCityId] = useState("");
  console.log("====cityId====>", cityId);
  const [areas, setAreas] = useState([]);
  console.log("====areas====>", areas);
  const [areaId, setAreaId] = useState("");
  console.log("====areaId====>", areaId);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  useEffect(() => {
    // get categories
    axios
      .get(`https://api-mobile.contact.eg/products/6/getMainCategories`)
      .then(function (response) {
        setCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // get cities
    axios
      .get(`https://api-mobile.contact.eg/products/6/cities`)
      .then(function (response) {
        setCities(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // get areas
    if (cityId) {
      axios
        .get(
          `https://api-mobile.contact.eg/products/cities/${cityId}/areas?lang=en`
        )
        .then(function (response) {
          setAreas(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // get merchants
    // if (categoryId && cityId && areaId) {
    if (categoryId && cityId) {
      axios
        .post(
          `https://api-mobile.contact.eg/products/merchants/search?lang=${
            locale === "en" ? "en" : "ar"
          }`,
          {
            productId: "6",
            categoryId: `${categoryId}`,
            areaId: `${areaId || "0"}`,
            cityId: `${cityId}`,
            query: "",
          }
        )
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [categoryId, cityId, areaId, data]);
  return (
    <>
      <Head>
        <title>Products-Shopping</title>
        <meta name="" content="" />
      </Head>
      <Box sx={styles.container}>
        <PageCover
          color="#74357D"
          img="/cart.png"
          title1={t.products_shopiing_page.cover.title1}
          title2={t.products_shopiing_page.cover.title2}
          description={t.products_shopiing_page.cover.description}
          formType="b"
          product="shopping"
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
          // onSubmit={handleSubmit}
          autoComplete="off"
          noValidate
        >
          {/* Category ---------------------------------------------------------------------------------------------------------- */}
          <Box sx={styles.inputWrapper}>
            <InputLabel sx={styles.label}>
              {/* {t.form_labels.governorate} */}
              Category
            </InputLabel>
            <TextField
              // value={values.governorate || "default"}
              value={categoryId || "default"}
              onChange={(e) => {
                console.log(`${e.target.value}`);
                setCategoryId(`${e.target.value}`);
              }}
              name="governorate"
              type="text"
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
              {categories &&
                categories.map((option) => (
                  <MenuItem key={option.categoryId} value={option.categoryId}>
                    {option.title}
                  </MenuItem>
                ))}
              {/* </Box> */}
            </TextField>
            {/* <Box sx={styles.helperText}>
              {touched.governorate && errors.governorate}
            </Box> */}
          </Box>
          {/* City ---------------------------------------------------------------------------------------------------------- */}
          <Box sx={styles.inputWrapper}>
            <InputLabel sx={styles.label}>
              {/* {t.form_labels.governorate} */}
              City
            </InputLabel>
            <TextField
              // value={values.governorate || "default"}
              value={cityId || "default"}
              onChange={(e) => {
                console.log(`${e.target.value}`);
                setCityId(`${e.target.value}`);
              }}
              name="governorate"
              type="text"
              // onBlur={handleBlur}
              // error={touched.governorate && errors.governorate}
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
              {cities &&
                cities.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              {/* </Box> */}
            </TextField>
            {/* <Box sx={styles.helperText}>
              {touched.governorate && errors.governorate}
            </Box> */}
          </Box>
          {/* Area ---------------------------------------------------------------------------------------------------------- */}
          <Box sx={styles.inputWrapper}>
            <InputLabel sx={styles.label}>
              {/* {t.form_labels.governorate} */}
              Area
            </InputLabel>
            <TextField
              // value={values.governorate || "default"}
              value={areaId || "default"}
              onChange={(e) => {
                console.log(`${e.target.value}`);
                setAreaId(`${e.target.value}`);
              }}
              name="governorate"
              type="text"
              // onBlur={handleBlur}
              // error={touched.governorate && errors.governorate}
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
              {areas &&
                areas.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              {/* </Box> */}
            </TextField>
            {/* <Box sx={styles.helperText}>
              {touched.governorate && errors.governorate}
            </Box> */}
          </Box>
        </Box>

        {/* =============================================================== */}
        {data.length ? (
          <VerticalCarousel
            // itemsArray={t.general.places}
            hideDots={true}
            itemsArray={data}
            Component={PlaceCard}
            slidesPerView={4.3}
          ></VerticalCarousel>
        ) : (
          <Box sx={{ textAlign: "center", my: 5 }}>
            Please Choose at least a Category and a City
          </Box>
        )}
        {/* =============================================================== */}
        <Calculator products_packages={t.calc_packages.consumer_finance} />
      </Box>
    </>
  );
}
