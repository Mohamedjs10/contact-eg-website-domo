import * as yup from "yup";
// const phoneRegExp =
const phoneRegExp = /^01/;
const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const nationaId =
  /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/;
export const EnSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  // lastname: yup
  //   .string()
  //   .min(3, "Username must be at least 3 characters long")
  //   .required("Required"),
  // email: yup.string().email("Please enter a valid email").required("Required"),
  email: yup
    .string()
    .email()
    .matches(emailRegExp, "Please enter a valid email")
    .required("Required"),
  mobilePhone: yup
    .string()
    .matches(
      phoneRegExp,
      "Phone number must start with (010/011/012/015) directly"
    )
    .min(11, "Must be exactly 11 digits")
    .max(11, "Must be exactly 11 digits")
    .required("Required"),
  national_id: yup
    .string()
    .matches(nationaId, "National Id is not valid")
    .required("Required"),
  governance: yup.string().required("Required"),
  // area: yup.string().required("Required"),
});
export const EnSchemaA = yup.object().shape({
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  // lastname: yup
  //   .string()
  //   .min(3, "Username must be at least 3 characters long")
  //   .required("Required"),
  email: yup
    .string()
    // .email("Please enter a valid email")
    .matches(emailRegExp, "Please enter a valid email")
    .required("Required"),
  mobilePhone: yup
    .string()
    .matches(
      phoneRegExp,
      "Phone number must start with (010/011/012/015) directly"
    )
    .min(11, "Must be exactly 11 digits")
    .max(11, "Must be exactly 11 digits")
    .required("Required"),
  national_id: yup
    .string()
    // .matches(nationaId, "National Id is not valid")
    .matches(nationaId, "National Id is not valid")

    .required("Required"),
  governance: yup.string().required("Required"),
  // area: yup.string().required("Required"),
  // car_type: yup.string().required("Required"),
  category: yup.string().required("Required"),
  // car_price: yup.number().positive().required("Required"),
  amount: yup.string().required("Required"),
});
export const EnSchemaB = yup.object().shape({
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  // lastname: yup
  //   .string()
  //   .min(3, "Username must be at least 3 characters long")
  //   .required("Required"),
  email: yup
    .string()
    // .email("Please enter a valid email")
    .matches(emailRegExp, "Please enter a valid email")
    .required("Required"),
  mobilePhone: yup
    .string()
    .matches(
      phoneRegExp,
      "Phone number must start with (010/011/012/015) directly"
    )
    .min(11, "Must be exactly 11 digits")
    .max(11, "Must be exactly 11 digits")
    .required("Required"),
  national_id: yup
    .string()
    .matches(nationaId, "National Id is not valid")
    .required("Required"),
  governance: yup.string().required("Required"),
  // area: yup.string().required("Required"),
  products: yup.string().required("Required"),
});
