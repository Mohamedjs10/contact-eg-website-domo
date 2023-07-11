import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ArSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "الاسم يجب ألا يقل عن 3 حروف")
    .required("اجباري"),
  email: yup.string().email("البريد الالكتروني غير صحيح").required("اجباري"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "رقم الهاتف غير صحيح")
    .required("اجباري"),
  subject: yup.string().required("اجباري"),
  message: yup.string().required("اجباري"),
});
