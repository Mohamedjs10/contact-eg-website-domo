import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import { colors } from "../utils/const";
import { styles } from "./footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Secondary_Navbar({ setIsOPen }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(true);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  // let leftOrRight = locale === "en" ? { right: "0px" } : { left: "0px" };
  let margin = locale === "en" ? "ml" : "mr";
  return (
    <Box
      // className="horizontal-safe-padding vertical-safe-padding mt-5"
      className="horizontal-safe-padding vertical-safe-padding"
      sx={{ bgcolor: colors.bg_grey, border: `1px solid ${colors.dark_grey}` }}
    >
      {/* section A ------------------------------------------------------------------------------------ */}
      <Box sx={{ pb: 6 }}>
        <Box sx={styles.a_container}>
          <Box sx={{ textAlign: { xs: "center", sm: "initial" } }}>
            <Box sx={{ color: colors.black, fontWeight: "bold", pb: 1 }}>
              {t.footer.section_a.subscribe_now}
            </Box>
            <Box sx={{ color: "#667085", fontWeight: "bold" }}>
              {t.footer.section_a.in_email_service}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: { xs: "center", sm: "space-between", gap: 15 },
            }}
          >
            <Box>
              <TextField
                placeholder={t.footer.section_a.enter_email}
                inputProps={{
                  sx: {
                    fontSize: 13,
                    fontWeight: "bold",
                    lineHeight: "2",
                  },
                }}
                sx={styles.input}
                // defaultValue={""}
                value={email}
                onBlur={(e) => {
                  if (!isValidEmail(e.target.value)) {
                    locale === "en"
                      ? setError("email is invalid")
                      : setError("برجاء ادخال بريد الكتروني صحيح");
                  } else {
                    setError(null);
                  }
                }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                hiddenLabel
                id="car-price"
                size="small"
              />
              {error && (
                <Box sx={{ color: "red", fontSize: "15px", m: 1 }}>{error}</Box>
              )}
            </Box>

            <Button
              variant="outlined"
              type="email"
              disabled={disabled}
              sx={styles.btn}
              onClick={() => {
                if (!error) {
                  setDisabled(true);
                  axios
                    .post(
                      "https://api-mobile.contact.eg/subscriptions/subscribe",
                      {
                        email,
                      }
                    )
                    .then((res) => {
                      setDisabled(false);
                      setEmail("");
                      setError(true);
                      toast.success(t.subscribeMsg, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      });
                    })
                    .catch((err) => {
                      toast.error(t.subscribeFailMsg, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      });
                    });
                }
              }}
            >
              {t.footer.section_a.button}
            </Button>
          </Box>
        </Box>
      </Box>
      {/* section B ------------------------------------------------------------------------------------ */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          borderTop: `1px solid ${colors.dark_grey}`,
        }}
        className="section-safe-padding-top"
      >
        <Box sx={styles.container}>
          {/* 1---------- */}
          <Box sx={styles.sub_container}>
            <Box sx={styles.title} data-aos="fade-up">
              {t.footer.section_b.financial_services}
            </Box>
            {t.footer.section_b.financial_services_list1.map((item, index) => (
              <Box
                data-aos="fade-up"
                component={Link}
                href={item.url}
                sx={styles.link}
                key={index}
              >
                {item.name}
              </Box>
            ))}
          </Box>
          {/* 2---------- */}
          <Box sx={styles.sub_container}>
            <Box sx={styles.title} data-aos="fade-up">
              {t.footer.section_b.financial_services}
            </Box>
            {t.footer.section_b.financial_services_list2.map((item, index) => (
              <Box
                data-aos="fade-up"
                component={Link}
                href={item.url}
                sx={styles.link}
                key={index}
              >
                {item.name}
              </Box>
            ))}
          </Box>
          {/* 3---------- */}
          <Box sx={styles.sub_container}>
            <Box sx={styles.title} data-aos="fade-up">
              {t.footer.section_b.other_services}
            </Box>
            {t.footer.section_b.other_services_list.map((item, index) => (
              <Box
                data-aos="fade-up"
                component={Link}
                href={item.url}
                sx={styles.link}
                key={index}
              >
                {item.name}
              </Box>
            ))}
          </Box>
          {/* 4---------- */}
          <Box sx={styles.sub_container}>
            <Box sx={styles.title} data-aos="fade-up">
              {t.footer.section_b.contact}
            </Box>
            {t.footer.section_b.contact_list.map((item, index) => (
              <Box
                data-aos="fade-up"
                component={Link}
                href={item.url}
                sx={styles.link}
                key={index}
              >
                {item.name}
              </Box>
            ))}
          </Box>
          {/* 5---------- */}
          <Box sx={styles.sub_container}>
            <Box sx={styles.title} data-aos="fade-up">
              {t.footer.section_b.company}
            </Box>
            {t.footer.section_b.company_list.map((item, index) => (
              <Box
                data-aos="fade-up"
                component={Link}
                href={item.url}
                sx={styles.link}
                key={index}
              >
                {item.name}
              </Box>
            ))}
          </Box>
          {/* 6---------- */}
          <Box sx={styles.sub_container}>
            <Box sx={styles.title} data-aos="fade-up">
              {t.footer.section_b.policy}
            </Box>
            {t.footer.section_b.policy_list.map((item, index) => (
              <Box
                data-aos="fade-up"
                component={Link}
                href={item.url}
                sx={styles.link}
                key={index}
              >
                {item.name}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* section B - Mobile ------------------------------------------------------------------------------------ */}

      <Box sx={{ display: { md: "none" } }}>
        <Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>
                {t.footer.section_b.financial_services}
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              {t.footer.section_b.financial_services_list1.map(
                (item, index) => (
                  <Box
                    component={Link}
                    href={item.url}
                    sx={styles.link}
                    key={index}
                  >
                    {item.name}
                  </Box>
                )
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>
                {t.footer.section_b.financial_services}
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              {t.footer.section_b.financial_services_list2.map(
                (item, index) => (
                  <Box
                    component={Link}
                    href={item.url}
                    sx={styles.link}
                    key={index}
                  >
                    {item.name}
                  </Box>
                )
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>
                {t.footer.section_b.other_services}
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              {t.footer.section_b.other_services_list.map((item, index) => (
                <Box
                  component={Link}
                  href={item.url}
                  sx={styles.link}
                  key={index}
                >
                  {item.name}
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>
                {t.footer.section_b.contact}
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              {t.footer.section_b.contact_list.map((item, index) => (
                <Box
                  component={Link}
                  href={item.url}
                  sx={styles.link}
                  key={index}
                >
                  {item.name}
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>
                {t.footer.section_b.company}
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              {t.footer.section_b.company_list.map((item, index) => (
                <Box
                  component={Link}
                  href={item.url}
                  sx={styles.link}
                  key={index}
                >
                  {item.name}
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={styles.accrodion_title}>{t.footer.section_b.policy}</Box>
            </AccordionSummary>
            <AccordionDetails sx={styles.sub_container}>
              {t.footer.section_b.policy_list.map((item, index) => (
                <Box
                  component={Link}
                  href={item.url}
                  sx={styles.link}
                  key={index}
                >
                  {item.name}
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

      {/* section C ------------------------------------------------------------------------------------ */}
      <Box sx={styles.app_section} className="section-safe-padding-top">
        <Box sx={styles.app_container}>
          {/* {t.footer.section_c.download_app} */}
          <Box sx={styles.app_icons}>
            <a
              href="https://play.google.com/store/apps/details?id=eg.contact"
              target="_blank"
            >
              <img src={t.footer.section_c.img1} width="140px" height="45px" />
            </a>
            <a
              href="https://apps.apple.com/us/app/contactnow-%D9%83%D9%88%D9%86%D8%AA%D9%83%D8%AA/id1544159088"
              target="_blank"
            >
              <img src={t.footer.section_c.img2} width="140px" height="45px" />
            </a>
            <a
              href="https://appgallery.huawei.com/app/C108100655"
              target="_blank"
            >
              <img src={t.footer.section_c.img3} width="140px" height="45px" />
            </a>
          </Box>
        </Box>
      </Box>
      {/* section D ------------------------------------------------------------------------------------ */}
      <img
        src="/footer-line.png"
        width="100%"
        className="section-safe-margin-top"
      />
      {/* section D ------------------------------------------------------------------------------------ */}
      <Box className="section-safe-padding-top " sx={styles.copyright_section}>
        <Box
          sx={{ width: "280px", textAlign: { xs: "center", md: "initial" } }}
        >
          <img src={t.logo} width="120px"></img>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            // width: "240px",
          }}
        >
          <Box
            component="a"
            href="https://www.linkedin.com/company/contact-eg/"
            target="_blank"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="/l.svg" />
          </Box>
          <Box
            component="a"
            href="https://twitter.com/home"
            target="_blank"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="/t.svg" />
          </Box>
          <Box
            component="a"
            href="https://m.youtube.com/channel/UCJKMN9HwnY2V9aWtqG-OhKQ"
            target="_blank"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="/y.svg" />
          </Box>
          <Box
            component="a"
            href="https://www.instagram.com/contact.eg/"
            target="_blank"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="/i.svg" />
          </Box>
          <Box
            component="a"
            href="https://www.facebook.com/ContactEg"
            target="_blank"
            sx={{
              transition: ".5s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img src="/f.svg" />
          </Box>
        </Box>
        <Box
          sx={{
            color: "#98A2B3",
            gap: { xs: 1, md: 0 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            textAlign: "center",
          }}
        >
          {t.footer.section_d.copy_right}
          <img src="/award.svg" width="100px" />
        </Box>
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={locale === "en" ? false : true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
}
