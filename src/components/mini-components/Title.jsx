import { styles } from "./title";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Text({ title, lineWidth }) {
  const router = useRouter();
  const { locale } = router;
  return (
    <Box
      sx={styles.container}
      // data-aos={locale == "en" ? "fade-right" : "fade-left"}
      data-aos="fade-up"
    >
      <Box sx={styles.title}>{title}</Box>
      <img
        src="line.png"
        loading="lazy"
        style={{
          width: lineWidth,
          height: "8px",
        }}
      ></img>
    </Box>
  );
}
