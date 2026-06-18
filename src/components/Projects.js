import styles from "./Projects.module.css";
import Link from "next/link";

const projects = [
  {
    id: "zaza-bakery",
    title: "Website Profile Zaza Bakery",
    description: "Pengembangan antarmuka website company profile yang modern dan responsif.",
    tech: ["Next.js", "Tailwind CSS"]
  },
  {
    id: "deteksi-emosi-wajah",
    title: "Aplikasi Pendeteksi Emosi Wajah",
    description: "Aplikasi cerdas untuk mendeteksi emosi wajah secara real-time melalui kamera.",
    tech: ["Python", "Flask"]
  },
  {
    id: "ai-chatbot-rag",
    title: "AI Chatbot Berbasis RAG",
    description: "Chatbot pintar menggunakan teknologi AI dan metode Retrieval-Augmented Generation (RAG).",
    tech: ["Next.js", "AI"]
  },
  {
    id: "manajemen-apotek",
    title: "Sistem Manajemen Apotek",
    description: "🚀 [Coming Soon] Sistem pengelolaan data, stok obat, dan transaksi apotek.",
    tech: ["Flutter", "Dart"]
  },
  {
    id: "racing-game",
    title: "Racing Game",
    description: "🚀 [Coming Soon] Permainan balap interaktif yang sedang dalam tahap pengembangan.",
    tech: ["JavaScript"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Proyek <span>Terbaru</span></h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={`glass ${styles.projectCard}`}>
              <div className={styles.imagePlaceholder}>
                <span>Project Image</span>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.techTags}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={styles.tag}>{t}</span>
                  ))}
                </div>
                <Link href={`/project/${project.id}`} className={styles.projectLink}>Lihat Detail &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
