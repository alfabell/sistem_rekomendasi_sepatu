import React from "react";

function HeroSection() {
  return (
    <>
      <main className="relative py-16 overflow-hidden min-h-screen">
        {/* Hero Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-on-background/5 kinetic-diagonal"></div>
          <div className="absolute -right-20 top-20 w-64 h-[120%] bg-on-background/10 rotate-12"></div>
          <div className="absolute -right-40 top-0 w-32 h-full bg-tertiary-container/20 rotate-12"></div>
        </div>

        <div className="w-full px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Content */}
          <div className="relative z-10">
            <h1 className="text-6xl md:text-7xl font-black text-on-background font-headline leading-[1.1] tracking-tighter mb-8">
              Temukan Sepatu <br />
              <span className="relative inline-block">
                Impianmu!
                <span className="absolute bottom-2 left-0 w-full h-4 bg-tertiary-container -z-10"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-12">
              Sistem rekomendasi pintar ini dirancang untuk membantumu memilih
              sepatu sepak bola atau futsal yang paling sesuai dengan gaya
              bermain, jenis lapangan, dan budgetmu. Jangan salah pilih,
              tingkatkan performamu di lapangan sekarang juga!
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('form-preferensi')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl shadow-tertiary-container/20 active:scale-95 flex items-center gap-2"
              >
                MULAI SEKARANG
                <span
                  className="material-symbols-outlined"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center">
            <div className="relative z-10 w-4/5 md:w-3/4 aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              {/* GAMBAR TEMPLATE */}
              <img
                className="w-full h-full object-cover object-top bg-slate-200"
                src="/gambar_hero_section.jpg"
                alt="Hero Visual Template"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-secondary to-tertiary p-8 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-secondary/20">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-8xl"
                  data-icon="target"
                >
                  target
                </span>
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-white text-3xl"
                    data-icon="target"
                  >
                    target
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white font-headline mb-4">
                  Rekomendasi Akurat
                </h3>
                <p className="text-white/80 leading-relaxed font-medium">
                  Sistem membandingkan kriteria input dengan spesifikasi sepatu
                  menggunakan perhitungan matematis.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-tertiary-container scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-secondary to-primary-dim p-8 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-secondary/20">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-8xl"
                  data-icon="bolt"
                >
                  bolt
                </span>
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-white text-3xl"
                    data-icon="bolt"
                  >
                    bolt
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white font-headline mb-4">
                  Lebih Cepat
                </h3>
                <p className="text-white/80 leading-relaxed font-medium">
                  Hanya butuh hitungan detik untuk menemukan kandidat sepatu
                  terbaik dari berbagai brand.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-tertiary-container scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-tertiary to-on-tertiary-fixed-variant p-8 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-tertiary/20">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-8xl"
                  data-icon="balance"
                >
                  balance
                </span>
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-white text-3xl"
                    data-icon="balance"
                  >
                    balance
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white font-headline mb-4">
                  Sesuai Prioritas
                </h3>
                <p className="text-white/80 leading-relaxed font-medium">
                  Atur sendiri bobot dan seberapa penting suatu kriteria seperti
                  harga, merk, maupun jenis lapangan.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-tertiary-container scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HeroSection;
