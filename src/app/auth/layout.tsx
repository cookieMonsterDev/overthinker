import styles from "./auth.module.scss";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={styles.container}>
        {children}
      </body>
    </html>
  );
}
