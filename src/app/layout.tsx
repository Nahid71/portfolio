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
  title: "Nahid Babu — Senior Software Engineer",
  description:
    "Senior Software Engineer with 7 years of experience building scalable microservices, cloud-native apps, and full-stack platforms. Based in Geneva, Switzerland.",
  keywords: [
    "Senior Software Engineer",
    "Full Stack Developer",
    "Python",
    "React",
    "Node.js",
    "AWS",
    "Geneva",
    "Switzerland",
  ],
  openGraph: {
    title: "Nahid Babu — Senior Software Engineer",
    description:
      "Building scalable systems from Dhaka to Geneva. 7 years of experience in Python, React, Node.js, and cloud infrastructure.",
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
