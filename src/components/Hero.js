import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={`section ${styles.heroSection}`}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={`${styles.textContent} animate-fade-in`}>
          <h2 className={styles.greeting}>Hallo, saya</h2>
          <h1 className={styles.name} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Muhammad Rizqi Abdi Ghifari</h1>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '500' }}>Web Developer <span style={{ color: 'var(--accent-color)' }}>&</span> Mobile Developer</h3>
          <p className={styles.description}>
            Saya Mahasiswa Teknik Informatika yang berfokus pada pengembangan aplikasi mobile menggunakan Flutter dan perancangan antarmuka web dengan Tailwind CSS. Memiliki motivasi tinggi untuk mengaplikasikan kemampuan teknis dalam proyek nyata serta dikenal sebagai pribadi yang detail-oriented. Siap bergabung sebagai pemagang untuk memberikan kontribusi operasional tim secara produktif, sekaligus adaptif dalam meningkatkan standar keahlian profesional di industri.
          </p>
          <div className={styles.cta}>
            <a href="#projects" className="btn btn-primary">Lihat Proyek</a>
            <a href="#contact" className="btn btn-outline">Hubungi Saya</a>
          </div>
        </div>
        <div className={`${styles.imageContent} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
          <div className={styles.imageWrapper}>
            {/* Image Placeholder - Requires public/images/profile.jpg */}
            <div className={styles.imagePlaceholder}>
              <Image 
                src="/pp.jpeg" 
                alt="Foto Profil" 
                fill
                className={styles.profileImage}
                priority
              />
            </div>
            <div className={styles.glowEffect}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
