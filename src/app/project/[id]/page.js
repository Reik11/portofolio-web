import Link from "next/link";

export default async function ProjectDetail({ params }) {
  const { id } = await params;

  return (
    <div className="container" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <Link href="/#projects" className="btn btn-outline" style={{ marginBottom: '2rem' }}>&larr; Kembali</Link>
      <div className="glass" style={{ padding: '3rem', borderRadius: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)', textTransform: 'capitalize' }}>
          Detail Proyek: {id.replace(/-/g, ' ')}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
          Ini adalah halaman detail dinamis untuk proyek {id}. Anda dapat menambahkan deskripsi lengkap, fitur-fitur, gambar galeri, dan tautan repositori (GitHub) di sini.
        </p>
        <div style={{ height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
          Gambar / Konten Proyek
        </div>
      </div>
    </div>
  );
}
