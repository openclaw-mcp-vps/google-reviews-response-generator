import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Reviews Response Generator",
  description: "Generate professional responses to Google reviews instantly. Save time and maintain your business reputation with AI-powered reply suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="25d2db5a-8f09-4283-8166-fac5d7e0b159"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
