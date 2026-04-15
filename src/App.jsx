import { useState } from "react";
import HeroSection from "./components/HeroSection";
import FormPreferensi from "./components/FormPreferensi";
import HasilRekomendasi from "./components/HasilRekomendasi";
import "./App.css";

const initialForm = {
  brand: "Nike",
  lapangan: "Indoor",
  harga: "Sedang",
  bobot_brand: 3,
  bobot_lapangan: 3,
  bobot_harga: 3,
};

function App() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // handle perubahan input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // handle reset
  const handleReset = () => {
    setForm(initialForm);
    setResult([]);
    setError(null);
  };

  // submit ke backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const url =
      "http://localhost/sisrek/rekomendasi.php?brand=" +
      form.brand +
      "&lapangan=" +
      form.lapangan +
      "&harga=" +
      form.harga +
      "&bobot_brand=" +
      form.bobot_brand +
      "&bobot_lapangan=" +
      form.bobot_lapangan +
      "&bobot_harga=" +
      form.bobot_harga;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Gagal mengambil data");

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError(
        "Gagal terhubung ke server. Pastikan backend sudah menyala atau periksa koneksi Anda.",
      );
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <HeroSection />

      {error && <div className="error-toast">?? {error}</div>}

      <main className="main-content">
        <FormPreferensi
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          loading={loading}
        />
        <HasilRekomendasi result={result} loading={loading} />
      </main>

      <footer className="app-footer">
        <p>Dibuat untuk penikmat sepak bola & futsal</p>
      </footer>
    </div>
  );
}

export default App;
