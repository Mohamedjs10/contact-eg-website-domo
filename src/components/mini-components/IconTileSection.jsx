import { styles } from "./icon_title_section";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
export default function Text({ title, img }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box
      sx={styles.sectionContainer}
      className="horizontal-safe-padding vertical-safe-padding"
    >
      {t.general.icon_title.map((item) => (
        <Box sx={styles.container}>
          <Box sx={styles.imgContainer}>
            <img src={item.img} style={{ margin: "15px" }} width="30px" />
          </Box>
          <Box sx={styles.title}>{item.title}</Box>
        </Box>
      ))}
    </Box>
  );
}
