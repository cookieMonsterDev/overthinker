import { BlurOverlay } from "@/components/BlurOverlay";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <BlurOverlay>{children}</BlurOverlay>
      </body>
    </html>
  );
}
