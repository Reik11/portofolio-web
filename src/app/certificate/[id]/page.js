import Link from "next/link";
import { certificates } from "@/components/Certificates";

export default async function CertificateDetail({ params }) {
  const { id } = await params;
  const cert = certificates.find(c => c.id === id);
  const imageSrc = cert ? `/images/${cert.image}` : `/images/${id}.jpg`;
  const title = cert ? cert.title : id.replace(/-/g, ' ');

  return (
    <div className="container" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <Link href="/#certificates" className="btn btn-outline" style={{ marginBottom: '2rem' }}>&larr; Kembali</Link>
      <div className="glass" style={{ padding: '3rem', borderRadius: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)', textTransform: 'capitalize' }}>
          {title}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
          {cert ? `Diterbitkan oleh: ${cert.issuer} (${cert.year})` : `Detail sertifikat untuk ${id}`}
        </p>
        <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '15px', overflow: 'hidden', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <img 
            src={imageSrc} 
            alt={`Sertifikat ${title}`}
            style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}
