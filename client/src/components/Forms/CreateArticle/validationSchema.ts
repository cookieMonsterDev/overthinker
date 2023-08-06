import * as yup from "yup";

export const initialValues = {
  title: "",
  content: "",
};

export const validationSchema = yup.object({
  title: yup.string().required("Title is required").min(8),
  content: yup.string().required("Content is required").min(120),
});
