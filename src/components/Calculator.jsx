import React, { useState } from "react";
import {
  TextField,
  Box,
  InputLabel,
  Typography,
  Slider,
  Select,
  MenuItem,
} from "@mui/material";
import { colors } from "../utils/const";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { useRouter } from "next/router";

export default function Calcuation({ products_packages }) {
  const [productPrice, setProductPrice] = useState("");
  const [downPayment, setDownPayment] = useState(0);
  const [duration, setDuration] = useState();
  const [plan, setPlan] = useState();
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { locale } = router;
  const t = locale === "en" ? en : ar;

  const url = "https://api-mobile.contact.eg/products/general-loan-calculator";

  const checkInputs = (productPrice, duration, plan) => {
    if (productPrice && duration && plan) {
      setLoading(true);
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: +productPrice,
          downPayment: downPayment ? downPayment : 0,
          packageId: plan,
          tenors: duration * 12,
        }),
      })
        .then((res) => res.json())
        .then((value) => {
          setValue(value?.amount);
          setLoading(false);
        });
    } else {
      setValue(null);
    }
  };

  const handleProductPriceChange = (e) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setProductPrice(e.target.value);
      checkInputs(e.target.value, duration, plan);
    }
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleDownPaymentChange = (e) => {
    setDownPayment(e.target.value);
  };

  const handleDownPaymentChangeValue = (e) => {
    checkInputs(productPrice, duration, plan);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    checkInputs(productPrice, e.target.value, plan);
  };

  const handlePlanChange = (e) => {
    setPlan(e.target.value);
    checkInputs(productPrice, duration, e.target.value);
  };
  return (
    <Box
      className="horizontal-safe-padding vertical-safe-padding"
      sx={{
        bgcolor: colors.white,
      }}
    >
      <Box
        sx={{
          fontSize: "42px",
          color: colors.orange,
          mb: 5,

          // fontWeight: "bold",
        }}
      >
        {t.calcTitle}
      </Box>

      <Box
        sx={{
          bgcolor: colors.white,
          mb: 5,
          display: "flex",
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          data-aos="fade-up"
          // data-aos-delay="100"
          sx={{
            flex: "1 1 0",
            // mx: 5,
            px: 3,
            py: 3,
            bgcolor: "#f8f8f8",
          }}
        >
          <InputLabel
            htmlFor="car-price"
            sx={{ fontSize: 16, color: colors.blue, mb: 1, fontWeight: "800" }}
          >
            {t.calc.priceCar}
          </InputLabel>
          <TextField
            sx={{
              bgcolor: "white",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "lightgrey",
                },
                "&:hover fieldset": {
                  borderColor: "lightgrey",
                },
                "&.Mui-focused fieldset": {
                  borderColor: colors.blue,
                },
              },
            }}
            value={productPrice}
            onChange={handleProductPriceChange}
            hiddenLabel
            id="car-price"
            size="small"
          />
          <Box sx={{ bgcolor: "white", px: 3, py: 2, my: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{ color: colors.blue, fontWeight: "bold" }}
              gutterBottom
            >
              {t.calc.preAmount}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: colors.blue, fontWeight: "bold" }}
              gutterBottom
            >
              {downPayment} {t.calc.egyptianPound}
            </Typography>
            <Slider
              valueLabelDisplay="auto"
              value={downPayment}
              onChange={handleDownPaymentChange}
              onChangeCommitted={handleDownPaymentChangeValue}
              sx={{ color: colors.blue, mt: 1 }}
              min={0}
              step={1000}
              max={1000000}
              getAriaValueText={valuetext}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                width: "100%",
                mx: 1,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: colors.blue, fontWeight: "bold" }}
                gutterBottom
              >
                {t.calc.duration}
              </Typography>
              <Select
                value={duration ?? " "}
                sx={{
                  width: "100%",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "lightfrey",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.blue,
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.blue,
                  },
                  ".MuiSvgIcon-root ": {
                    fill: colors.blue,
                  },
                }}
                size="small"
                onChange={handleDurationChange}
              >
                <MenuItem value={1}>{t.calc.year1}</MenuItem>
                <MenuItem value={2}>{t.calc.year2}</MenuItem>
                <MenuItem value={3}>{t.calc.year3}</MenuItem>
                <MenuItem value={4}>{t.calc.year4}</MenuItem>
                <MenuItem value={5}>{t.calc.year5}</MenuItem>
                <MenuItem value={6}>{t.calc.year6}</MenuItem>
              </Select>
            </Box>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: colors.blue, fontWeight: "bold" }}
                gutterBottom
              >
                {t.calc.plan}
              </Typography>
              <Select
                value={plan ?? " "}
                sx={{
                  width: "100%",

                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "lightfrey",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.blue,
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.blue,
                  },
                  ".MuiSvgIcon-root ": {
                    fill: colors.blue,
                  },
                }}
                size="small"
                onChange={handlePlanChange}
              >
                {products_packages &&
                  products_packages.map((item) => (
                    <MenuItem key={item.packageId} value={item.packageId}>
                      {item.title}
                    </MenuItem>
                  ))}
              </Select>
            </Box>
          </Box>
          <Box
            sx={{
              py: 2,
              mt: 3,
              borderRadius: 2,
              px: 5,
              bgcolor: "#ebebed",
              textAlign: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: colors.blue }}
              gutterBottom
            >
              {t.calc.monthlyAmount}
            </Typography>
            {loading ? (
              <div className="box-loading">
                <span className="loader"></span>
              </div>
            ) : (
              <Typography variant="h5" sx={{ color: colors.blue }} gutterBottom>
                {value ? (
                  <>
                    {value} {t.calc.egyptianPound}
                  </>
                ) : (
                  "----"
                )}
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          // data-aos={locale == "en" ? "fade-left" : "fade-right"}
          data-aos="fade-up"
          // data-aos-delay="100"
          sx={{
            margin: "auto",
            width: {
              xs: "250px",
              sm: "300px",
              md: "480px",
            },
            flex: "1 1 0",

            mt: {
              md: 1,
              xs: 4,
            },
            flexGrow: 2,
          }}
        >
          <img
            style={{
              display: "block",
              margin: "auto",
              width: "100%",
              maxWidth: "520px",
            }}
            src="/calculator.png"
            alt="إحسب قسطك في ثواني"
          />
        </Box>
      </Box>
    </Box>
  );
}
