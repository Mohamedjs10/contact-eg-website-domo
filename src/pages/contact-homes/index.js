import React from "react";
import Image from "next/image";
import { styles } from "../../utils/styles/products-finishing-styles";
import { colors } from "../../utils/const";
import Link from "next/link";

import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import ContentCard from "../../components/our-brands/ContentCard";
import VerticalCarousel from "@/components/VerticalCarousel";
import PageCover from "@/components/PageCover";
import PlaceCard from "@/components/PlaceCard";
import IconTileSection from "../../components/mini-components/IconTileSection.jsx";
import ImgListSection from "../../components/mini-components/ImgListSection.jsx";
import { useFormik } from "formik";
// import { EnSchema } from "../utils/en_schema";
// import { ArSchema } from "../utils/ar_schema";
import { Box, TextField, InputLabel, MenuItem, Button } from "@mui/material";
import Calculator from "../../components/Calculator.jsx";
import Head from "next/head";

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
    <>
      <Head>
        <title>Products-Finishing</title>
        <meta name="" content="" />
      </Head>

      <Box sx={styles.container}>
        <PageCover
          color={t.contact_homes.cover.color}
          img={t.contact_homes.cover.img}
          title1={t.contact_homes.cover.title1}
          title2={t.contact_homes.cover.title2}
          description={t.contact_homes.cover.description}
          formType="b"
          product="finishing"
        />
        {/* <IconTileSection page="finishing"></IconTileSection> */}

        {/* ============================ Section A ============================= */}
        <Box
          className="horizontal-safe-padding vertical-safe-padding"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", lg: "space-between" },
            alignItems: "center",
            // textAlign: { xs: "center", md: "initial" },
            textAlign: "initial",

            bgcolor: "white",
          }}
        >
          <Box
            sx={{
              maxWidth: "700px",
            }}
          >
            <Box sx={{ fontSize: "42px", color: colors.orange, mb: 1.5 }}>
              {t.contact_homes.section_a.title}
            </Box>
            <Box
              component="ul"
              sx={{
                listStylePosition: "inside",
                p: 0,
                mb: 3,
                textAlign: "initial",
              }}
            >
              <Box>{t.contact_homes.section_a.body}</Box>

              {/* {t.products_home.section_b.body.map((item, index) => (
                <li>{item}</li>
              ))} */}
            </Box>
          </Box>
          <Box
            component="img"
            src={t.products_finishing.section_b.img}
            sx={{
              width: { xs: "200px", sm: "250px", md: "300px", lg: "400px" },
              display: { xs: "none", sm: "block" },
            }}
          />
        </Box>

        {/* ============================ Section B ============================= */}
        <Box
          className="horizontal-safe-padding vertical-safe-padding"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", lg: "space-between" },
            alignItems: "center",
            // textAlign: { xs: "center", md: "initial" },
            textAlign: "initial",
            bgcolor: "white",
          }}
        >
          <Box
            component="img"
            src={t.products_finishing.section_b.img}
            sx={{
              width: { xs: "200px", sm: "250px", md: "300px", lg: "400px" },
              display: { xs: "none", sm: "block" },
            }}
          />
          <Box
            sx={{
              maxWidth: "700px",
            }}
          >
            <Box sx={{ fontSize: "42px", color: colors.orange, mb: 1.5 }}>
              {t.contact_homes.section_b.title}
            </Box>
            <Box
              component="ul"
              sx={{
                listStylePosition: "inside",
                p: 0,
                mb: 3,
                textAlign: "initial",
              }}
            >
              {t.contact_homes.section_b.body.map((item, index) => (
                <li>{item}</li>
              ))}
            </Box>
          </Box>
        </Box>
        {/* ============================ Section C ============================= */}
        <Box
          className="horizontal-safe-padding vertical-safe-padding"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", lg: "space-between" },
            alignItems: "center",
            // textAlign: { xs: "center", md: "initial" },
            textAlign: "initial",

            bgcolor: "white",
          }}
        >
          <Box
            sx={{
              maxWidth: "700px",
            }}
          >
            <Box sx={{ fontSize: "42px", color: colors.orange, mb: 1.5 }}>
              {t.contact_homes.section_c.title}
            </Box>
            <Box
              component="ul"
              sx={{
                listStylePosition: "inside",
                p: 0,
                mb: 3,
                textAlign: "initial",
              }}
            >
              {t.contact_homes.section_c.body.map((item, index) => (
                <li>{item}</li>
              ))}
            </Box>
          </Box>
          <Box
            component="img"
            src={t.products_finishing.section_b.img}
            sx={{
              width: { xs: "200px", sm: "250px", md: "300px", lg: "400px" },
              display: { xs: "none", sm: "block" },
            }}
          />
        </Box>

        {/* ============================ Section D ============================= */}
        <Box
          className="horizontal-safe-padding vertical-safe-padding"
          sx={{
            display: locale === "en" ? "none" : "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", lg: "space-between" },
            alignItems: "center",
            // textAlign: { xs: "center", md: "initial" },
            textAlign: "initial",

            bgcolor: "white",
          }}
        >
          <Box
            component="img"
            src={t.contact_homes.section_d.img}
            sx={{
              width: { xs: "200px", sm: "250px", md: "300px", lg: "400px" },
              display: { xs: "none", sm: "block" },
            }}
          />
          <Box
            sx={{
              maxWidth: "700px",
            }}
          >
            <Box sx={{ fontSize: "42px", color: colors.orange, mb: 1.5 }}>
              {t.contact_homes.section_d.title}
            </Box>
            <Box
              component="ul"
              sx={{
                listStylePosition: "inside",
                p: 0,
                mb: 3,
                textAlign: "initial",
              }}
            >
              {t.contact_homes.section_d.body.map((item, index) => (
                <li>{item}</li>
              ))}
            </Box>
          </Box>
        </Box>

        {/* =============================================================== */}

        <Calculator />
      </Box>
    </>
  );
}
