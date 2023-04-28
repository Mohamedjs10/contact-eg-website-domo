import React, { useState } from "react";

import Image from "next/image";
import { styles } from "../../../utils/styles/products-green-finance-styles";
import { colors } from "../../../utils/const";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";
import PageCover from "@/components/PageCover";
import Card from "@/components/Card.jsx";
import { Box } from "@mui/material";
import Calculator from "../../../components/Calculator.jsx";
import Number from "../../../components/mini-components/Number.jsx";

// ================================================================
export default function Index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const [state, setState] = useState("");

  return (
    <Box sx={styles.container}>
      <PageCover
        color={t.products_green_finance.cover.color}
        img={t.products_green_finance.cover.img}
        title1={t.products_green_finance.cover.title1}
        title2={t.products_green_finance.cover.title2}
        description={t.products_green_finance.cover.description}
        formType="a"
      />
      {/* ============================ Section A ============================= */}
      <Box
        className="horizontal-safe-padding vertical-safe-padding"
        sx={{
          bgcolor: "white",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", lg: "space-between" },
          alignItems: "center",
          textAlign: { xs: "center", md: "initial" },
        }}
      >
        <Box
          sx={{
            maxWidth: "700px",
          }}
        >
          <Box sx={{ fontSize: "42px", color: colors.orange, mb: 1.5 }}>
            {t.products_green_finance.section_a.title1}
          </Box>
          <Box sx={{ fontSize: "42px", color: colors.orange, mb: 1.5 }}>
            {t.products_green_finance.section_a.title2}
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
            {t.products_green_finance.section_a.body.map((item, index) => (
              <li>{item}</li>
            ))}
          </Box>
        </Box>
        <Box
          component="img"
          src={t.products_finishing.section_b.img}
          sx={{ width: { xs: "200px", sm: "250px", md: "300px", lg: "400px" } }}
        />
      </Box>

      {/* =============================================================== */}
      <Calculator products_packages={t.calc_packages.green_finance} />
    </Box>
  );
}
