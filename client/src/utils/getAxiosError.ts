import { isAxiosError } from "axios";

export const getAxiosError = (error: unknown): any => {
  if (isAxiosError(error)) {
    return error.response?.data;
  } else {
    return error;
  }
};
