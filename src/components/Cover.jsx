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
        <Carousel.Item>
          <Box
            sx={{
              color: "white",
              bgcolor: item.bgColor,
              height: "500px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              position: "relative",
            }}
            // className="d-block w-100"
          >
            <Box>
              <img src={item.img} height="400px" />
            </Box>
            <Box sx={{ width: "500px" }}>
              <Box sx={{ mb: 5, fontSize: "50px", fontWeight: "bold" }}>
                {item.title}
              </Box>
              <Box sx={{ mb: 2 }}>{item.description}</Box>
              <Button variant="outlined" sx={styles.btn}>
                طلب الخدمة
              </Button>
            </Box>
            <Box
              sx={{
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
            <img
              width="400px"
              src="decorator.png"
              style={{
                position: "absolute",
                top: "-10px",
                left: "0px",
                opacity: ".3",
                zIndex: 2,
              }}
            />
          </Box>
        </Carousel.Item>
      ))}
      {/* <Carousel.Item>
        <Box
          sx={{
            color: "white",
            bgcolor: colors.blue,
            height: "500px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            position: "relative",
          }}
          // className="d-block w-100"
        >
          <Box>
            <img src="phone.png" height="400px" />
          </Box>
          <Box sx={{ width: "500px" }}>
            <Box sx={{ mb: 5, fontSize: "50px", fontWeight: "bold" }}>
              لسه منزلتش ال App !!
            </Box>
            <Box sx={{ mb: 2 }}>
              كونتكت هي أكبر شركة متخصصة في تمويل شراء السيارات في السوق المصري،
              وتحظى بتواجد مباشر في أكثر من 1000 معرض وتوكيل سيارات بمختلف أنحاء
              الجمهورية.
            </Box>
            <Button variant="outlined" sx={styles.btn}>
              طلب الخدمة
            </Button>
          </Box>
          <Box
            sx={{
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
              <img src="facebook.png" style={{ margin: 8 }} />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src="instagram.png" style={{ margin: 8 }} />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <img src="linked-in.png" style={{ margin: 8 }} />
            </a>
            <Box
              sx={{
                borderLeft: `2px solid ${colors.white}`,
                height: "170px",
              }}
            />
          </Box>
          <img
            width="400px"
            src="decorator.png"
            style={{
              position: "absolute",
              top: "-10px",
              left: "0px",
              opacity: ".3",
              zIndex: 2,
            }}
          />
        </Box>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="cover.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="cover.png"
          alt="Third slide"
          style={{ filter: "invert(20%)" }}
        />
      </Carousel.Item> */}
    </Carousel>
  );
}
