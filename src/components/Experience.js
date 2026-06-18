import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Tim Desain, Tata Letak dan Pracetak",
    company: "Pengurus UKM Semata",
    duration: "Jan 2025 - Des 2025",
    description: "Merancang dan memproduksi aset visual digital (poster, feeds Instagram, berita, majalah, atau banner) untuk mempromosikan program atau memberikan informasi yang akurat untuk pembaca."
  },
  {
    role: "Publikasi, Dokumentasi, dan Desain",
    company: "Ikatan Mahasiswa SMANDA",
    duration: "Nov 2023 - Jan 2025",
    description: "Berperan aktif sebagai staf PDD (Publikasi, Desain & Dokumentasi) dalam mendukung berbagai program dan acara di sekolah."
  },
  {
    role: "Tim Novo Book Club Tegal",
    company: "Program novoclub.id",
    duration: "Jun 2024 - Sep 2024",
    description: "Aktif mempresentasikan gagasan dan mendiskusikan implementasi konsep buku bersama para karyawan dan profesional ParagonCorp dalam sesi diskusi berkala."
  }
];

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experienceSection}`}>
      <div className="container">
        <h2 className="section-title">Pengalaman <span>Kerja & Organisasi</span></h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={`glass ${styles.timelineContent}`}>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <p className={styles.duration}>{exp.duration}</p>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
