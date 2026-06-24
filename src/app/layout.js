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
  title: "Muhammad Rizqi Abdi Ghifari (Ghifa) | Web & Mobile Developer",
  description: "Portofolio profesional Muhammad Rizqi Abdi Ghifari (Ghifa), seorang pengembang web dan aplikasi mobile yang berfokus pada Flutter, Next.js, dan Tailwind CSS.",
  keywords: ["Ghifa", "Muhammad Rizqi Abdi Ghifari", "M.R.A. Ghifari", "M.R. Abdi Ghifari", "m.r.a.ghifari", "m.r.abdi ghifari", "Portofolio Ghifa", "Web Developer Indonesia", "Mobile Developer", "Flutter Developer", "Next.js"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
