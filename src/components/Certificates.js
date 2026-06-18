import styles from "./Certificates.module.css";
import Link from "next/link";

const certificates = [
  { id: "huawei-cloud", title: "Cloud Basics: Development and Basic Concepts", issuer: "Course HUAWEI", year: "Lulus" },
  { id: "huawei-bigdata", title: "HCIA-Big Data V3.5 Course", issuer: "Course HUAWEI", year: "Lulus" },
  { id: "workshop-cyber-security", title: "National IT Workshop Cyber Security", issuer: "Invofest", year: "2024 & 2025" },
  { id: "novoclub-batch3", title: "Sertifikat penyelesaian program novoclub batch 3", issuer: "novoclub", year: "Lulus" },
  { id: "kepanitiaan-semata", title: "Kepanitiaan UKMPers Semata", issuer: "UKM Semata", year: "Organisasi" },
  { id: "imasda-2024", title: "Kepanitiaan Imasda Goes to School 2024", issuer: "Imasda", year: "2024" },
  { id: "imasda-2025", title: "Kepanitiaan Imasda Goes to School 2025", issuer: "Imasda", year: "2025" },
  { id: "invofest-it", title: "Kepanitiaan Invofest Divisi IT Competition", issuer: "Invofest", year: "Organisasi" },
];

export default function Certificates() {
  return (
    <section id="certificates" className={`section ${styles.certSection}`}>
      <div className="container">
        <h2 className="section-title">Sertifikat <span>& Penghargaan</span></h2>
        <div className={styles.certList}>
          {certificates.map((cert, index) => (
            <Link href={`/certificate/${cert.id}`} key={index} className={`glass ${styles.certItem}`}>
              <div className={styles.certIcon}>
                &#127942;
              </div>
              <div className={styles.certDetails}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer} &bull; {cert.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
