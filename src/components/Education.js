import styles from "./Experience.module.css";

const educationList = [
  {
    role: "Mahasiswa Program Diploma (D4) Teknik Informatika",
    company: "Universitas Harkat Negeri Tegal",
    duration: "2023 - Sekarang",
    description: ""
  },
  {
    role: "Lulusan Sekolah Menengah Atas Jurusan IPA",
    company: "SMA Negeri 2 Kota Brebes",
    duration: "2020 - 2023",
    description: ""
  },
  {
    role: "Pendidikan Menengah Pertama",
    company: "SMP Negeri 2 Kota Brebes",
    duration: "2020 - 2023",
    description: ""
  }
];

export default function Education() {
  return (
    <section id="education" className={`section ${styles.experienceSection}`}>
      <div className="container">
        <h2 className="section-title">Riwayat <span>Pendidikan</span></h2>
        <div className={styles.timeline}>
          {educationList.map((edu, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={`glass ${styles.timelineContent}`}>
                <h3 className={styles.role}>{edu.company}</h3>
                <h4 className={styles.company}>{edu.role}</h4>
                <p className={styles.duration} style={{ marginBottom: edu.description ? '1.5rem' : '0' }}>{edu.duration}</p>
                {edu.description && <p className={styles.description}>{edu.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
