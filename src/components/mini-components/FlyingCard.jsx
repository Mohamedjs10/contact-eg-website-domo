import { styles } from "./flying_card";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";

export default function FlyingCard({ setRight, right }) {
  return (
    <>
      <Box
        className="horizontal-safe-margin"
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "5px",
          bgcolor: colors.white,
          transition: "1s",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        style={{
          position: "absolute",
          top: "55px",
          right: right,
          width: right == -500 ? 0 : "250px",
          height: "250px",
          overflow: "hidden",
        }}
      >
        <img src="/line.png" alt="Picture of the author" width="100%" />
        <Box
          sx={{
            p: 2,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            component={Link}
            href="/"
            onClick={() => {
              setRight((prev) => (prev == 0 ? -500 : 0));
            }}
            sx={styles.tab}
            style={{}}
          >
            نبذة عن
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/"
            onClick={() => {
              setRight((prev) => (prev == 0 ? -500 : 0));
            }}
            sx={styles.tab}
            style={{}}
          >
            ميديا
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/"
            onClick={() => {
              setRight((prev) => (prev == 0 ? -500 : 0));
            }}
            sx={styles.tab}
            style={{}}
          >
            وظائف
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/"
            onClick={() => {
              setRight((prev) => (prev == 0 ? -500 : 0));
            }}
            sx={styles.tab}
            style={{}}
          >
            شركاتنا
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/"
            onClick={() => {
              setRight((prev) => (prev == 0 ? -500 : 0));
            }}
            sx={styles.tab}
            style={{}}
          >
            اتصل بنا
          </Box>
          <Box sx={styles.line}></Box>
        </Box>
      </Box>
    </>
  );
}
