import { errorToast } from "@/common/toastNotifications";
import { isAxiosError } from "axios";

const errorHandler = (error: unknown): void => {
  if (isAxiosError(error)) {
    errorToast(error.response?.data.message);
  } else {
    errorToast("Something went wrong!");
  }
};

export default errorHandler;
