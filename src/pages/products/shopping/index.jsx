import React, { useEffect, useState } from "react";
import { styles } from "../../../utils/styles/products-shopping-styles";
import { colors } from "../../../utils/const";
import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";
import VerticalCarousel from "@/components/VerticalCarousel";
import PageCover from "@/components/PageCover";
import PlaceCard from "@/components/PlaceCard";
import IconTileSection from "../../../components/mini-components/IconTileSection.jsx";
import ImgListSection from "../../../components/mini-components/ImgListSection.jsx";
import { Box, TextField, InputLabel, MenuItem, Button } from "@mui/material";
import Calculator from "../../../components/Calculator.jsx";
import Head from "next/head";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";

// ================================================================
export default function Index() {
  const [data, setData] = useState(["initial"]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [cities, setCities] = useState([]);
  const [cityId, setCityId] = useState("");
  const [areas, setAreas] = useState([]);
  const [areaId, setAreaId] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  useEffect(() => {
    // get categories
    !categories.length &&
      axios
        .get(
          `https://api-mobile.contact.eg/products/6/getMainCategories?lang=${
            locale === "en" ? "en" : "ar"
          }`
        )
        .then(function (response) {
          response.data.shift(); // remove All from categories list
          setCategories(response.data);
        })
        .catch(function (error) {});
    // get cities
    !cities.length &&
      axios
        .get(
          `https://api-mobile.contact.eg/products/6/cities?lang=${
            locale === "en" ? "en" : "ar"
          }`
        )
        .then(function (response) {
          setCities(response.data);
        })
        .catch(function (error) {});
    // get areas
    if (cityId) {
      axios
        .get(
          `https://api-mobile.contact.eg/products/cities/${cityId}/areas?lang=${
            locale === "en" ? "en" : "ar"
          }`
        )
        .then(function (response) {
          setAreas(response.data);
        })
        .catch(function (error) {});
    }
    // get merchants
    if (categoryId && cityId) {
      axios
        .post(
          `https://api-mobile.contact.eg/products/merchants/search?lang=${
            locale === "en" ? "en" : "ar"
          }`,
          {
            productId: "6",
            categoryId: `${categoryId}`,
            cityId: `${cityId}`,
            areaId: `${areaId || "0"}`,
            query: "",
          }
        )
        .then(function (response) {
          if (response.data.length) {
            setData(response.data);
          } else {
            setData(["not-initial"]);
          }
          setLoading(false);
        })
        .catch(function (error) {});
    }
  }, [categoryId, cityId, areaId]);
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
          autoComplete="off"
          noValidate
        >
          {/* Category ---------------------------------------------------------------------------------------------------------- */}
          <Box sx={styles.inputWrapper}>
            <InputLabel sx={styles.label}>{t.form_labels.category}</InputLabel>
            <TextField
              value={categoryId || "default"}
              onChange={(e) => {
                setCategoryId(`${e.target.value}`);
                if (data[0] !== "initial" || cityId) {
                  setLoading(true);
                  setData([]);
                }
              }}
              name="category"
              type="text"
              sx={styles.input}
              select
              style={{ height: "45px" }}
              InputProps={{
                sx: {
                  height: "45px",
                  color: "grey",
                  lineHeight: "2",
                },
              }}
            >
              <MenuItem disabled value="default">
                {t.form_labels.cat_placeholder}
              </MenuItem>
              {categories &&
                categories.map((option) => (
                  <MenuItem key={option.categoryId} value={option.categoryId}>
                    {option.title}
                  </MenuItem>
                ))}
            </TextField>
          </Box>
          {/* City ---------------------------------------------------------------------------------------------------------- */}
          <Box sx={styles.inputWrapper}>
            <InputLabel sx={styles.label}>{t.form_labels.city}</InputLabel>
            <TextField
              value={cityId || "default"}
              onChange={(e) => {
                setCityId(`${e.target.value}`);

                if (categoryId) {
                  setLoading(true);
                  setData([]);
                }
                setAreaId("");
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
                  lineHeight: "2",
                },
              }}
            >
              <MenuItem disabled value="default">
                {t.form_labels.city_placeholder}
              </MenuItem>
              {cities &&
                cities.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              {/* </Box> */}
            </TextField>
          </Box>
          {/* Area ---------------------------------------------------------------------------------------------------------- */}

          {areas.length > 0 && (
            <Box sx={styles.inputWrapper}>
              <InputLabel sx={styles.label}>{t.form_labels.area}</InputLabel>
              <TextField
                value={areaId || "default"}
                onChange={(e) => {
                  if (categoryId && cityId) {
                    setLoading(true);
                    setData([]);
                  }
                  setAreaId(`${e.target.value}`);
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
                    lineHeight: "2",
                  },
                }}
              >
                <MenuItem disabled value="default">
                  {t.form_labels.area_placeholder}
                </MenuItem>
                {areas &&
                  areas.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
              </TextField>
            </Box>
          )}
        </Box>

        {/* =============================================================== */}
        {data.length && data[0] !== "initial" && data[0] !== "not-initial" ? (
          <VerticalCarousel
            hideDots={true}
            itemsArray={data}
            Component={PlaceCard}
            slidesPerView={4.3}
          ></VerticalCarousel>
        ) : loading == true ? (
          <Box sx={{ width: "85%", m: "auto", my: 5 }}>
            <LinearProgress />
          </Box>
        ) : data[0] == "not-initial" ? (
          <Box sx={{ textAlign: "center", my: 5 }}>{t.form_labels.case2}</Box>
        ) : (
          <Box sx={{ textAlign: "center", my: 5 }}>{t.form_labels.case1} </Box>
        )}

        {/* =============================================================== */}
        <Calculator products_packages={t.calc_packages.consumer_finance} />
      </Box>
    </>
  );
}
