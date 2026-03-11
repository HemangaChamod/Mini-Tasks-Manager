import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Task Manager",
  description: "A simple task management application built with Next.js & Springboot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}