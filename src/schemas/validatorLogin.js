import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().required("Number is required!"),
  password: Yup.string()
    .min(6, "Name must be at least 6 characters!")
    .max(13, "Number must be less than 12 characters!")
    .required("Password is required!"),
});

export const registerFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Name must be at least 3 characters!")
    .max(20, "Name must be less than 20 characters!")
    // .matches(/^[A-Za-z]+$/, "Name must consist only of letters!")
    .required("Name is required!"),
  email: Yup.string().required("Number is required!"),
  password: Yup.string()
    .min(6, "Name must be at least 6 characters!")
    .max(13, "Number must be less than 12 characters!")
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
