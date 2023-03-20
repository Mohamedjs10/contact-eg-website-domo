import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const EnSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  lastname: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  governorate: yup.string().required("Required"),
  area: yup.string().required("Required"),
  car_type: yup.string().required("Required"),
  car_price: yup.number().positive().required("Required"),
});
