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
            36 شهر
            {/* 36 months */}
          </Box>
          <Box sx={{ fontSize: "30px" }}>
            فترة سداد
            {/* payment period */}
          </Box>
        </Box>
        <Box sx={{ maxWidth: "1000px", m: "auto" }}>
          إشتري كل إحتياجاتك بدون عمليات معقدة فقط برقم البطاقة و برقم موبايلك,
          من خلال نظام كنتكت الإلكتروني للتس الشراء و التقسيط من أكثر من 1000
          منفذ بيع في جميع محافاظات الجمهورية. نظام التقسيط من كونتكت تسوق هو
          أفضل و أسرع طريقة لتمويل جميع مشترياتك من خلال شبكة ضخمة من المنافذ
          التجارية و معارض التجزئة و المتاجر الكبري و توكيلات الماركات العالمية.
          والذي يتيح لك حرية تحديد مبلغ الدفعة المقدمة و يقدم أنظمة التقسيط
          بفترات سداد تتراوح من 6 أشهر إلي 36 شهر.{" "}
        </Box>
      </Box>
      <IconTileSection></IconTileSection>
      <ImgListSection></ImgListSection>

      <VerticalCarousel
        itemsArray={t.general.places}
        Component={PlaceCard}
        slidesPerView={4.3}
      ></VerticalCarousel>
    </Box>
  );
}
