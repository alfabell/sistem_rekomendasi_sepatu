import React from "react";

function HasilRekomendasi({ result, loading, hasSearched }) {
  return (
    <section className="lg:col-span-8 xl:col-span-9 text-left">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h1 className="font-headline font-black text-4xl md:text-5xl tracking-tighter text-on-surface uppercase mb-2">
            {hasSearched ? (
              <>
                Hasil Rekomendasi{" "}
                <span className="text-secondary italic">Anda</span>
              </>
            ) : (
              <>
                Sistem Rekomendasi{" "}
                <span className="text-secondary italic">Sepatu</span>
              </>
            )}
          </h1>
          <p className="text-on-surface-variant font-medium leading-relaxed">
            {hasSearched
              ? "Berikut adalah rekomendasi sepatu terbaik berdasarkan perhitungan algoritma kami yang disesuaikan dengan preferensi kamu."
              : "Berdasarkan performa di lapangan dan tren penggunaan pro-player global. Temukan senjata rahasiamu untuk meningkatkan akurasi dan kecepatan."}
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest/50 rounded-full border border-white/40">
          <span
            className="material-symbols-outlined text-sm"
            data-icon="trending_up"
          >
            trending_up
          </span>
          <span className="text-xs font-bold uppercase tracking-widest">
            {result.length > 0 ? "Scout-AI Active" : "324 Active Scouts"}
          </span>
        </div>
      </header>

      {loading && (
        <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-outline-variant/30 shadow-sm min-h-[300px]">
          <div className="w-12 h-12 border-4 border-tertiary-container border-t-secondary rounded-full animate-spin mb-4"></div>
          <p className="font-headline font-bold text-on-surface-variant tracking-wider uppercase">
            Memproses data terbaik untukmu...
          </p>
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {!hasSearched && (
            <div className="bg-white rounded-xl p-10 text-center shadow-sm md:col-span-2 xl:col-span-3">
              <div className="text-6xl mb-4">{"\uD83D\uDC5F"}</div>

              <h2 className="text-2xl text-black font-bold mb-3">
                Belum Ada Rekomendasi
              </h2>

              <p className="text-gray-500 max-w-2xl mx-auto">
                Silakan pilih preferensi merek, jenis lapangan, kategori harga,
                serta tingkat kepentingan setiap kriteria pada panel sebelah
                kiri untuk mendapatkan rekomendasi sepatu yang paling sesuai
                dengan kebutuhan Anda.
              </p>
            </div>
          )}

          {result.length > 0 &&
            result.slice(0, 5).map((item, index) => {
              const percentage = (item.similarity * 100).toFixed(1);
              const imgSrc = item.gambar
                ? `http://localhost/sisrek/uploads/${item.gambar}`
                : "https://placehold.co/400x400/e2e8f0/64748b?text=No+Image";

              return (
                <div
                  key={`res-${index}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-lg">#{index + 1}</span>

                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-sm font-bold">
                      {percentage}%
                    </span>
                  </div>

                  <img
                    alt={item.nama}
                    src={imgSrc}
                    className="w-full h-44 object-contain mb-4"
                  />

                  <h3 className="font-headline font-bold text-lg mb-2">
                    {item.nama}
                  </h3>

                  <p className="text-sm text-gray-600 mb-1">
                    Brand: {item.brand}
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
  Harga: Rp {Number(item.harga_nominal).toLocaleString("id-ID")}
</p>

                  <p className="text-sm text-gray-600 mb-3">
                    Lapangan: {item.lapangan}
                  </p>

                  <div className="w-full bg-surface-container-low rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-secondary to-tertiary-container rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </section>
  );
}

export default HasilRekomendasi;
