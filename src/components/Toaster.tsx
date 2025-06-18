"use client";

import { Toaster as HotToaster } from "react-hot-toast";

export const Toaster = () => (
    <HotToaster
        toastOptions={{
            style: {
                borderRadius: "12px",
                background: "#FFF8F2",
                color: "#7B3F00",
                fontWeight: 500,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            },
            success: {
                iconTheme: {
                    primary: "#EF476F",
                    secondary: "#FFF",
                },
            },
            error: {
                iconTheme: {
                    primary: "#FF6B6B",
                    secondary: "#FFF",
                },
            },
        }}
    />
);
