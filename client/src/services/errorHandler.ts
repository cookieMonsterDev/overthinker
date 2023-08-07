import { errorToast } from "@/common/toastNotifications";
import { isAxiosError } from "axios";
 
export const toastNotificationErrorHandler = (error: unknown): void => {
  if (isAxiosError(error)) {
    errorToast(error.response?.data.message);
  } else {
    errorToast("Something went wrong!");
  }
};