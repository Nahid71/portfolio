import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nahid Babu — Senior Full-Stack & Platform Engineer",
  description:
    "Senior Full-Stack & Platform Engineer specializing in enterprise healthcare compliance systems (.NET 10, Python, GCP, Terraform) and multi-industry AI SaaS platforms (Next.js, TypeScript, PostgreSQL). Based in Geneva, Switzerland.",
  keywords: [
    "Senior Software Engineer",
    "Platform Engineer",
    "Full Stack Developer",
    "Python",
    "C#",
    ".NET 10",
    "Next.js",
    "React",
    "TypeScript",
    "GCP",
    "Terraform",
    "Healthcare Compliance",
    "Geneva",
    "Switzerland",
  ],
  openGraph: {
    title: "Nahid Babu — Senior Full-Stack & Platform Engineer",
    description:
      "Architecting mission-critical healthcare compliance platforms (.NET 10, Python, GCP) and multi-industry AI SaaS systems — 1,350+ production commits across US healthcare and enterprise SaaS.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
