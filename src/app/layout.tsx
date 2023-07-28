import type { Metadata } from "next";
import "./globals.scss";
import AuthProvider from "@/context/AuthProvider";
import { NavBar } from "@/components/NavBar";
import { ModalProvider } from "@/context/ModalProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <ModalProvider>
            <NavBar />
            {children}
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
