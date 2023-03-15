import React, { useState } from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colors } from "../utils/const";
import { styles } from "./secondary_navbar";
import { useSelector, useDispatch } from "react-redux";
import { secTabActions } from "../Redux/store";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Secondary_Navbar({ setIsOPen }) {
  const secTab = useSelector((state) => state.secTab.secTab);

  const dispatch = useDispatch();

  const [arrDir, setArrDir] = useState("down");
  return (
    <>
      {/* Desktop */}

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box sx={styles.container} className="horizontal-safe-padding">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Picture of the author"
              width={70}
              height={20}
            />
          </Link>

          <Box
            onClick={() => {
              setArrDir((prev) => (prev == "up" ? "down" : "up"));
              setIsOPen((prev) => !prev);
              dispatch(secTabActions.update("B-sec"));
            }}
            sx={{
              "&:hover": { cursor: "pointer" },
              "& svg": {
                transition: "1s",
                transform: `rotate(${arrDir === "up" ? "-180deg" : "0deg"})`,
              },
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: colors.navy_blue,
              fontSize: 15,
              textDecoration: "none",
              transition: "1s",
            }}
          >
            خدمات تمويلية
            <KeyboardArrowDownIcon />
          </Box>
          <Box component={Link} href="/" onClick={() => {}} sx={styles.tab}>
            خدمات تأمينية
          </Box>
          <Box component={Link} href="/" onClick={() => {}} sx={styles.tab}>
            مدفوعات الكترونية
          </Box>
          <Box component={Link} href="/" onClick={() => {}} sx={styles.tab}>
            استثمار وادخار
          </Box>
          <Box component={Link} href="/" onClick={() => {}} sx={styles.tab}>
            اماكن الفروع
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mr: { xs: 0, md: "auto" },
            }}
          >
            <Button variant="outlined" sx={styles.loginBtn}>
              تسجيل الدخول
            </Button>
            <Button variant="contained" sx={styles.downloadBtn}>
              حمل التطبيق
            </Button>
          </Box>
        </Box>
      </Box>
      {/* Mobile */}
      <Box
        sx={{ display: { xs: "block", md: "none" } }}
        className="horizontal-safe-padding vertical-safe-padding"
      >
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
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
