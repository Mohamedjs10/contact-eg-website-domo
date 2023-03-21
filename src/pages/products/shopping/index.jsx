import React from "react";
import Image from "next/image";
import { styles } from "./styles";
import { Box } from "@mui/material";
import { colors } from "../../../utils/const";
import Link from "next/link";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import en from "../../../../locales/en";
import ar from "../../../../locales/ar";
import ContentCard from "../../../components/our-brands/ContentCard";
import VerticalCarousel from "@/components/VerticalCarousel";
import PageCover from "@/components/PageCover";
import PlaceCard from "@/components/PlaceCard";
import IconTileSection from "../../../components/mini-components/IconTileSection.jsx";
import ImgListSection from "../../../components/mini-components/ImgListSection.jsx";
export default function index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  console.log(t.general.reviews);
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

      <IconTileSection></IconTileSection>
      <ImgListSection></ImgListSection>

      <VerticalCarousel
        itemsArray={t.general.places}
        Component={PlaceCard}
        slidesPerView={5.3}
      ></VerticalCarousel>
    </Box>
  );
}
