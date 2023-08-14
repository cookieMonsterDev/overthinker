import type { Metadata } from "next";
import "./globals.scss";
import AuthProvider from "@/context/AuthProvider";
import { ModalProvider } from "@/context/ModalProvider";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import ToastNotificationProvider from "@/context/ToastNotificationProvider";

export const metadata: Metadata = {
  title: "OverThinker - Try not to think too much",
  description:
    "OverThinker is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.",
  openGraph: {
    title: "OverThinker - Try not to think too much",
    description:
      "OverThinker is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
            <ToastNotificationProvider>
              <NavBar />
              {children}
              <Footer />
            </ToastNotificationProvider>
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
