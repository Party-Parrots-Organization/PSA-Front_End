import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { SnackbarProvider } from "notistack";
import ErrorMessage from "./components/common/message/ErrorMessage";
import InfoMessage from "./components/common/message/InfoMessage";
import SuccessMessage from "./components/common/message/SucessMessage";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SnackbarProvider
            Components={{
                error: ErrorMessage,
                success: SuccessMessage,
                info: InfoMessage,
            }}
        >
            <RouterProvider router={router} />
        </SnackbarProvider>
    </React.StrictMode>
);
