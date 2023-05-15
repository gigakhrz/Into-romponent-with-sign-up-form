import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name cannot be empty")
    .matches(/^[a-zA-Z\s]*$/, "The name must contain only Latin letters"),
  lastName: yup
    .string()
    .required()
    .matches(/^[a-zA-Z\s]*$/, "The name must contain only Latin letters"),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(20)
    .required()
    .matches(
      /^(?=.*[A-Z])(?=.*\W)/,
      "Password must contain at least one uppercase letter and one symbol"
    ),
});
export default schema;
