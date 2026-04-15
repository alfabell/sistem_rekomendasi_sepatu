import React from "react";

// DUMMY DATA SEPATU POPULER (Tampil sebelum mencari)
const sepatuPopuler = [
  {
    nama: "Nike Zoom Mercurial Vapor 15",
    harga: "Rp 3.499.000",
    kategori: "Mahal",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL0XC_cRHML80f_RdFZsdPHAh3IGDvwyOyUIfLUaBaoHr5wHdmZxPnY1rN3z1G9Mh9jTNLEYbB5ywdExK7T8Doqa-8suLDh7l6YwkWG1u8R8488VOc6HFB2An5JMSdTs5-mEMNaIto6QBhAusqMriVvGyx1BIeaBe0MTZYDUIhTqVkICkkPf236EKuz2rkn6U8kgLgscD6sabWTxa17OXralMQC-nR083Swr5GFHgCrT97F11ghNcEAL7b52R4zwukKLszDJQ1c2F6",
  },
  {
    nama: "Adidas Predator Accuracy",
    harga: "Rp 2.199.000",
    kategori: "Sedang",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2KxHErSpkN8BwOKuJUJ6DH27Z-tTqEPMilOqod39mAV0NfLJvoJUBqYj4Csj9T5SRt-Px8oF2MdsO_3VbwjpimRxGoBo8KKhNUFSW8qcMcoAgKT003qhkZovz_wZGebcMLLFQE1WXuWp6wBwuzw7e58zOWkmhIvyFAo5hNGTo6i4u9mxYpTObUeTcPf4K5egEj31Ady9x-asfPIzRqB2uB_Nqc4fccoxRNgHvNsIth1-6nF_s4Nj4tSTX-RcUUK1oJYY-ALKKNtx3",
  },
  {
    nama: "Puma Future Ultimate",
    harga: "Rp 1.499.000",
    kategori: "Murah",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE9QxhciI3yrTHgfBU-JBkr31rIJNf24kJzxyjfl_abT-DIGrF07b9graUaalnFnTKgJXHFFaUbHYyZheRGuW6netMSFCQIf9QkFaqEczGelakrQ5BbovBAyqDy9TDY06-iKAfc-rdGSY_y9O3l-sp2JJEPB8HP4JOTLn5TUddd_28uQOmhkRSTzz5eCg_uQ-c7n0Ujd1c-_DyhagTOvBr8VfMrJd_rfDpED1wc1zd20P9RNJKkMRafWnAMjDoVCTjlUYkvGM2XSBk",
  },
  {
    nama: "Mizuno Morelia Neo IV",
    harga: "Rp 2.899.000",
    kategori: "Sedang",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtFVyikZUw0EHqz9psRB0rHTo6gN4B8Lo99B8QJMldJ-qMd8oiM0yW_7amopT-CM_AL95YjYCX1YPPaKqF98Om7sQcJ_SZsiaPbbzDnxIUSXfL6HeUidsavqDBWJYWMRKSX5d8rPDlCbrdOBwBTtIZOkWV3jy7LJeYKDyfZS5Zu0MqwD1ZoLVWvGOYdRW8KdrUyernhTrhNazepH4BygEx6VcIVNZEMCOYUE33uAcTico58A_IPdMMvAA4I46r-WgGMWcdjU2aYMFn",
  },
];

