import React, { useState } from "react";
import { styles } from "./form";
import { colors } from "../utils/const";
import Link from "next/link";
import { useFormik } from "formik";
import { EnSchema, EnSchemaA, EnSchemaB } from "../utils/en_schema";
import { ArSchema, ArSchemaA, ArSchemaB } from "../utils/ar_schema";
import { Box, TextField, InputLabel, MenuItem, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function Form({ type, color, product }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const defaultValues = {
    name: "",
    homePhone: "",
    mobilePhone: "", //mandatory
    email: "", //mandatory
    governance: "",
    area: "",
    carCondition: "",
    insuranceType: "",
    brand: "Brand",
    model: "",
    modelYear: "",
    buyerEmail: "",
    buyerName: "",
    buyerPhone: "",
    refName: "",
    refIdNo: "",
    refPhoneNumber: "",
    refProduct: "",
    needHelp: false,
    plan: "",
    category: "",
    refIdNumber: "",
    tenor: "0",
    amount: "0",
    downPayment: "0",
    installmentValue: "0",
    hrLetter: "",
    electricityBill: "",
  };

  // formik ==========================================================
  const onSubmit = async (values, actions) => {
    // ----------------------------------------------------------------

    await fetch(
      `https://api-mobile.contact.eg/programs/${product}/info-request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...defaultValues,
          ...values,
        }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        if (!response.error) {
          toast.success(t.formMsg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          actions.resetForm();
        }
      });
  };
  let ArSchemaTest;
  let EnSchemaTest;
  let initialValuesTest;
  if (!type) {
    ArSchemaTest = ArSchema;
    EnSchemaTest = EnSchema;
    initialValuesTest = {
      name: "",
      // lastname: "",
      email: "",
      mobilePhone: "",
      national_id: "",
      governance: "",
      // area: "",
    };
  } else if (type == "a") {
    ArSchemaTest = ArSchemaA;
    EnSchemaTest = EnSchemaA;
    initialValuesTest = {
      name: "",
      // lastname: "",
      email: "",
      mobilePhone: "",
      national_id: "",
      governance: "",
      // area: "",
      // car_type: "",
      category: "",
      // car_price: "",
      amount: "",
    };
  } else if (type == "b") {
    ArSchemaTest = ArSchemaB;
    EnSchemaTest = EnSchemaB;
    initialValuesTest = {
      name: "",
      // lastname: "",
      email: "",
      mobilePhone: "",
      national_id: "",
      governance: "",
      // area: "",
      products: "",
    };
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValuesTest,
    validationSchema: locale === "en" ? EnSchemaTest : ArSchemaTest,
    onSubmit,
  });
  // ================================================================
  return (
    <Box
      data-aos={locale == "en" ? "fade-right" : "fade-left"}
      component="form"
      sx={styles.container}
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      {/* First Name ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
        <InputLabel sx={styles.label}>{t.form_labels.full_name}</InputLabel>
        <TextField
          value={values.name}
          onChange={handleChange}
          id="name"
          type="text"
          onBlur={handleBlur}
          error={touched.name && errors.name}
          sx={styles.input}
          InputProps={{ sx: { height: "45px" } }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>{touched.name && errors.name}</Box>
      </Box>
      {/* Last Name ---------------------------------------------------------------------------------------------------------- */}
      {/* <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
        <InputLabel sx={styles.label}>{t.form_labels.last_name}</InputLabel>
        <TextField
          value={values.lastname}
          onChange={handleChange}
          id="lastname"
          type="text"
          onBlur={handleBlur}
          error={touched.lastname && errors.lastname}
          sx={styles.input}
          InputProps={{
            sx: {
              height: "45px",
              color: "grey",
              lineHeight: "2",
            },
          }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>{touched.lastname && errors.lastname}</Box>
      </Box> */}
      {/* Email Adress ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
        <InputLabel sx={styles.label}>{t.form_labels.email_adress}</InputLabel>
        <TextField
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          onBlur={handleBlur}
          error={touched.email && errors.email}
          sx={styles.input}
          InputProps={{ sx: { height: "45px" } }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>{touched.email && errors.email}</Box>
      </Box>
      {/* Phone Number ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
        <InputLabel sx={styles.label}>{t.form_labels.phone_number}</InputLabel>
        <TextField
          value={values.mobilePhone}
          onChange={handleChange}
          id="mobilePhone"
          // type="number"
          type="text"
          onBlur={handleBlur}
          error={touched.mobilePhone && errors.mobilePhone}
          sx={styles.input}
          InputProps={{ sx: { height: "45px" } }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>
          {touched.mobilePhone && errors.mobilePhone}
        </Box>
      </Box>
      {/* National ID ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
        <InputLabel sx={styles.label}>{t.form_labels.national_id}</InputLabel>
        <TextField
          value={values.national_id}
          onChange={handleChange}
          id="national_id"
          type="number"
          onBlur={handleBlur}
          error={touched.national_id && errors.national_id}
          sx={styles.input}
          InputProps={{ sx: { height: "45px" } }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>
          {touched.national_id && errors.national_id}
        </Box>
      </Box>
      {/* Governorate ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
        <InputLabel sx={styles.label}>{t.form_labels.governorate}</InputLabel>
        <TextField
          value={values.governance || "default"}
          onChange={handleChange}
          name="governance"
          type="text"
          onBlur={handleBlur}
          error={touched.governance && errors.governance}
          sx={styles.input}
          select
          style={{ height: "45px" }}
          InputProps={{
            sx: {
              height: "45px",
              color: "grey",
              // fontWeight: "bold",
              lineHeight: "2",
            },
          }}
        >
          {/* <Box sx={{ height: "100px" }}> */}
          <MenuItem disabled value="default">
            {t.form_labels.g_placeholder}
          </MenuItem>
          {t.governorates.map((option) => (
            <MenuItem key={option.id} value={option.governorate_name}>
              {option.governorate_name}
            </MenuItem>
          ))}
          {/* </Box> */}
        </TextField>
        <Box sx={styles.helperText}>
          {touched.governance && errors.governance}
        </Box>
      </Box>
      {/* Area ---------------------------------------------------------------------------------------------------------- */}
      {/* <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
        <InputLabel sx={styles.label}>{t.form_labels.area}</InputLabel>
        <TextField
          value={values.area || "default"}
          onChange={handleChange}
          name="area"
          type="text"
          onBlur={handleBlur}
          error={touched.area && errors.area}
          sx={styles.input}
          select
          style={{ height: "45px" }}
          InputProps={{
            sx: {
              height: "45px",
              color: "grey",
              // fontWeight: "bold",
              lineHeight: "2",
            },
          }}
        >
          <MenuItem disabled value="default">
            {t.form_labels.a_placeholder}
          </MenuItem>
          {t.governorates.map((option) => (
            <MenuItem key={option.id} value={option.governorate_name}>
              {option.governorate_name}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={styles.helperText}>{touched.area && errors.area}</Box>
      </Box> */}
      {/* Car Type & Price ---------------------------------------------------------------------------------------------------------- */}
      {type === "a" && (
        <>
          <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
            <InputLabel sx={styles.label}>{t.form_labels.car_type}</InputLabel>
            <TextField
              // value={values.car_type || "default"}
              value={values.category || "default"}
              onChange={handleChange}
              // name="car_type"
              name="category"
              type="text"
              onBlur={handleBlur}
              // error={touched.car_type && errors.car_type}
              error={touched.category && errors.category}
              sx={styles.input}
              select
              style={{ height: "45px" }}
              InputProps={{
                sx: {
                  height: "45px",
                  color: "grey",
                  // fontWeight: "bold",
                  lineHeight: "2",
                },
              }}
            >
              <MenuItem disabled value="default">
                {t.form_labels.car_placeholder}
              </MenuItem>
              {t.car_type.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <Box sx={styles.helperText}>
              {/* {touched.car_type && errors.car_type} */}
              {touched.category && errors.category}
            </Box>
          </Box>

          <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
            <InputLabel sx={styles.label}>{t.form_labels.car_price}</InputLabel>
            <TextField
              value={values.amount}
              onChange={handleChange}
              id="amount"
              type="text"
              onBlur={handleBlur}
              error={touched.amount && errors.amount}
              sx={styles.input}
              InputProps={{ sx: { height: "45px" } }}
              variant="outlined"
            />
            <Box sx={styles.helperText}>{touched.amount && errors.amount}</Box>
          </Box>
        </>
      )}
      {/* Products ---------------------------------------------------------------------------------------------------------- */}

      {type === "b" && (
        <>
          <Box sx={styles.inputWrapper} style={{ width: "200px" }}>
            <InputLabel sx={styles.label}>{t.form_labels.products}</InputLabel>
            <TextField
              value={values.products || "default"}
              onChange={handleChange}
              name="products"
              type="text"
              onBlur={handleBlur}
              error={touched.products && errors.products}
              sx={styles.input}
              select
              style={{ height: "45px" }}
              InputProps={{
                sx: {
                  height: "45px",
                  color: "grey",
                  // fontWeight: "bold",
                  lineHeight: "2",
                },
              }}
            >
              <MenuItem disabled value="default">
                {t.form_labels.products_placeholder}
              </MenuItem>
              {t.home_page.products.map((option, index) => (
                <MenuItem key={index} value={option.title2}>
                  {option.title2}
                </MenuItem>
              ))}
            </TextField>
            <Box sx={styles.helperText}>
              {touched.products && errors.products}
            </Box>
          </Box>
        </>
      )}

      {/* Submit ---------------------------------------------------------------------------------------------------------- */}

      <Button
        disabled={isSubmitting}
        type="submit"
        sx={styles.btn}
        style={{
          backgroundColor: color,
          border: `1px solid #74357D`,
        }}
      >
        {t.form_labels.submit}
      </Button>
      <ToastContainer style={{ width: "300px", textAlign: "center" }} />
    </Box>
  );
}
