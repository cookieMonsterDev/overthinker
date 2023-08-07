import {
  AT_LEAST_ONE_LOWER_CASE_LETTER,
  AT_LEAST_ONE_NUMBER,
  AT_LEAST_ONE_SPECIAL_CHARACTER,
  AT_LEAST_ONE_UPPER_CASE_LETTER,
} from "@/common/validationRegexes";
import * as yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = yup.object({
  email: yup
    .string()
    .required("email is required")
    .email("email is not provided"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "min 8 characters")
    .max(64, "max 64 characters")
    .matches(AT_LEAST_ONE_UPPER_CASE_LETTER, "required 1 uppercase letter")
    .matches(AT_LEAST_ONE_LOWER_CASE_LETTER, "required 1 lower letter")
    .matches(AT_LEAST_ONE_NUMBER, "required 1 number")
    .matches(AT_LEAST_ONE_SPECIAL_CHARACTER, "required 1 special character"),
});
