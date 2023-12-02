import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      /^([A-Z][a-z\-']{1,50})|([А-ЯЁIЇҐЄ][а-яёіїґє\-']{1,50})$/,
      "Wrong Fullname"
    )
    .required("This field is required"),
  email: Yup.string().email("Wrong Email").required("This field is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Wrong Phone") // Змініть регулярний вираз згідно з вашими вимогами
    .required("This field is required"),
});
