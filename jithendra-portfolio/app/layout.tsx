import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jithendra A. Nayud — Data Analyst Portfolio",
  description: "Animated portfolio of Jithendra A. Nayud — Data Analyst focused on SQL, Power BI, Excel and Python.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
