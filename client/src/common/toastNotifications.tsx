import { toast } from "react-toastify";

export const infoToast = (message: string) =>
  toast.info(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });

export const successToast = (message: string) =>
  toast.success(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });

export const warningToast = (message: string) =>
  toast.warning(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });

export const errorToast = (message: string) =>
  toast.error(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
