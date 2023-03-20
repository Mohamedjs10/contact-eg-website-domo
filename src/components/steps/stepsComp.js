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

  const contentGen = ({ title, heading, text, img }) => (
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
        zIndex: 999999,
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
          {title}
        </Typography>
        <Typography sx={{ mb: 3 }} variant="h4">
          {heading}{" "}
        </Typography>
        <Typography variant="subtitle1">{text}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            marginTop: "15%",
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
            />
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
            />
          </Box>
          <Box
            sx={{
              mx: {
                md: "inherit",
                xs: "auto",
              },
            }}
          >
            <Box component="img" src="/images/qr-code.png" />
          </Box>
        </Box>
      </Box>
      <Box
        component="img"
        sx={{
          margin: {
            md: "inherit",
            xs: "auto",
          },
          width: {
            xs: "200px",
            sm: "300px",
            md: "300px",
            xl: "400px",
          },
        }}
        src={img}
        alt="home-line"
      />
    </Box>
  );

  const extractContent = (idx) => {
    if (idx === 0) {
      return contentGen({
        title: "ميزة",
        heading: "موافقة فورية",
        text: "  وصف كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي, وصف  كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي, وصفكتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي كتيير جدا جدا جدا بس مكسل اسيرش علي لوريم ابسيوم بالعربي",
        img: "/images/steps-image.png",
      });
    } else if (idx === 1) {
      return contentGen({
        title: "ميزة",
        heading: "زيادة الحد",
        text: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام  فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.",
        img: "/images/steps-image.png",
      });
    } else if (idx === 2) {
      return contentGen({
        title: "ميزة",
        heading: "المرافق و دفع الفواتير ",
        text: "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة، يقوم مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا تينية، مضاف إليها مجموعة من الجمل النموذجية، لتكوين نص لوريم إيبسوم ذو شكل منطقي قريب إلى النص الحقيقي. وبالتالي يكون النص الناتح خالي من التكرار، أو أي كلمات أو عبارات غير لائقة أو ما شابه. وهذا ما يجعله أول مولّد نص لوريم إيبسوم حقيقي على الإنترنت.",
        img: "/images/steps-image.png",
      });
    }
  };

  return (
    <Box
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
      />
    </Box>
  );
}
