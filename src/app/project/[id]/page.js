import Link from "next/link";
import { projects } from "@/components/Projects";

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  const title = project ? project.title : id.replace(/-/g, ' ');
  const description = project && project.longDescription ? project.longDescription : "Deskripsi proyek ini sedang dalam tahap pembaruan.";
  const features = project && project.features ? project.features : [];

  return (
    <div className="container" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <Link href="/#projects" className="btn btn-outline" style={{ marginBottom: '2rem' }}>&larr; Kembali</Link>
      <div className="glass" style={{ padding: '3rem', borderRadius: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)', textTransform: 'capitalize' }}>
          {title}
        </h1>
        
        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 'bold' }}>About Project</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            {description}
          </p>
        </div>

        {features.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 'bold' }}>Features</h2>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
              {features.map((feat, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>{feat}</li>
              ))}
            </ul>
          </div>
        )}
        <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '15px', overflow: 'hidden', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <img 
            src={`/images/${id}.jpg`} 
            alt={`Screenshot ${id}`}
            style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}
