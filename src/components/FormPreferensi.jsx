import React from "react";

function FormPreferensi({
  form,
  handleChange,
  handleSubmit,
  handleReset,
  loading,
}) {
  return (
    <section className="form-section">
      <form className="recommendation-form" onSubmit={handleSubmit}>
        <div className="form-group-container">
          <div className="form-group-column">
            <h3 className="section-title">Kriteria Preferensi</h3>

            <div className="input-group">
              <label>Brand Favorit</label>
              <select
                name="brand"
                onChange={handleChange}
                value={form.brand}
                className="select-input"
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

            <div className="input-group">
              <label>Jenis Lapangan</label>
              <select
                name="lapangan"
                onChange={handleChange}
                value={form.lapangan}
                className="select-input"
              >
                <option>Indoor</option>
                <option>Outdoor</option>
              </select>
            </div>

            <div className="input-group">
              <label>Kategori Harga</label>
              <select
                name="harga"
                onChange={handleChange}
                value={form.harga}
                className="select-input"
              >
                <option>Murah</option>
                <option>Sedang</option>
                <option>Mahal</option>
              </select>
            </div>
          </div>

          <div className="form-group-column">
            <h3 className="section-title">Bobot Kepentingan</h3>

            <div className="input-group">
              <label className="range-label">
                <span>Brand</span>
                <span className="badge">{form.bobot_brand}</span>
              </label>
              <input
                type="range"
                name="bobot_brand"
                min="1"
                max="5"
                value={form.bobot_brand}
                onChange={handleChange}
                className="range-input"
              />
              <div className="range-helper">
                <span>1 - Bodo Amat</span>
                <span>5 - Wajib Banget</span>
              </div>
            </div>

            <div className="input-group">
              <label className="range-label">
                <span>Lapangan</span>
                <span className="badge">{form.bobot_lapangan}</span>
              </label>
              <input
                type="range"
                name="bobot_lapangan"
                min="1"
                max="5"
                value={form.bobot_lapangan}
                onChange={handleChange}
                className="range-input"
              />
              <div className="range-helper">
                <span>1 - Bodo Amat</span>
                <span>5 - Wajib Banget</span>
              </div>
            </div>

            <div className="input-group">
              <label className="range-label">
                <span>Harga</span>
                <span className="badge">{form.bobot_harga}</span>
              </label>
              <input
                type="range"
                name="bobot_harga"
                min="1"
                max="5"
                value={form.bobot_harga}
                onChange={handleChange}
                className="range-input"
              />
              <div className="range-helper">
                <span>1 - Bodo Amat</span>
                <span>5 - Wajib Banget</span>
              </div>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button
            type="button"
            className="reset-btn"
            onClick={handleReset}
            disabled={loading}
          >
            Reset
          </button>
          <button
            type="submit"
            className={"submit-btn " + (loading ? "loading-anim" : "")}
            disabled={loading}
          >
            {loading ? "Mencari..." : "Cari Rekomendasi"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormPreferensi;
