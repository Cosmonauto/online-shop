import { toast } from "react-toastify";

export const notifySuccess = (msg) =>
    toast(<p style={{ fontSize: 16 }}>{msg}</p>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        type: "success",
    });

export const notifyError = (msg) =>
    toast(<p style={{ fontSize: 16 }}>{msg}</p>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        type: "error",
    });