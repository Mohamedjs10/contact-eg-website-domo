import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ArSchema = yup.object().shape({
  email: yup.string().email("برجاء ادخال ايميل صحيح").required("اجباري"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "الرقم غير صحيح")
    .required("اجباري"),
  username: yup
    .string()
    .min(3, "الاسم يجب ان يكون على الأقل 3 حروف")
    .required("اجباري"),
  lastname: yup
    .string()
    .min(3, "الاسم يجب ان يكون على الأقل 3 حروف")
    .required("اجباري"),
  governorate: yup.string().required("اجباري"),
  area: yup.string().required("اجباري"),
  car_type: yup.string().required("اجباري"),
  car_price: yup.number().positive().required("اجباري"),
});
