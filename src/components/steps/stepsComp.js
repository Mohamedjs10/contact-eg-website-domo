import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";
import { colors } from "../../utils/const";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";

const steps = ["", "", ""];

export default function HorizontalNonLinearStepper() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const contentGen = ({ title, heading, text, img, idx }) => (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "space-between",
        alignItems: {
          xs: "start",
        },
        color: "white",
        mx: {
          xs: 2,
          md: 5,
        },
        zIndex: 999999,
      }}
      id="instant-approval"
    >
      <Box
        // data-aos={locale == "en" ? "fade-right" : "fade-left"}
        data-aos="fade-up"
        data-aos-delay="100"
        sx={{
          width: {
            xs: "100%",
            lg: "90%",
            md: "80%",
            sm: "100%",
          },
        }}
      >
        {/* <Typography variant="subtitle2" sx={{ mt: 2, py: 1 }}>
          {title}
        </Typography> */}
        <Typography
          sx={{
            // mb: idx == 0 ? 27 : idx == 1 ? 15 : idx == 2 ? 6 : 0,
            mb: idx == 0 ? 30 : idx == 1 ? 18 : idx == 2 ? 8 : 0,
            mt: idx == 0 ? 0 : idx == 1 ? 12 : idx == 2 ? 22 : 0,
          }}
          variant="h4"
        >
          {heading}
        </Typography>
        {/* <Typography variant="subtitle1">{text}</Typography> */}
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
            flexDirection: "column",
            marginTop: "5%",
          }}
        >
          <Box
            sx={{
              mx: {
                md: "inherit",
                xs: "auto",
              },
              mb: 2,
            }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=eg.contact"
              target="_blank"
            >
              <Box
                component="img"
                sx={{
                  width: "140px",
                  cursor: "pointer",
                  mx: {
                    xs: 1,
                    md: 2,
                  },
                  mt: {
                    xs: 1,
                    md: 1,
                  },
                }}
                src="/images/home-google-play.png"
                alt="app-store"
                loading="lazy"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/contactnow-%D9%83%D9%88%D9%86%D8%AA%D9%83%D8%AA/id1544159088"
              target="_blank"
            >
              <Box
                component="img"
                sx={{
                  width: "140px",
                  mx: {
                    xs: 1,
                    md: 2,
                  },
                  mt: {
                    xs: 1,
                    md: 1,
                  },
                  cursor: "pointer",
                }}
                src="/images/home-app-store.png"
                alt="app-store"
                loading="lazy"
              />
            </a>
          </Box>

          <Box
            sx={{
              mx: {
                md: "inherit",
                xs: "auto",
              },
            }}
          >
            <Box
              component="img"
              sx={{
                width: "120px",
                display: {
                  lg: "block",
                  md: "none",
                  xs: "none",
                },
              }}
              src="/images/qr-code.png"
              loading="lazy"
            />
          </Box>
        </Box>
      </Box>
      <Box
        component="img"
        data-aos="fade-up"
        sx={{
          margin: {
            md: "inherit",
            xs: "auto",
          },
          width: {
            xs: "200px",
            sm: "250px",
            md: "275px",
            xl: "300px",
          },
        }}
        src={img}
        alt="home-line"
        loading="lazy"
      />
    </Box>
  );

  const extractContent = (idx) => {
    return contentGen({
      title: t.stepsFeature[idx].subTitle,
      heading: t.stepsFeature[idx].title,
      text: t.stepsFeature[idx].text,
      img: t.stepsFeature[idx].img,
      idx,
    });
  };

  return (
    <Box
      className="stepper-box"
      sx={{
        backgroundColor: colors.blue,
        position: "relative",
        py: 4,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          right: {
            xs: 0,
            md: locale === "en" ? 0 : "10%",
          },
          left: {
            xs: 0,
            md: locale === "en" ? "10%" : 0,
          },
          top: {
            xs: "5%",
            md: "20%",
          },
          width: "100%",
          display: "flex",
          px: 5,
          zIndex: 999,
        }}
      >
        <Stepper
          sx={{ display: "block", zIndex: 999999 }}
          nonLinear
          activeStep={activeStep}
          orientation="vertical"
        >
          {steps.map((label, index) => (
            <Step key={index}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>

        {extractContent(activeStep)}
      </Box>
      <Box
        component="img"
        sx={{
          transform: locale === "en" ? "scaleX(-1)" : "scaleX(1)",
          position: "absolute",
          top: 0,
          left: locale === "en" ? "" : 0,
          right: locale === "ar" ? "" : 0,
          height: "100%",
        }}
        src="/images/home-line.png"
        alt="home-line"
        loading="lazy"
      />
    </Box>
  );
}
