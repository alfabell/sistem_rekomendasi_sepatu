import React from "react";

// DUMMY DATA SEPATU POPULER (Tampil sebelum mencari)
const sepatuPopuler = [
  {
    nama: "Nike Zoom Mercurial Vapor 15",
    harga: "Sedang",
    img: "/images/nike-mercurial.jpg",
  },
  { nama: "Adidas X Crazyfast", harga: "Sedang", img: "/images/adidas-x.jpg" },
  {
    nama: "Ortuseight Jogosala Avalanche",
    harga: "Murah",
    img: "/images/ortus-jogosala.jpg",
  },
  {
    nama: "Puma Future Ultimate",
    harga: "Mahal",
    img: "/images/puma-future.jpg",
  },
];

// MAPPING GAMBAR BERDASARKAN NAMA DARI DATABASE
const gambarSepatu = {
  "Nike Zoom Mercurial Vapor 15": "/images/nike-mercurial.jpg",
  "Adidas X Crazyfast": "/images/adidas-x.jpg",
  "Ortuseight Jogosala Avalanche": "/images/ortus-jogosala.jpg",
  "Puma Future Ultimate": "/images/puma-future.jpg",
  // TODO: Tambahkan nama sepatu dari database Anda di kiri, dan path gambarnya di kanan
};

function HasilRekomendasi({ result, loading }) {
  return (
    <section className="result-section">
      <h2 className="section-title">
        {result.length > 0
          ? "Hasil Rekomendasi Anda"
          : "Pilihan Populer Bulan Ini"}
      </h2>

      <div className="result-container">
        {/* 1. STATE AWAL: KATALOG SEPATU POPULER */}
        {result.length === 0 && !loading && (
          <div className="popular-catalog appear-anim">
            <p className="catalog-subtitle">
              Belum melakukan pencarian? Intip dulu koleksi paling dicari para
              pemain saat ini:
            </p>
            <div className="catalog-grid">
              {sepatuPopuler.map((item, index) => (
                <div key={index} className="catalog-card">
                  <div className="catalog-img-container">
                    <img
                      src={item.img}
                      alt={item.nama}
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/150?text=No+Image";
                      }}
                    />
                  </div>
                  <div className="catalog-info">
                    <h5>{item.nama}</h5>
                    <span className="badge-harga">{item.harga}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STATE LOADING */}
        {loading && (
          <div className="loading-state">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>Memproses data terbaik untukmu...</p>
          </div>
        )}

        {/* 2. STATE HASIL REKOMENDASI */}
        {result.length > 0 && !loading && (
          <div className="result-list">
            {result.slice(0, 5).map((item, index) => {
              const percentage = (item.similarity * 100).toFixed(1);

              // Ambil gambar dari mapping, kalau tidak ada pakai placeholder
              const imgSrc =
                gambarSepatu[item.nama] ||
                "https://via.placeholder.com/150?text=" +
                  encodeURIComponent(item.nama);

              return (
                <div
                  key={index}
                  className="result-card appear-anim"
                  style={{ animationDelay: index * 0.1 + "s" }}
                >
                  <div className="rank-badge">#{index + 1}</div>

                  {/* Tambahan Visual Gambar */}
                  <img
                    src={imgSrc}
                    alt={item.nama}
                    className="result-img"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150?text=Image+Error";
                    }}
                  />

                  <div className="result-info" style={{ flex: 1 }}>
                    <h4>{item.nama}</h4>
                    <div className="similarity-bar-container">
                      <div
                        className="similarity-bar-fill"
                        style={{ width: percentage + "%" }}
                      ></div>
                    </div>
                    <p>
                      Kecocokan: <strong>{percentage}%</strong>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default HasilRekomendasi;
