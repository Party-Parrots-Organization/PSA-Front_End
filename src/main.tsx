import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import ErrorMessage from "./components/common/message/ErrorMessage";
import InfoMessage from "./components/common/message/InfoMessage";
import SuccessMessage from "./components/common/message/SucessMessage";
import {
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error, query) => {
            if (typeof query?.meta?.errorMessage === "string") {
                enqueueSnackbar(query.meta.errorMessage, { variant: "error" });
            } else if (error instanceof Error) {
                enqueueSnackbar(error.message, { variant: "error" });
            }
        },
    }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <SnackbarProvider
                Components={{
                    error: ErrorMessage,
                    success: SuccessMessage,
                    info: InfoMessage,
                }}
            >
                <RouterProvider router={router} />
            </SnackbarProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
