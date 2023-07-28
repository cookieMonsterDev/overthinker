import {
  AT_LEAST_ONE_LOWER_CASE_LETTER,
  AT_LEAST_ONE_NUMBER,
  AT_LEAST_ONE_SPECIAL_CHARACTER,
  AT_LEAST_ONE_UPPER_CASE_LETTER,
} from "@/app/common/validationRegexes";
import * as yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Email is not provided"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Min 8 characters")
    .max(64, "Max 64 characters")
    .matches(AT_LEAST_ONE_UPPER_CASE_LETTER, "Required 1 uppercase letter")
    .matches(AT_LEAST_ONE_LOWER_CASE_LETTER, "Required 1 lower letter")
    .matches(AT_LEAST_ONE_NUMBER, "Required 1 number")
    .matches(AT_LEAST_ONE_SPECIAL_CHARACTER, "Required 1 special character"),
});
