import React from 'react';
import { Link } from 'react-router-dom';

const SectionFooter = () => {
  return (
    <footer id="kontak" style={styles.footer}>
      <div style={styles.content}>
        {/* Bagian Deskripsi / Branding */}
        <div style={styles.section}>
          <h3 style={styles.title}>Rekomendasi Sepatu</h3>
          <p style={styles.text}>
            Temukan langkah terbaikmu! Sistem kami membantu Anda mencari sepatu impian yang sesuai dengan gaya, ukuran, dan kebutuhan aktivitas sehari-hari.
          </p>
        </div>

        {/* Bagian Tautan Cepat */}
        <div style={styles.section}>
          <h4 style={styles.title}>Menu Cepat</h4>
          <ul style={styles.list}>
            <li><a href="#beranda" style={styles.link}>Beranda</a></li>
            <li><a href="#preferensi" style={styles.link}>Cari Sepatu</a></li>
            <li><a href="#rekomendasi" style={styles.link}>Hasil Rekomendasi</a></li>
            <li><a href="#kontak" style={styles.link}>Kontak</a></li>
          </ul>
        </div>

        {/* Bagian Kontak */}
        <div style={styles.section}>
          <h4 style={styles.title}>Kontak</h4>
          <p style={styles.text}>Email: alfabelmuhammad3005.com</p>
          <p style={styles.text}>WhatsApp: +62 812 3456 7890</p>
        </div>
      </div>

      {/* Bagian Copyright */}
      <div style={styles.bottom}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} Sistem Rekomendasi Sepatu. Hak Cipta Dilindungi.
          </p>
          <Link to="/admin" style={styles.adminButton}>
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

// Styling dasar (bisa dipindahkan ke CSS eksternal nantinya)
const styles = {
  footer: {
    backgroundColor: '#1f2937', // Warna abu-abu gelap
    color: '#f9fafb',
    padding: '40px 20px 20px',
    marginTop: '40px',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingBottom: '20px',
  },
  section: {
    flex: '1',
    minWidth: '250px',
    margin: '10px 20px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#fff',
  },
  text: {
    lineHeight: '1.6',
    fontSize: '0.95rem',
    color: '#d1d5db', // Teks sedikit lebih redup
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#d1d5db',
    textDecoration: 'none',
    lineHeight: '2',
    fontSize: '0.95rem',
  },
  bottom: {
    textAlign: 'center',
    borderTop: '1px solid #374151',
    paddingTop: '20px',
    marginTop: '20px',
    fontSize: '0.85rem',
    color: '#9ca3af',
  },
  adminButton: {
    position: 'absolute',
    right: '0',
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '12px',
    border: '1px solid #4b5563',
    padding: '4px 10px',
    borderRadius: '4px',
    transition: 'all 0.3s'
  }
};

export default SectionFooter;
