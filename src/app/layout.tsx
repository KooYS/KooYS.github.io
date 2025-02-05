import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KooYS",
  description: "Hi. I'm KooYS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="apple-touch-icon" href="favicon.ico"></link>
      <link rel="icon" href="/favicon.ico"></link>
      <meta name="theme-color" content="#8b5abb" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <body>{children}</body>
    </html>
  );
}
