import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Rizqi Abdi Ghifari | Web & Mobile Developer",
  description: "Portofolio profesional Muhammad Rizqi Abdi Ghifari, seorang pengembang web dan aplikasi mobile yang berfokus pada Flutter, Next.js, dan Tailwind CSS.",
  keywords: ["Muhammad Rizqi Abdi Ghifari", "Portofolio Muhammad Rizqi Abdi Ghifari", "Web Developer Indonesia", "Mobile Developer", "Flutter Developer", "Next.js"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
