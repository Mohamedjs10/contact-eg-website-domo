import React, { useRef, useEffect, useLayoutEffect } from "react";
import { styles } from "./flying_card";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";

function useOutsideAlerter(ref, leftOrRightValue, setLeftOrRightValue) {
  useLayoutEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setLeftOrRightValue(-500);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function FlyingCard({
  setLeftOrRightValue,
  leftOrRightValue,
  children,
}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let leftOrRight = locale === "en" ? "left" : "right";
  // console.log(leftOrRightValue);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, leftOrRightValue, setLeftOrRightValue);

  return (
    <>
      <Box
        ref={wrapperRef}
        className="horizontal-safe-margin"
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "5px",
          bgcolor: colors.white,
          transition: "1s",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        style={{
          position: "absolute",
          top: "55px",
          [leftOrRight]: leftOrRightValue,
          width: leftOrRightValue == -500 ? 0 : "250px",
          height: "250px",
          overflow: "hidden",
        }}
      >
        <img src="/line.png" alt="Picture of the author" width="100%" />
        <Box
          sx={{
            p: 2,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            component={Link}
            href="/"
            onClick={() => {
              setLeftOrRightValue((prev) => (prev == 0 ? -500 : 0));
            }}
            sx={styles.tab}
            style={{}}
          >
            نبذة عن
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/"
            onClick={() => {
              setLeftOrRightValue((prev) => (prev == 0 ? -500 : 0));
            }}
            sx={styles.tab}
            style={{}}
          >
            ميديا
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/"
            onClick={() => {
              setLeftOrRightValue((prev) => (prev == 0 ? -500 : 0));
            }}
            sx={styles.tab}
            style={{}}
          >
            وظائف
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/"
            onClick={() => {
              setLeftOrRightValue((prev) => (prev == 0 ? -500 : 0));
            }}
            sx={styles.tab}
            style={{}}
          >
            شركاتنا
          </Box>
          <Box sx={styles.line}></Box>
          <Box
            component={Link}
            href="/"
            onClick={() => {
              setLeftOrRightValue((prev) => (prev == 0 ? -500 : 0));
            }}
            sx={styles.tab}
            style={{}}
          >
            اتصل بنا
          </Box>
          <Box sx={styles.line}></Box>
        </Box>
      </Box>
    </>
  );
}
