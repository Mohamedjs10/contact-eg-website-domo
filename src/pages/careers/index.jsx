import React from "react";
import Image from "next/image";
import { styles } from "./styles";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import ContentCard from "../../components/our-brands/ContentCard";
export default function index() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box sx={{}} className="horizontal-safe-margin">
      <Box
        sx={{
          color: colors.orange,
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        وظائف
      </Box>
      <Box sx={{ maxWidth: "600px", color: colors.blue }}>
        مع التوسعات التي تقوم بها الشركة، نتطلع دائماً لإضافة المزيد من القيادات
        البراقة لفريق العمل الذي يضم أكثر من 1300 موظفاُ. والشركة تتمتع بمعدل
        دوران منخفض جداً للعمالة مع استمرار العديد من مديريها في العمل منذ
        نشأتها. نحن نؤمن بأهمية تنمية وتطوير رأس المال البشري من أجل تحقيق نمونا
        المنشود كأفراد وكفريق عمل وكمؤسسة. إن كنت ترغب في الانضمام إلينا يرجى
        ملء النموذج
      </Box>

      <Box sx={{ mx: "30px" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component="span"
            sx={{
              bgcolor: "#DFE0ED",
              color: colors.blue,
              "&:hover": { bgcolor: "#DFE0ED" },
            }}
          >
            الكل
          </Button>
          <Button
            component="span"
            sx={{
              bgcolor: "#DFE0ED",
              color: colors.blue,
              "&:hover": { bgcolor: "#DFE0ED" },
            }}
          >
            الكل
          </Button>
        </Box>
        <Box sx={{ width: "100%", bgcolor: "red" }}>xxxxxxxxxxxxxxx</Box>
      </Box>
    </Box>
  );
}
