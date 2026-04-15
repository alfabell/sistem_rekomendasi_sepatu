import React from "react";

function FormPreferensi({
  form,
  handleChange,
  handleSubmit,
  handleReset,
  loading,
}) {
  return (
    <aside className="lg:col-span-4 xl:col-span-3 space-y-8 text-left">
      <div className="glass-panel rounded-xl p-8 shadow-2xl">
        <h2 className="font-headline font-bold text-2xl tracking-tight mb-8 text-on-surface flex items-center gap-3">
          <span
            className="material-symbols-outlined text-primary"
            data-icon="tune"
          >
            tune
          </span>
          Kriteria Preferensi
        </h2>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Dropdowns */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="font-headline text-[11px] font-bold uppercase tracking-widest text-primary">
                Brand Favorit
              </label>
              <select
                name="brand"
                value={form.brand}
                onChange={handleChange}
                className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 font-medium focus:ring-2 focus:ring-tertiary-container appearance-none transition-all"
              >
                <option>Nike</option>
                <option>Adidas</option>
                <option>Specs</option>
                <option>Puma</option>
                <option>Ortuseight</option>
                <option>Mizuno</option>
                <option>New Balance</option>
                <option>Kelme</option>
                <option>Umbro</option>
                <option>Diadora</option>
                <option>Joma</option>
                <option>League</option>
                <option>Astec</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-headline text-[11px] font-bold uppercase tracking-widest text-primary">
                Jenis Lapangan
              </label>
              <select
                name="lapangan"
                value={form.lapangan}
                onChange={handleChange}
                className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 font-medium focus:ring-2 focus:ring-tertiary-container appearance-none transition-all"
              >
                <option>Indoor</option>
                <option>Outdoor</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-headline text-[11px] font-bold uppercase tracking-widest text-primary">
                Kategori Harga
              </label>
              <select
                name="harga"
                value={form.harga}
                onChange={handleChange}
                className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 font-medium focus:ring-2 focus:ring-tertiary-container appearance-none transition-all"
              >
                <option>Murah</option>
                <option>Sedang</option>
                <option>Mahal</option>
              </select>
            </div>
          </div>

          {/* Sliders: Bobot Kepentingan */}
          <div className="space-y-6 pt-4">
            <h3 className="font-headline text-sm font-bold text-primary-dim border-b border-outline-variant/15 pb-2">
              Bobot Kepentingan
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Brand</span>
                <span className="text-xs font-bold text-tertiary">
                  LVL {form.bobot_brand}
                </span>
              </div>
              <input
                type="range"
                name="bobot_brand"
                min="1"
                max="5"
                value={form.bobot_brand}
                onChange={handleChange}
                className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-tertiary-container"
              />
              <div className="flex justify-between text-[10px] text-primary/60 font-bold uppercase tracking-tighter">
                <span>Bodo Amat</span>
                <span>Wajib Banget</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Lapangan</span>
                <span className="text-xs font-bold text-tertiary">
                  LVL {form.bobot_lapangan}
                </span>
              </div>
              <input
                type="range"
                name="bobot_lapangan"
                min="1"
                max="5"
                value={form.bobot_lapangan}
                onChange={handleChange}
                className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-tertiary-container"
              />
              <div className="flex justify-between text-[10px] text-primary/60 font-bold uppercase tracking-tighter">
                <span>Bodo Amat</span>
                <span>Wajib Banget</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Harga</span>
                <span className="text-xs font-bold text-tertiary">
                  LVL {form.bobot_harga}
                </span>
              </div>
              <input
                type="range"
                name="bobot_harga"
                min="1"
                max="5"
                value={form.bobot_harga}
                onChange={handleChange}
                className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-tertiary-container"
              />
              <div className="flex justify-between text-[10px] text-primary/60 font-bold uppercase tracking-tighter">
                <span>Bodo Amat</span>
                <span>Wajib Banget</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-tertiary-container text-on-tertiary-container font-headline font-extrabold py-4 rounded-full hover:scale-[1.03] transition-all shadow-[0_0_25px_rgba(189,252,0,0.4)] active:scale-95 disabled:opacity-50"
            >
              {loading ? "MENCARI..." : "CARI REKOMENDASI"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              disabled={loading}
              className="w-full bg-surface-container-highest text-primary font-headline font-bold py-3 rounded-full hover:bg-surface-container-high transition-all text-sm disabled:opacity-50"
            >
              Reset Filter
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
}

export default FormPreferensi;
