import Carousel from "react-bootstrap/Carousel";
import { styles } from "./cover";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { colors } from "../utils/const";
import { slides } from "../utils/data";
export default function Cover() {
  return (
    <Carousel controls={false} fade={true} interval={null}>
      {slides.map((item, index) => (
        <Carousel.Item key={index}>
          <Box
            sx={{
              color: "white",
              bgcolor: item.bgColor,
              height: { xs: "200px", sm: "300px", md: "400px", lg: "500px" },

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
              position: "relative",
            }}
            // className="d-block w-100"
          >
            <Box
              sx={{
                height: "100%",
              }}
            >
              <img src={item.img} height="100%" />
            </Box>
            <Box
              sx={{
                width: { xs: "200px", sm: "300px", md: "400px", lg: "500px" },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  mt: "30px",

                  mb: { xs: 1, sm: 3, md: 4, lg: 5 },
                  fontSize: { xs: "15px", sm: "30px", md: "40px", lg: "50px" },
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Box>
              <Box
                sx={{
                  mb: 2,
                  fontSize: { xs: "10px", sm: "15px", md: "20px", lg: "25px" },
                  display: { xs: "none", sm: "block" },
                }}
              >
                {item.description}
              </Box>
              <Button variant="outlined" sx={styles.btn}>
                طلب الخدمة
              </Button>
            </Box>
            <Box
              sx={{
                ml: { xs: "10px", sm: "30px", md: "60px", lg: "90px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 3,
              }}
            >
              <Box
                sx={{
                  borderLeft: `2px solid ${colors.white}`,
                  height: "170px",
                }}
              />
              <a href="https://www.facebook.com" target="_blank">
                <Box component="img" src="facebook.png" sx={styles.icon} />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <Box component="img" src="instagram.png" sx={styles.icon} />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <Box component="img" src="linked-in.png" sx={styles.icon} />
              </a>
              <Box
                sx={{
                  borderLeft: `2px solid ${colors.white}`,
                  height: "170px",
                }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "100px", sm: "200px", md: "300px", lg: "400px" },
                position: "absolute",
                top: "-10px",
                left: "0px",
                opacity: ".2",
                zIndex: 2,
              }}
            >
              <img src="decorator.png" width="100%" />
            </Box>
          </Box>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
