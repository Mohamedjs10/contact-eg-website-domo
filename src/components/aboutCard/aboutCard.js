import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../utils/const";

export default function Card({ icon, heading, textArr }) {
  return (
    <Box sx={{ flex: "1 1 0", p: 4, textAlign: "center" }}>
      <img width="32px" src={icon} alt={heading} />
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
          variant="subtitle1"
          sx={{ color: colors.blue }}
          gutterBottom
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}
