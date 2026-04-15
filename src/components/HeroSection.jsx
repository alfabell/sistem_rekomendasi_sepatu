import React from "react";

function HeroSection() {
  return (
    <section className="hero-section bounce-in">
      <div className="hero-content">
        <h1>⚽ Temukan Sepatu Impianmu!</h1>
        <p className="hero-subtitle">
          Sistem rekomendasi pintar ini dirancang untuk membantumu memilih
          sepatu sepak bola atau futsal yang paling sesuai dengan gaya bermain,
          jenis lapangan, dan budgetmu. Jangan salah pilih, tingkatkan
          performamu di lapangan sekarang juga!
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h4>Rekomendasi Akurat</h4>
            <p>
              Sistem membandingkan kriteria input dengan spesifikasi sepatu
              menggunakan perhitungan matematis.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h4>Lebih Cepat</h4>
            <p>
              Hanya butuh hitungan detik untuk menemukan kandidat sepatu terbaik
              dari berbagai brand.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚖️</span>
            <h4>Sesuai Prioritas</h4>
            <p>
              Atur sendiri bobot dan seberapa penting suatu kriteria seperti
              harga, merk, maupun jenis lapangan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
