import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { colors } from "../../utils/const";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
export default function Rewards() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const cardGeneration = () => {
    return (
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h6"
          sx={{
            color: colors.blue,
            fontWeight: "600",
            textAlign: locale === "en" ? "left" : "right",
            mb: 1,
          }}
        >
          كونتكت تسوق
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: locale === "en" ? "left" : "right",
            mb: 3,
            width: {
              md: "40%",
              xs: "100%",
            },
          }}
        >
          تمنح نقاط لكل “جنيه مصري” في المشتريات، وذلك طبقاً لقيمة المعاملة
          الشرائية الجارية بواسطة الحساب ويتم تقريبها لأقرب نقطة
        </Typography>
        <Box
          sx={{
            border: "1px solid black",
            borderRight: locale === "en" ? "1px solid black" : "none",
            borderLeft: locale === "ar" ? "1px solid black" : "none",
          }}
        >
          <Box sx={{ display: "flex", borderBottom: "1px solid black", p: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "1.1rem",
                fontWeight: "600",
                width: "40%",
                textAlign: locale === "en" ? "left" : "right",
              }}
            >
              نوع المعاملة
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "600", fontSize: "1.1rem", mx: 2 }}
            >
              عدد النقاط
            </Typography>
          </Box>
          <Box sx={{ display: "flex", borderBottom: "1px solid black", p: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{
                width: "40%",
                textAlign: locale === "en" ? "left" : "right",
              }}
            >
              المشتريات
            </Typography>
            <Typography variant="subtitle2" sx={{ mx: 2 }}>
              1 نقطة لكل 1 جم
            </Typography>
          </Box>
          <Box sx={{ display: "flex", p: 2, borderBottom: "1px solid black" }}>
            <Box
              sx={{
                width: "40%",
                textAlign: locale === "en" ? "left" : "right",
              }}
            >
              <Typography variant="subtitle2">
                أول معاملة شرائية خلال أول شهرين من الاشتراك او أول شهرين من
                اطلاق البرنامج
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "300" }}>
                *بحد ادنى 10000 الاف جنيه مصرى
              </Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ mx: 2 }}>
              3,000 نقطة
            </Typography>
          </Box>
          <Box sx={{ display: "flex", p: 2 }}>
            <Box
              sx={{
                width: "40%",
                textAlign: locale === "en" ? "left" : "right",
              }}
            >
              <Typography variant="subtitle2">
                خامس معاملة شرائية بعد الإشتراك (ليست مربوطة بمدة محددة)
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "300" }}>
                *بحد ادنى 10000 الاف جنيه مصرى
              </Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ mx: 2 }}>
              2,000 نقطة
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <Box
      sx={{ flex: "1 1 0", p: 4, textAlign: "center" }}
      className="horizontal-safe-padding"
    >
      <Typography
        variant="h4"
        sx={{ color: colors.blue, fontWeight: "700", mb: 5 }}
      >
        كيفية احتساب النقاط
      </Typography>
      {cardGeneration()}
      {cardGeneration()}
      {cardGeneration()}
      {cardGeneration()}
      {cardGeneration()}
      <Box sx={{ display: "flex" }}>
        <Typography variant="h5" sx={{ color: colors.orange }}>
          {t.rewards.note}
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: "1rem", mt: 1, mx: 1, color: colors.blue }}
        >
          {t.rewards.noteText}
        </Typography>
      </Box>
    </Box>
  );
}
