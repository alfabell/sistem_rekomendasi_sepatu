import { useEffect, useState } from "react";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 25;

  useEffect(() => {
    fetch("http://localhost/sisrek/getData.php")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const styles = {
    section: {
      padding: "80px 20px",
      backgroundColor: "#f8fafc",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },

    title: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "700",
      color: "#1f2937",
      marginBottom: "10px",
    },

    subtitle: {
      textAlign: "center",
      color: "#6b7280",
      marginBottom: "15px",
    },

    productCount: {
      textAlign: "center",
      color: "#161ba3",
      fontWeight: "600",
      marginBottom: "40px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "24px",
    },

    card: {
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },

    cardTitle: {
      fontSize: "1.2rem",
      fontWeight: "700",
      color: "#161ba3",
      marginBottom: "15px",
    },

    badgeContainer: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom: "15px",
    },

    badge: {
      backgroundColor: "#d1d3ef",
      color: "#161ba3",
      padding: "5px 10px",
      borderRadius: "999px",
      fontSize: "0.8rem",
      fontWeight: "600",
    },

    info: {
      margin: "8px 0",
      color: "#374151",
      fontSize: "0.95rem",
    },

    paginationInfo: {
      textAlign: "center",
      marginTop: "30px",
      marginBottom: "15px",
      color: "#6b7280",
      fontWeight: "500",
    },

    pagination: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      flexWrap: "wrap",
      marginTop: "20px",
    },

    pageButton: {
      padding: "10px 16px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      cursor: "pointer",
      backgroundColor: "#ffffff",
      fontWeight: "600",
    },
  };

  return (
    
    <section style={styles.section}>
        <section id="produk"></section>
      <div style={styles.container}>
        <h2 style={styles.title}>Daftar Sepatu Tersedia</h2>

        <p style={styles.subtitle}>
          Berikut adalah koleksi sepatu yang tersedia dalam sistem rekomendasi.
        </p>

        <p style={styles.productCount}>
          Total Produk: {products.length} Sepatu
        </p>

        <div style={styles.grid}>
          {currentProducts.map((item) => (
            <div
              key={item.id}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3 style={styles.cardTitle}>👟 {item.nama}</h3>

              <div style={styles.badgeContainer}>
                <span style={styles.badge}>{item.brand}</span>
                <span style={styles.badge}>{item.lapangan}</span>
              </div>

              <p style={styles.info}>
                <strong>Harga:</strong> {item.harga}
              </p>

              <p style={styles.info}>
                <strong>Berat:</strong> {item.berat}
              </p>

              <p style={styles.info}>
                <strong>Material:</strong> {item.material}
              </p>
            </div>
          ))}
        </div>

        <div style={styles.paginationInfo}>
          Menampilkan {indexOfFirstProduct + 1} -{" "}
          {Math.min(indexOfLastProduct, products.length)} dari{" "}
          {products.length} produk
        </div>

        <div style={styles.pagination}>
          <button
            style={styles.pageButton}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                ...styles.pageButton,
                backgroundColor:
                  currentPage === index + 1 ? "#161ba3" : "#ffffff",
                color:
                  currentPage === index + 1 ? "#ffffff" : "#374151",
              }}
            >
              {index + 1}
            </button>
          ))}

          <button
            style={styles.pageButton}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;