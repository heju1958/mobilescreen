import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySucess = (message: string) =>
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
      width: "286px",
      height: " 69px",
      background: "#7de3ec",
      fontFamily: "Arial",
      color: "black",
    },
  });

export const notifyError = (message: string) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      width: "286px",
      height: " 69px",
      background: "#7de3ec",
      fontFamily: "Arial",
      color: "black",
    },
  });
