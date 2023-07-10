import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../utils/const";
import { PropaneSharp } from "@mui/icons-material";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";

export default function Card({ icon, heading, textArr, key, type }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <Box
      key={key}
      sx={{
        flex: "1 1 0",
        p: 4,
        // textAlign: PropaneSharp.type === "about" ? "center" : t.textAlign,
        textAlign: "center",
      }}
    >
      {type === "about" && <img width="32px" src={icon} alt={heading} />}
      <Typography
        sx={{ color: colors.orange, mt: 2 }}
        variant="h5"
        gutterBottom
      >
        {heading}
      </Typography>
      {textArr?.map((item, idx) => (
        <Typography
          key={idx}
          variant="subtitle2"
          sx={{
            margin: "auto",
            mt: 1,
            fontWeight: "bold",
            color: colors.blue,
            width: {
              xs: "100%",
              md: "75%",
            },
          }}
          gutterBottom
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}
