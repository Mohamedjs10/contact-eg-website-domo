import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { colors } from "../../utils/const";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";

const steps = ["", "", ""];

export default function HorizontalNonLinearStepper() {
  const router = useRouter();
  const { locale } = router;

  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const extractContent = (idx) => {
    if (idx === 0) {
      return (
        <Box
          sx={{
            display: "flex",
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
            width: "75%",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            <Typography variant="subtitle2" sx={{ mt: 2, py: 1 }}>
              ميزة {activeStep + 1}
            </Typography>
            <Typography variant="h4">موافقة فورية</Typography>
            <Typography variant="subtitle1">
              وصف كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي, وصف
              كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي, وصف
              كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي, وصف
              كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              mt: {
                xs: 5,
                md: "-70px",
              },

              width: {
                xs: "200px",
                sm: "300px",
                md: "400px",
              },
            }}
            src="/images/steps-image.png"
            alt="home-line"
          />
        </Box>
      );
    } else if (idx === 1) {
      return (
        <Box
          sx={{
            display: "flex",
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
            width: "75%",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            <Typography variant="subtitle2" sx={{ mt: 2, py: 1 }}>
              ميزة {activeStep + 1}
            </Typography>
            <Typography variant="h4">زيادة الحد</Typography>
            <Typography variant="subtitle1">
              وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
              ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ...
              بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ... وعند
              موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم
              ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع
              النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من
              الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد
              فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب
              اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب "حول أقاصي
              الخير والشر"
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              mt: {
                xs: 5,
                md: "-70px",
              },
              width: {
                xs: "200px",
                sm: "300px",
                md: "400px",
              },
            }}
            src="/images/steps-image.png"
            alt="home-line"
          />
        </Box>
      );
    } else if (idx === 2) {
      return (
        <Box
          sx={{
            display: "flex",
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
            width: "75%",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            <Typography variant="subtitle2" sx={{ mt: 2, py: 1 }}>
              ميزة {activeStep + 1}
            </Typography>
            <Typography variant="h4">المرافق و دفع الفواتير </Typography>
            <Typography variant="subtitle1">
              وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
              ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ...
              بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ... وعند
              موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم
              ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع
              النصوص التجريبية بالتصميم قد تشغل المشاهد{" "}
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              mt: {
                xs: 5,
                md: "-70px",
              },
              width: {
                xs: "200px",
                sm: "300px",
                md: "400px",
              },
            }}
            src="/images/steps-image.png"
            alt="home-line"
          />
        </Box>
      );
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.blue,
        position: "relative",
        height: {
          xs: "869px",
          md: "869px",
        },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
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
          sx={{ display: "block" }}
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
      />
    </Box>
  );
}
