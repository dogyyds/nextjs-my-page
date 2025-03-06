import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
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
  title: {
    template: "%s | Dogxi",
    default: "Dogxi - Page",
  },
  description:
    "👋 Welcome to Dogxi's personal website.🐶 一个热爱 Web 开发和游戏开发的菜鸟狗狗。",
  keywords: [
    "Dogxi",
    "个人主页",
    "Personal Website",
    "Dogxi's Website",
    "前端开发",
    "Web开发",
    "游戏开发",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Dogxi", url: "https://github.com/dogyyds" }],
  creator: "Dogxi",
  publisher: "Dogxi",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dogxi.me"),
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/zh-CN",
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Dogxi - Personal Website",
    description:
      "👋 Welcome to Dogxi's personal website.🐶 一个热爱 Web 开发和游戏开发的菜鸟狗狗。",
    url: "https://dogxi.me",
    siteName: "Dogxi Personal Website",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://dogxi.me/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dogxi's Personal Website",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
