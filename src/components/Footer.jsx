import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../utils/const";
import { styles } from "./footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function Secondary_Navbar({ setIsOPen }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  // let leftOrRight = locale === "en" ? { right: "0px" } : { left: "0px" };
  let margin = locale === "en" ? "ml" : "mr";
  return (
    <Box className="horizontal-safe-margin">
      {/* section A ------------------------------------------------------------------------------------ */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box sx={styles.container}>
          <img src="/logo.png" width="120px"></img>
          <Box sx={styles.sub_container}>
            <Box>خدمات تمويلية</Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل السيارات
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل النقل
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل تسويق
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل التعليم
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل اشتراكات الاندية
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل تصميم وتشطيب
            </Box>
          </Box>
          <Box sx={styles.sub_container}>
            <Box>خدمات تمويلية</Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل أفراح و مناسبات
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل عقاري
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              وساطة تأمينية
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تخصيم
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تأجير تمويلي
            </Box>
          </Box>
          <Box sx={styles.sub_container}>
            <Box>خدمات تمويلية</Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل السيارات
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل النقل
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل تسويق
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل التعليم
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل اشتراكات الاندية
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل تصميم وتشطيب
            </Box>
          </Box>{" "}
          <Box sx={styles.sub_container}>
            <Box>خدمات تمويلية</Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل السيارات
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل النقل
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل تسويق
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل التعليم
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل اشتراكات الاندية
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل تصميم وتشطيب
            </Box>
          </Box>{" "}
          <Box sx={styles.sub_container}>
            <Box>خدمات تمويلية</Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل السيارات
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل النقل
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل تسويق
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل التعليم
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل اشتراكات الاندية
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل تصميم وتشطيب
            </Box>
          </Box>{" "}
          <Box sx={styles.sub_container}>
            <Box>خدمات تمويلية</Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل السيارات
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل النقل
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل تسويق
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل التعليم
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل اشتراكات الاندية
            </Box>
            <Box component={Link} href="/" sx={styles.link}>
              تمويل تصميم وتشطيب
            </Box>
          </Box>
        </Box>
      </Box>
      {/* section A - Mobile ------------------------------------------------------------------------------------ */}

      <Box sx={{ display: { md: "none" } }}>
        <Box>
          <img
            src="/logo.png"
            width="120px"
            style={{ paddingBottom: "20px" }}
          ></img>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>خدمات تمويلية</Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل السيارات
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل النقل
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل تسويق
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل التعليم
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل اشتراكات الاندية
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل تصميم وتشطيب
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل أفراح و مناسبات
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل عقاري
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                وساطة تأمينية
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تخصيم
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تأجير تمويلي
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>خدمات تمويلية</Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل السيارات
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل النقل
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل تسويق
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل التعليم
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>خدمات تمويلية</Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل السيارات
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل النقل
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل تسويق
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل التعليم
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>خدمات تمويلية</Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل السيارات
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل النقل
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل تسويق
              </Box>
              <Box component={Link} href="/" sx={styles.link}>
                تمويل التعليم
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

      {/* section B ------------------------------------------------------------------------------------ */}
      <Box sx={styles.app_section} className="section-safe-margin-top">
        <Box sx={styles.app_container}>
          حمل تطبيق كونتكت
          <Box sx={styles.app_icons}>
            <img src="google-play.png" />
            <img src="app-store.png" />
          </Box>
        </Box>
      </Box>
      {/* section C ------------------------------------------------------------------------------------ */}
      <img
        src="footer-line.png"
        width="100%"
        className="section-safe-margin-top"
      />
      {/* section D ------------------------------------------------------------------------------------ */}
      <Box
        className="section-safe-margin-top section-safe-margin-bottom"
        sx={styles.copyright_section}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            component="a"
            href="/"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="l.png" />
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="t.png" />
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="y.png" />
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="i.png" />
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="f.png" />
          </Box>
        </Box>
        <Box
          sx={{
            [margin]: { xs: 0, md: "auto" },
            gap: { xs: 1, md: 0 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            textAlign: "center",
          }}
        >
          جميع الحقوق محفوظة 2021 لكونتكت
          <img src="award.png" />
        </Box>
      </Box>
    </Box>
  );
}
