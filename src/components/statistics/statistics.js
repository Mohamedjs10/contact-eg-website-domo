import React from "react";
import { Box, Typography } from "@mui/material";

import { colors } from "../../utils/const";
import CountUp from "react-countup";

export default function Statistics({ num, suffix, text }) {
  return (
    <Box sx={{ p: 5, textAlign: "center", flex: "1 1 0" }}>
      <Typography sx={{ color: colors.orange }} variant="h3" gutterBottom>
        <CountUp suffix={` ${suffix} `} start={0} end={num} duration={4} />
      </Typography>
      <Typography variant="subtitle2" sx={{ color: colors.blue }} gutterBottom>
        {text}
      </Typography>
    </Box>
  );
}
