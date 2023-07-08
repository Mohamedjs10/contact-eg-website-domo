import * as yup from "yup";
const phoneRegExp = /^01/;
const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const nationaId =
  /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/;

export const ArSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "الاسم يجب ان يكون على الأقل 3 حروف")
    .required("اجباري"),
  // lastname: yup
  //   .string()
  //   .min(3, "الاسم يجب ان يكون على الأقل 3 حروف")
  //   .required("اجباري"),
  email: yup
    .string()
    // .email("برجاء ادخال ايميل صحيح")
    .matches(emailRegExp, "برجاء ادخال ايميل صحيح")
    .required("اجباري"),
  national_id: yup
    .string()
    .matches(nationaId, "رقم البطاقة غير صحيح")
    .required("اجباري"),
  mobilePhone: yup
    .string()
    .matches(phoneRegExp, "رقم الهاتف يجب أن يبدا بـ (010/011/012/015) مباشرة")
    .min(11, "يجب أن يكون 11 رقم")
    .max(11, "يجب أن يكون 11 رقم")
    .required("اجباري"),
  governance: yup.string().required("اجباري"),
  // area: yup.string().required("اجباري"),
});
export const ArSchemaA = yup.object().shape({
  name: yup
    .string()
    .min(3, "الاسم يجب ان يكون على الأقل 3 حروف")
    .required("اجباري"),
  // lastname: yup
  //   .string()
  //   .min(3, "الاسم يجب ان يكون على الأقل 3 حروف")
  //   .required("اجباري"),
  email: yup
    .string()
    // .email("برجاء ادخال ايميل صحيح")
    .matches(emailRegExp, "برجاء ادخال ايميل صحيح")
    .required("اجباري"),
  national_id: yup
    .string()
    .matches(nationaId, "رقم البطاقة غير صحيح")
    .required("اجباري"),
  mobilePhone: yup
    .string()
    .matches(phoneRegExp, "رقم الهاتف يجب أن يبدا بـ (010/011/012/015) مباشرة")
    .min(11, "يجب أن يكون 11 رقم")
    .max(11, "يجب أن يكون 11 رقم")
    .required("اجباري"),
  governance: yup.string().required("اجباري"),
  // area: yup.string().required("اجباري"),
  // car_type: yup.string().required("اجباري"),
  category: yup.string().required("اجباري"),
  // car_price: yup.number().positive().required("اجباري"),
  amount: yup.string().required("اجباري"),
});
export const ArSchemaB = yup.object().shape({
  name: yup
    .string()
    .min(3, "الاسم يجب ان يكون على الأقل 3 حروف")
    .required("اجباري"),
  // lastname: yup
  //   .string()
  //   .min(3, "الاسم يجب ان يكون على الأقل 3 حروف")
  //   .required("اجباري"),
  email: yup
    .string()
    // .email("برجاء ادخال ايميل صحيح")
    .matches(emailRegExp, "برجاء ادخال ايميل صحيح")
    .required("اجباري"),
  national_id: yup
    .string()
    .matches(nationaId, "رقم البطاقة غير صحيح")
    .required("اجباري"),
  mobilePhone: yup
    .string()
    .matches(phoneRegExp, "رقم الهاتف يجب أن يبدا بـ (010/011/012/015) مباشرة")
    .min(11, "يجب أن يكون 11 رقم")
    .max(11, "يجب أن يكون 11 رقم")
    .required("اجباري"),
  governance: yup.string().required("اجباري"),
  // area: yup.string().required("اجباري"),
  products: yup.string().required("اجباري"),
});
