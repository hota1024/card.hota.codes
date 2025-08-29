import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ほた / Hotaka Okumoto",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
