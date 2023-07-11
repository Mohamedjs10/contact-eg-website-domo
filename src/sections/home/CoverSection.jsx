import Carousel from "react-bootstrap/Carousel";
import { styles } from "./cover_section";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
export default function Cover() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let leftOrRight = locale === "en" ? { right: "0px" } : { left: "0px" };
  let margin = locale === "en" ? "mr" : "ml";

  return (
    <Carousel controls={false} fade={true} interval={null}>
      {t.home_page.slides.map((item, index) => (
        <Carousel.Item key={index}>
          <Box
            sx={{
              color: "white",
              // bgcolor: item.bgColor,
              background: `url(${item.bgImage})`,
              backgroundSize: "cover",
              height: { xs: "200px", sm: "350px", md: "450px", lg: "500px" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-around",
              alignItems: "center",
              gap: 6,
              position: "relative",
              py: { xs: 35, sm: 20 },
            }}
            // className="d-block w-100"
          >
            <Box
              sx={{
                order: { xs: 2, sm: 1 },

                width: { xs: "150px", sm: "150px", md: "200px", lg: "300px" },
                // height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                // justifyContent: "space-around",
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Box
                sx={{
                  // height: "100%",
                  // width: "400px",
                  height: { xs: "40px", sm: "60px", md: "100px" },
                  // width: { xs: "200px", sm: "300px", md: "400px" },
                  // transform: locale === "en" ? "scaleX(-1)" : "scaleX(1)",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <img src={item.logo} height="100%" loading="lazy" />
              </Box>
              <Box
                sx={{
                  // width: { xs: "150px", sm: "200px", md: "300px", lg: "400px" },
                  mb: { xs: 1 },
                  fontSize: { xs: "15px", sm: "15px", md: "20px", lg: "25px" },
                  // display: { xs: "none", md: "block" },
                  textAlign: { xs: "center", sm: "initial" },
                  color: {
                    xs: index == 2 ? colors.white : item.textColor,
                    sm: item.textColor,
                  },
                }}
              >
                {item.text}
              </Box>
              <Link
                href={item.link}
                sx={{ "&:hover": { color: colors.white } }}
              >
                <Button
                  href={item.link}
                  variant="outlined"
                  sx={styles.btn}
                  // sx={{ "&:hover": { color: colors.white } }}
                >
                  {item.button}
                </Button>
              </Link>
            </Box>
            <Box
              sx={{
                height: { xs: "200px", sm: "300px", md: "400px" },
                order: { xs: 1, sm: 2 },
              }}
            >
              <img src={item.img} height="100%" loading="lazy" />
            </Box>
          </Box>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
