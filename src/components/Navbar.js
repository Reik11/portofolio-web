"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>Portfolio<span>.</span></a>
        <ul className={styles.navLinks}>
          <li><a href="#hero">Beranda</a></li>
          <li><a href="#techstack">Tech Stack</a></li>
          <li><a href="#experience">Pengalaman</a></li>
          <li><a href="#projects">Proyek</a></li>
          <li><a href="#certificates">Sertifikat</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
}
