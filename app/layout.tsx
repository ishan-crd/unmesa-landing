import "./globals.css";
import { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ConvexClientProvider } from "./ConvexClientProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: "Unmesa - The AI Growth Companion",
  description: "Focus on the essential. Lock in your tasks. Achieve your goals.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
        <link rel="shortcut icon" href="/images/logo.svg" />
        <link
          rel="apple-touch-icon"
          href="/images/logo.svg"
        />
        <meta name="apple-mobile-web-app-title" content="Unmesa" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={plusJakarta.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
