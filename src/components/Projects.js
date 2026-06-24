import styles from "./Projects.module.css";
import Link from "next/link";

export const projects = [
  {
    id: "zaza-bakery",
    title: "Website Profile Zaza Bakery",
    description: "Pengembangan antarmuka website company profile yang modern dan responsif.",
    longDescription: "Zaza Bakery adalah website profil perusahaan yang dirancang khusus untuk menampilkan produk roti dan kue secara menarik. Website ini memudahkan pelanggan untuk melihat katalog menu, lokasi toko, dan melakukan pemesanan secara langsung melalui antarmuka yang ramah pengguna.",
    features: ["Katalog Produk Interaktif", "Desain Responsif", "Integrasi Pemesanan WhatsApp", "Halaman Lokasi & Kontak", "Animasi UI Modern"],
    tech: ["Next.js", "Tailwind CSS"]
  },
  {
    id: "deteksi-emosi-wajah",
    title: "Aplikasi Pendeteksi Emosi Wajah",
    description: "Aplikasi cerdas untuk mendeteksi emosi wajah secara real-time melalui kamera.",
    longDescription: "Aplikasi ini menggunakan teknologi Computer Vision dan kecerdasan buatan untuk mendeteksi emosi wajah manusia secara real-time melalui kamera. Sistem ini dapat mengklasifikasikan berbagai emosi dasar dan sangat berguna untuk analisis sentimen serta penelitian interaksi manusia-komputer.",
    features: ["Deteksi Wajah Real-time", "Klasifikasi 7 Emosi Dasar", "Akurasi Tinggi dengan Model AI", "Antarmuka Pengguna Sederhana", "Pemrosesan Gambar Cepat"],
    tech: ["Python", "Flask"]
  },
  {
    id: "ai-chatbot-rag",
    title: "AI Chatbot Berbasis RAG",
    description: "Chatbot pintar menggunakan teknologi AI dan metode Retrieval-Augmented Generation (RAG).",
    longDescription: "Chatbot cerdas yang dibangun menggunakan arsitektur Retrieval-Augmented Generation (RAG). Sistem ini mampu menjawab pertanyaan spesifik berdasarkan dokumen atau basis pengetahuan internal dengan akurat, mengurangi halusinasi AI, dan memberikan referensi sumber jawaban.",
    features: ["Pemrosesan Bahasa Alami (NLP)", "Pencarian Dokumen Kontekstual", "Integrasi Large Language Model (LLM)", "Antarmuka Chat Interaktif", "Manajemen Basis Pengetahuan"],
    tech: ["Next.js", "AI"]
  },
  {
    id: "manajemen-apotek",
    title: "ApotekPOS - Sistem Manajemen Apotek",
    description: "🚀 [Coming Soon] Sistem Manajemen Apotek Terintegrasi & Modern dengan fitur kasir POS dan AI.",
    longDescription: "ApotekPOS adalah sistem informasi manajemen apotek terpadu yang dirancang untuk mempermudah proses operasional. Aplikasi ini memiliki antarmuka yang komprehensif, mulai dari sistem kasir (web) hingga aplikasi mobile khusus untuk pasien melakukan pemesanan obat dan mengelola profil mereka.",
    features: ["Manajemen Inventaris dengan sistem FIFO", "Kasir POS terintegrasi dengan struk digital", "Pemesanan online langsung oleh pasien", "Pembacaan otomatis OCR untuk resep dokter", "Manajemen Profil & Riwayat Pasien (Mobile)"],
    tech: ["Flutter", "Next.js", "OCR / AI"]
  },
  {
    id: "racing-game",
    title: "Racing Game",
    description: "🚀 [Coming Soon] Permainan balap interaktif yang sedang dalam tahap pengembangan.",
    longDescription: "Game balap mobil interaktif dengan grafis 3D yang dioptimalkan untuk performa tinggi. Menawarkan pengalaman mengemudi yang menyenangkan dengan berbagai pilihan trek menantang, sistem fisika kendaraan yang realistis, dan kontrol yang sangat intuitif.",
    features: ["Simulasi Fisika Kendaraan Realistic", "Berbagai Pilihan Lintasan dan Mode", "Sistem Papan Peringkat (Leaderboard)", "Kontrol Intuitif & Responsif", "Grafis Menarik & Optimalisasi Kinerja"],
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