// MAPPING GAMBAR BERDASARKAN NAMA DARI DATABASE
const gambarSepatu = {
  "Nike Zoom Mercurial Vapor 15":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDL0XC_cRHML80f_RdFZsdPHAh3IGDvwyOyUIfLUaBaoHr5wHdmZxPnY1rN3z1G9Mh9jTNLEYbB5ywdExK7T8Doqa-8suLDh7l6YwkWG1u8R8488VOc6HFB2An5JMSdTs5-mEMNaIto6QBhAusqMriVvGyx1BIeaBe0MTZYDUIhTqVkICkkPf236EKuz2rkn6U8kgLgscD6sabWTxa17OXralMQC-nR083Swr5GFHgCrT97F11ghNcEAL7b52R4zwukKLszDJQ1c2F6",
  "Adidas Predator Accuracy":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB2KxHErSpkN8BwOKuJUJ6DH27Z-tTqEPMilOqod39mAV0NfLJvoJUBqYj4Csj9T5SRt-Px8oF2MdsO_3VbwjpimRxGoBo8KKhNUFSW8qcMcoAgKT003qhkZovz_wZGebcMLLFQE1WXuWp6wBwuzw7e58zOWkmhIvyFAo5hNGTo6i4u9mxYpTObUeTcPf4K5egEj31Ady9x-asfPIzRqB2uB_Nqc4fccoxRNgHvNsIth1-6nF_s4Nj4tSTX-RcUUK1oJYY-ALKKNtx3",
  "Puma Future Ultimate":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAE9QxhciI3yrTHgfBU-JBkr31rIJNf24kJzxyjfl_abT-DIGrF07b9graUaalnFnTKgJXHFFaUbHYyZheRGuW6netMSFCQIf9QkFaqEczGelakrQ5BbovBAyqDy9TDY06-iKAfc-rdGSY_y9O3l-sp2JJEPB8HP4JOTLn5TUddd_28uQOmhkRSTzz5eCg_uQ-c7n0Ujd1c-_DyhagTOvBr8VfMrJd_rfDpED1wc1zd20P9RNJKkMRafWnAMjDoVCTjlUYkvGM2XSBk",
  "Mizuno Morelia Neo IV":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCtFVyikZUw0EHqz9psRB0rHTo6gN4B8Lo99B8QJMldJ-qMd8oiM0yW_7amopT-CM_AL95YjYCX1YPPaKqF98Om7sQcJ_SZsiaPbbzDnxIUSXfL6HeUidsavqDBWJYWMRKSX5d8rPDlCbrdOBwBTtIZOkWV3jy7LJeYKDyfZS5Zu0MqwD1ZoLVWvGOYdRW8KdrUyernhTrhNazepH4BygEx6VcIVNZEMCOYUE33uAcTico58A_IPdMMvAA4I46r-WgGMWcdjU2aYMFn",
};

