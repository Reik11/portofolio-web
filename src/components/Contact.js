import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        <div className={`glass ${styles.contactCard}`}>
          <div className={styles.contactInfo}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Mari <span>Bekerja Sama</span></h2>
            <p className={styles.contactDesc}>
              Saya selalu terbuka untuk mendiskusikan pekerjaan web development atau peluang kemitraan. Jangan ragu untuk menghubungi saya!
            </p>
            <div className={styles.socialLinks}>
              <a href="mailto:ghifaabdi@gmail.com" className={styles.socialIcon}>Email</a>
              <a href="https://linkedin.com/in/bagpao_bakar" target="_blank" rel="noreferrer" className={styles.socialIcon}>LinkedIn</a>
              <a href="https://github.com/Reik11" target="_blank" rel="noreferrer" className={styles.socialIcon}>GitHub</a>
              <a href="https://instagram.com/bagpao_bakar" target="_blank" rel="noreferrer" className={styles.socialIcon}>Instagram</a>
              <a href="https://facebook.com/bagpao_bakar" target="_blank" rel="noreferrer" className={styles.socialIcon}>Facebook</a>
            </div>
          </div>
          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Nama Anda" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Email Anda" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <textarea placeholder="Pesan" rows="4" className={styles.input}></textarea>
              </div>
              <button type="button" className={`btn btn-primary ${styles.submitBtn}`}>Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
