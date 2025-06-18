import type { Metadata } from "next";
import { Berkshire_Swash, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/Toaster";

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});

export const berkshireSwash = Berkshire_Swash({
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Hegai Cakes | Delicious Handcrafted Cakes",
    description: "Welcome to Hegai Cakes - Your premier destination for artisanal, handcrafted cakes. Discover our selection of custom cakes, pastries, and sweet treats made with love and the finest ingredients.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${lato.className} antialiased`}
            >
                <div className="h-screen flex flex-col">
                    <Header />
                    <div className="flex-1">
                        {children}
                    </div>
                    <Footer />
                    <Toaster />
                </div>
            </body>
        </html>
    );
}