function HasilRekomendasi({ result, loading }) {
  return (
    <section className="lg:col-span-8 xl:col-span-9 text-left">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h1 className="font-headline font-black text-4xl md:text-5xl tracking-tighter text-on-surface uppercase mb-2">
            {result.length > 0 ? (
              <>
                Hasil Rekomendasi{" "}
                <span className="text-secondary italic">Anda</span>
              </>
            ) : (
              <>
                Pilihan Populer{" "}
                <span className="text-secondary italic">Untuk Kamu</span>
              </>
            )}
          </h1>
          <p className="text-on-surface-variant font-medium leading-relaxed">
            {result.length > 0
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

      {/* STATE LOADING */}
      {loading && (
        <div className="flex flex-col items-center justify-center p-12 bg-surface-container-highest rounded-xl border border-outline-variant/30 shadow-sm min-h-[300px]">
          <div className="w-12 h-12 border-4 border-tertiary-container border-t-secondary rounded-full animate-spin mb-4"></div>
          <p className="font-headline font-bold text-on-surface-variant tracking-wider uppercase">
            Memproses data terbaik untukmu...
          </p>
        </div>
      )}

      {/* Product Grid: Bento Style */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* 1. STATE AWAL: KATALOG SEPATU POPULER */}
          {result.length === 0 &&
            sepatuPopuler.map((item, index) => (
              <div
                key={`pop-${index}`}
                className={`group relative overflow-hidden bg-surface-container-highest rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 ${index === 0 ? "md:col-span-2 transform md:scale-[1.02] border-2 border-tertiary-container/30" : "p-6"}`}
              >
                <div className="absolute top-0 right-0 z-20">
                  <div
                    className={`bg-tertiary-container text-on-tertiary-container font-black px-6 py-2 shadow-lg ${index === 0 ? "text-2xl rounded-bl-3xl border-l border-b border-on-tertiary-container/10" : "text-lg px-4 py-1.5 rounded-bl-2xl shadow-md"}`}
                  >
                    #{index + 1}
                  </div>
                </div>

                {index === 0 ? (
                  // Layout for #1 (Large Featured)
                  <>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/10 to-transparent pointer-events-none"></div>
                    <div className="p-8 h-full flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-1 space-y-4">
                        <div className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                          Premium Choice
                        </div>
                        <h3 className="font-headline font-extrabold text-3xl leading-tight tracking-tight text-on-surface">
                          {item.nama}
                        </h3>
                        <div className="flex items-center gap-4">
                          <span className="font-headline text-lg font-bold text-secondary">
                            {item.harga}
                          </span>
                          <span className="px-2 py-0.5 bg-error-container/20 text-error font-bold text-[10px] uppercase rounded">
                            {item.kategori}
                          </span>
                        </div>
                        <button className="mt-4 px-6 py-2 bg-on-surface text-surface font-headline font-bold text-sm rounded-full group-hover:bg-secondary transition-colors">
                          Lihat Detail
                        </button>
                      </div>
                      <div className="flex-1 relative">
                        <img
                          alt={item.nama}
                          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-500 rotate-[-15deg]"
                          src={item.img}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  // Layout for #2, #3, #4
                  <>
                    <div className="relative mb-6">
                      <span className="absolute top-0 left-0 px-3 py-1 bg-surface-container-low text-primary font-bold text-[10px] uppercase rounded-full">
                        {item.kategori}
                      </span>
                      <img
                        alt={item.nama}
                        className="w-full h-48 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                        src={item.img}
                      />
                    </div>
                    <h4 className="font-headline font-bold text-lg mb-1 group-hover:text-secondary transition-colors line-clamp-1">
                      {item.nama}
                    </h4>
                    <p className="font-headline text-sm font-bold text-on-surface-variant mb-4">
                      {item.harga}
                    </p>
                  </>
                )}
              </div>
            ))}

          {/* 2. STATE HASIL REKOMENDASI */}
          {result.length > 0 &&
            result.slice(0, 4).map((item, index) => {
              const percentage = (item.similarity * 100).toFixed(1);
              const imgSrc =
                gambarSepatu[item.nama] ||
                "https://placehold.co/400x400/e2e8f0/64748b?text=" +
                  encodeURIComponent(item.nama);

              return (
                <div
                  key={`res-${index}`}
                  className={`group relative overflow-hidden bg-surface-container-highest rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 ${index === 0 ? "md:col-span-2 transform md:scale-[1.02] border-2 border-tertiary-container/30" : "p-6"}`}
                  style={{ animationDelay: index * 0.1 + "s" }}
                >
                  <div className="absolute top-0 right-0 z-20">
                    <div
                      className={`bg-tertiary-container text-on-tertiary-container font-black px-6 py-2 shadow-lg ${index === 0 ? "text-2xl rounded-bl-3xl border-l border-b border-on-tertiary-container/10" : "text-lg px-4 py-1.5 rounded-bl-2xl shadow-md"}`}
                    >
                      #{index + 1}
                    </div>
                  </div>

                  {index === 0 ? (
                    // Layout for Ranked #1 Result
                    <>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/10 to-transparent pointer-events-none"></div>
                      <div className="p-8 h-full flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 space-y-4">
                          <div className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                            Top Match
                          </div>
                          <h3 className="font-headline font-extrabold text-3xl leading-tight tracking-tight text-on-surface">
                            {item.nama}
                          </h3>
                          <div className="flex items-center gap-4">
                            <span className="font-headline text-lg font-bold text-secondary">
                              Kecocokan
                            </span>
                            <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-black text-[14px] rounded">
                              {percentage}%
                            </span>
                          </div>
                          <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden mt-2">
                            <div
                              className="h-full bg-gradient-to-r from-secondary to-tertiary-container"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <button className="mt-4 px-6 py-2 bg-on-surface text-surface font-headline font-bold text-sm rounded-full group-hover:bg-secondary transition-colors">
                            Lihat Detail
                          </button>
                        </div>
                        <div className="flex-1 relative">
                          <img
                            alt={item.nama}
                            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-500 rotate-[-15deg]"
                            src={imgSrc}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    // Layout for Other Ranked Results
                    <>
                      <div className="relative mb-6">
                        <span className="absolute top-0 left-0 px-3 py-1 bg-surface-container-low text-primary font-bold text-[10px] uppercase rounded-full">
                          Match: {percentage}%
                        </span>
                        <img
                          alt={item.nama}
                          className="w-full h-48 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                          src={imgSrc}
                        />
                      </div>
                      <h4 className="font-headline font-bold text-lg mb-1 group-hover:text-secondary transition-colors line-clamp-1">
                        {item.nama}
                      </h4>
                      <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden mt-4 mb-2">
                        <div
                          className="h-full bg-gradient-to-r from-secondary to-tertiary-container"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}

          
        </div>
      )}
    </section>
  );
}

export default HasilRekomendasi;
