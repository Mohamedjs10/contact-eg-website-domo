import React, { useState } from "react";
import { TextField, Box, InputLabel } from "@mui/material";
import { colors } from "../../utils/const";

export default function Calcuation() {
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (e.target.value === "" || re.test(e.target.value)) {
      setVal(e.target.value);
    } else {
    }
  };
  return (
    <Box className="calcuation-box p-3" sx={{ bgcolor: "#f8f8f8" }}>
      <InputLabel htmlFor="car-price" sx={{ fontSize: 20, fontWeight: "800" }}>
        سعر السيارة
      </InputLabel>
      <TextField
        value={val}
        onChange={handleChange}
        hiddenLabel
        id="car-price"
        size="small"
      />
      <Box></Box>
    </Box>
  );
}
