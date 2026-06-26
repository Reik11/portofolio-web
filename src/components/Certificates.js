import styles from "./Certificates.module.css";
import Link from "next/link";

export const certificates = [
  { id: "huawei-cloud", title: "Cloud Basics: Development and Basic Concepts", issuer: "Course HUAWEI", year: "Lulus", image: "huawei-cloud.jpg" },
  { id: "huawei-bigdata", title: "HCIA-Big Data V3.5 Course", issuer: "Course HUAWEI", year: "Lulus", image: "huawei-bigdata.jpg" },
  { id: "workshop-cyber-security-2024", title: "National IT Workshop Cyber Security 2024", issuer: "Invofest", year: "2024", image: "workshop-cyber-security(2024).png" },
  { id: "workshop-cyber-security-2025", title: "National IT Workshop Cyber Security 2025", issuer: "Invofest", year: "2025", image: "workshop-cyber-security(2025).jpg" },
  { id: "novoclub-batch3", title: "Sertifikat penyelesaian program novoclub batch 3", issuer: "novoclub", year: "Lulus", image: "novoclub-batch3.jpg" },
  { id: "kepengurusan-semata", title: "Kepengurusan UKMPers Semata", issuer: "UKM Semata", year: "Organisasi", image: "Kepengurusan-semata.jpg" },
  { id: "imasda-2024", title: "Kepanitiaan Imasda Goes to School 2024", issuer: "Imasda", year: "2024", image: "imasda-2024.jpg" },
  { id: "imasda-2025", title: "Kepanitiaan Imasda Goes to School 2025", issuer: "Imasda", year: "2025", image: "imasda-2025.jpg" },
  { id: "pelatihan-jurnalistik", title: "Kepanitiaan Pelatihan Jurnalistik tingkat dasar", issuer: "Pers Semata", year: "Organisasi", image: "Kepanitian Pelatihan Jurnalistik tingkat dasar Pers Semata.jpg" },
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
