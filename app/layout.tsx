import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crystal Kizor | Climate-Responsive Design, Education & Impact",
  description:
    "Explore Crystal Kizor's ecosystem across Studio COKA, climate-responsive architecture, product design, education, speaking, faith, and social impact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
