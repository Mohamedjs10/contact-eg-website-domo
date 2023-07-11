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
import Popover from "@mui/material/Popover";
import FlyingCard from "@/components/mini-components/FlyingCard";

import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function Secondary_Navbar({
  setIsOPenA,
  setIsOPenB,
  setIsOPenC,
  setType,
  arrDirA,
  arrDirB,
  arrDirC,
  setArrDirA,
  setArrDirB,
  setArrDirC,
}) {
  const [state, setState] = useState(false);

  const secTab = useSelector((state) => state.secTab.secTab);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const dispatch = useDispatch();
  // const [arrDirA, setArrDirA] = useState("down");
  // const [arrDirB, setArrDirB] = useState("down");
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <>
      {/* Desktop */}
      {/* popover */}
      <Popover
        sx={{ mt: 1, zIndex: 100000000000000000000 }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
          setArrDirC((prev) => (prev == "up" ? "down" : "up"));
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: locale === "en" ? "left" : "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: locale === "en" ? "left" : "right",
        }}
      >
        <FlyingCard
          setState={setState}
          setAnchorEl={setAnchorEl}
          setArrDirC={setArrDirC}
          type="b"
        />
      </Popover>
      {/* popover */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box sx={styles.container} className="horizontal-safe-padding">
          <Link href="/">
            <Image
              src={t.logo}
              alt="Picture of the author"
              width={80}
              height={30}
              loading="lazy"
            />
          </Link>

          <Box
            onClick={() => {
              setArrDirA((prev) => (prev == "up" ? "down" : "up"));
              setIsOPenA((prev) => !prev);
              // reset the other
              setArrDirB("down");
              setIsOPenB(false);
              // --------------
              setType("a");
              dispatch(secTabActions.update("B-sec"));
            }}
            sx={{
              "&:hover": { cursor: "pointer" },
              "& svg": {
                transition: "1s",
                transform: `rotate(${arrDirA === "up" ? "-180deg" : "0deg"})`,
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
            {t.secondary_nav.financial_services}
            <KeyboardArrowDownIcon />
          </Box>
          <Box
            onClick={(event) => {
              setArrDirC((prev) => (prev == "up" ? "down" : "up"));
              // setIsOPenC((prev) => !prev);
              // reset the other
              setArrDirA("down");
              setIsOPenA(false);
              setArrDirB("down");
              setIsOPenB(false);
              // --------------
              // setType("a");
              // dispatch(secTabActions.update("B-sec"));

              setAnchorEl(event.currentTarget);
            }}
            sx={{
              "&:hover": { cursor: "pointer" },
              "& svg": {
                transition: "1s",
                transform: `rotate(${arrDirC === "up" ? "-180deg" : "0deg"})`,
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
            {t.secondary_nav.insurance_services}
            <KeyboardArrowDownIcon />
          </Box>
          <Box
            component={Link}
            href="/e-payment"
            onClick={() => {}}
            sx={styles.tab}
          >
            {t.secondary_nav.e_payments}
          </Box>
          <Box
            onClick={() => {
              setArrDirB((prev) => (prev == "up" ? "down" : "up"));
              setIsOPenB((prev) => !prev);
              // reset the other
              setArrDirA("down");
              setIsOPenA(false);
              // --------------
              setType("b");
              dispatch(secTabActions.update("B-sec"));
            }}
            sx={{
              "&:hover": { cursor: "pointer" },
              "& svg": {
                transition: "1s",
                transform: `rotate(${arrDirB === "up" ? "-180deg" : "0deg"})`,
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
            {t.secondary_nav.clients_program}
            <KeyboardArrowDownIcon />
          </Box>
          <Box
            component={Link}
            href="/investment"
            onClick={() => {}}
            sx={styles.tab}
          >
            {t.secondary_nav.investment_and_savings}
          </Box>
          <Box
            component={Link}
            href="/#our-branches"
            onClick={() => {}}
            sx={styles.tab}
          >
            {t.secondary_nav.branches_location}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mr: { xs: 0, md: locale === "en" ? 0 : "auto" },
              ml: { xs: 0, md: locale === "en" ? "auto" : 0 },
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
