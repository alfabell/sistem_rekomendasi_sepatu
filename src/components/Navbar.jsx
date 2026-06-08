const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const styles = {
    navbar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      padding: "15px 40px",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    logo: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#16a34a",
      cursor: "pointer",
    },

    menu: {
      display: "flex",
      gap: "30px",
      alignItems: "center",
    },

    menuItem: {
      cursor: "pointer",
      fontWeight: "500",
      color: "#374151",
      transition: "0.3s",
    },

    rekomendasiButton: {
      backgroundColor: "#16a34a",
      color: "#ffffff",
      border: "none",
      padding: "10px 18px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div
          style={styles.logo}
          onClick={() => scrollToSection("beranda")}
        >
          SISTEM REKOMENDASI
        </div>

        <div style={styles.menu}>
          <span
            style={styles.menuItem}
            onClick={() => scrollToSection("beranda")}
          >
            Beranda
          </span>

          <span
            style={styles.menuItem}
            onClick={() => scrollToSection("produk")}
          >
            Produk
          </span>

          <button
            style={styles.rekomendasiButton}
            onClick={() => scrollToSection("rekomendasi")}
          >
            Rekomendasi
          </button>

          <span
            style={styles.menuItem}
            onClick={() => scrollToSection("kontak")}
          >
            Kontak
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;