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

      <main className="relative min-h-screen kinetic-bg">
        {/* Background Decorative Diagonal */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-tertiary-container/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[2px] bg-tertiary-container/20 rotate-[35deg]"></div>
        </div>

        <div className="w-full px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
          <FormPreferensi
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
            loading={loading}
          />
          <HasilRekomendasi result={result} loading={loading} />
        </div>
      </main>
    </div>
  );
}

export default App;
