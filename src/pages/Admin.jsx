import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const initialFormData = {
  nama: '',
  brand: 'Nike',
  lapangan: 'Indoor',
  harga: 'Sedang',
  harga_nominal: '',
  berat: 'Ringan',
  material: 'Synthetic',
  gambar: ''
};

const Admin = () => {
  const [dataSepatu, setDataSepatu] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- STATE UNTUK FORM TAMBAH PRODUK ---
  const [showForm, setShowForm] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');

  // Pastikan URL API Anda sudah tepat (disesuaikan dengan nama file backend)
  const API_URL = 'http://localhost/sisrek/admin_api.php';
  
  // Masukkan URL file PHP yang baru saja Anda buat di sini
  const API_ADD_URL = 'http://localhost/sisrek/add_api.php';
  const API_UPDATE_URL = 'http://localhost/sisrek/update_api.php';

  // Fungsi untuk load / update data dari server
  const fetchData = () => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setDataSepatu(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Gagal mengambil data:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    return () => {
      if (previewImage?.startsWith('blob:')) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  const resetForm = () => {
    if (previewImage?.startsWith('blob:')) {
      URL.revokeObjectURL(previewImage);
    }

    setFormData(initialFormData);
    setSelectedImage(null);
    setPreviewImage('');
    setEditId(null);
  };

  // Handler mengubah input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0] || null;

    if (previewImage?.startsWith('blob:')) {
      URL.revokeObjectURL(previewImage);
    }

    setSelectedImage(file);
    setPreviewImage(file ? URL.createObjectURL(file) : '');
  };

  const buildPayload = () => {
    const payload = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value ?? '');
    });

    if (selectedImage) {
      payload.append('file_gambar', selectedImage);
    }

    return payload;
  };

  // Handler mengirim (POST) ke PHP Backend
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);

    try {
      const res = await fetch(API_ADD_URL, {
        method: "POST",
        body: buildPayload()
      });
      
      // Ambil respon murni dari PHP (karena bisa jadi error sintaks PHP / warning HTML)
      const textResponse = await res.text();
      
      try {
        // Coba jadikan JSON
        const data = JSON.parse(textResponse);
        setLoadingSubmit(false);
        if (data.status === "success") {
          alert('Berhasil: ' + data.pesan);
          setShowForm(false);
          resetForm();
          fetchData(); // Menarik ulang seluruh data supaya muncul di tabel bawah tanpa reload
        } else {
          alert('Gagal dari server: ' + data.pesan);
        }
      } catch (parseError) {
        console.error("Respon bukan JSON:", textResponse);
        setLoadingSubmit(false);
        alert("Gagal parsing respons server. Kemungkinan ada Error PHP/Warning. Cek Console (F12) untuk melihat pesan aslinya.\n\nRespon Server: " + textResponse.substring(0, 100));
      }
      
    } catch (err) {
      console.error(err);
      setLoadingSubmit(false);
      alert("Gagal menghubungi server backend (Error Jaringan/FETCH). Pastikan XAMPP nyala dan script file PHP diletakkan di htdocs/sisrek.");
    }
  };

  const handleDelete = async (id) => {
  if (!window.confirm("Yakin ingin menghapus data ini?")) {
    return;
  }

  try {
    const res = await fetch(
      `http://localhost/sisrek/delete_api.php?id=${id}`,
      {
        method: "DELETE"
      }
    );

    const data = await res.json();

    if (data.status === "success") {
      alert("Data berhasil dihapus");
      fetchData();
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Gagal menghapus data");
  }
};

const handleEdit = (item) => {

  setEditId(item.id);

  setFormData({
    nama: item.nama,
    brand: item.brand,
    lapangan: item.lapangan,
    harga: item.harga,
    harga_nominal: item.harga_nominal || '',
    berat: item.berat,
    material: item.material,
    gambar: item.gambar || ''
  });
  setSelectedImage(null);
  setPreviewImage(item.gambar ? `http://localhost/sisrek/uploads/${item.gambar}` : '');

  setShowForm(true);
};

const handleUpdateProduct = async (e) => {

  e.preventDefault();

  try {

    const res = await fetch(API_UPDATE_URL, {
      method: "POST",
      body: (() => {
        const payload = buildPayload();
        payload.append('id', editId);
        return payload;
      })()
    });

    const data = await res.json();

    if (data.status === "success") {

      alert("Data berhasil diupdate");

      resetForm();
      setShowForm(false);

      fetchData();

    } else {

      alert(data.message);

    }

  } catch (error) {

    console.error(error);
    alert("Gagal update data");

  }
};

  return (
    <div style={{ padding: '40px', backgroundColor: '#fcfcfc', minHeight: '100vh', color: '#1f2937' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h1 style={{ fontSize: '32px',color: '#020203', fontWeight: '900', margin: 0 }}>Halaman Admin</h1>
          <p style={{ color: '#6b7280', margin: '8px 0 0 0' }}>Kelola daftar sepatu dan preferensinya</p>
        </div>
        
        {/* Tombol Aksi di Header Kanan */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => {
              if (showForm) {
                resetForm();
              }
              setShowForm(!showForm);
            }} 
            style={{ padding: '10px 20px', background: showForm ? '#ef4444' : '#3b82f6', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold', transition: '0.2s' }}
          >
            {showForm ? 'Batal Tambah' : '+ Tambah Produk'}
          </button>
          <Link to="/" style={{ padding: '10px 20px', background: '#1f2937', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      {/* FORM INPUT TAMBAH DATA (Toggle Muncul Berdasarkan State) */}
      {showForm && (
        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', margin: '0 0 16px 0', borderBottom: '1px solid #e5e7eb', paddingBottom: '12px' }}>Masukkan Data Sepatu Baru</h2>
          <form
  onSubmit={
    editId
      ? handleUpdateProduct
      : handleAddProduct
  } style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Nama Sepatu</label>
              <input required type="text" name="nama" value={formData.nama} onChange={handleChange} placeholder="Contoh: Nike Mercurial..." style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Brand</label>
              <select name="brand" value={formData.brand} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Puma">Puma</option>
                <option value="Mizuno">Mizuno</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Lapangan</label>
              <select name="lapangan" value={formData.lapangan} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Harga</label>
              <select name="harga" value={formData.harga} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}>
                <option value="Murah">Murah</option>
                <option value="Sedang">Sedang</option>
                <option value="Mahal">Mahal</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Harga Nominal</label>
              <input
                type="number"
                name="harga_nominal"
                value={formData.harga_nominal}
                onChange={handleChange}
                placeholder="Contoh: 700000"
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Upload Gambar Produk</label>
              <input
                type="file"
                name="file_gambar"
                accept="image/*"
                onChange={handleImageChange}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box', background: '#fff' }}
              />
              {formData.gambar && !selectedImage && (
                <small style={{ display: 'block', marginTop: '6px', color: '#6b7280' }}>
                  File saat ini: {formData.gambar}
                </small>
              )}
              {previewImage && (
                <div style={{ marginTop: '12px' }}>
                  <img
                    src={previewImage}
                    alt="Preview gambar produk"
                    style={{ width: '100%', maxWidth: '180px', height: '140px', objectFit: 'cover', borderRadius: '10px', border: '1px solid #d1d5db' }}
                  />
                </div>
              )}
            </div>
            <div></div>
            <div style={{ display: 'flex', alignItems: 'flex-end', paddingTop: '4px' }}>
              <button type="submit" disabled={loadingSubmit} style={{ width: '100%', padding: '10px', background: loadingSubmit ? '#9ca3af' : '#10b981', color: '#fff', borderRadius: '6px', border: 'none', cursor: loadingSubmit ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}>
                {loadingSubmit
              ? 'Menyimpan...'
              : editId
              ? 'Update Data'
              : 'Simpan ke Database'}
              </button>
            </div>
          </form>
        </div>
      )}


      <div style={{ overflowX: 'auto', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', whiteSpace: 'nowrap' }}>
          <thead>
            <tr style={{ background: '#f9fafb', textAlign: 'left' }}>
              <th style={{ padding: '16px', borderBottom: '2px solid #e5e7eb', color: '#374151' }}>ID</th>
              <th style={{ padding: '16px', borderBottom: '2px solid #e5e7eb', color: '#374151' }}>Nama Sepatu</th>
              <th style={{ padding: '16px', borderBottom: '2px solid #e5e7eb', color: '#374151' }}>Brand</th>
              <th style={{ padding: '16px', borderBottom: '2px solid #e5e7eb', color: '#374151' }}>Gambar</th>
              <th style={{ padding: '16px', borderBottom: '2px solid #e5e7eb', color: '#374151' }}>Kategori/Lapangan</th>
              <th style={{ padding: '16px', borderBottom: '2px solid #e5e7eb', color: '#374151' }}>Harga</th>
              <th style={{ padding: '16px', borderBottom: '2px solid #e5e7eb', color: '#374151' }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" style={{ padding: '32px', textAlign: 'center', color: '#6b7280' }}>
                  Loading mengambil data ke database...
                </td>
              </tr>
            ) : dataSepatu.length > 0 ? (
              dataSepatu.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #e5e7eb', transition: 'background-color 0.2s' }}>
                  <td style={{ padding: '16px' }}>{item.id || index + 1}</td>
                  <td style={{ padding: '16px', fontWeight: '600' }}>{item.nama || '-'}</td>
                  <td style={{ padding: '16px' }}>{item.brand || '-'}</td>
                  <td style={{ padding: '16px' }}>
                    {item.gambar ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img
                          src={`http://localhost/sisrek/uploads/${item.gambar}`}
                          alt={item.nama || 'Gambar sepatu'}
                          style={{ width: '56px', height: '56px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <span>{item.gambar}</span>
                      </div>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td style={{ padding: '16px' }}>{item.kategori || item.lapangan || '-'}</td>
                  <td style={{ padding: '16px' }}>{item.harga || '-'}</td>
                  <td style={{ padding: '16px' }}>
                    <button onClick={() => handleEdit(item)} style={{ marginRight: '16px', color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600' }}>Edit</button>
                    <button onClick={() => handleDelete(item.id)} style={{ color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600' }}>Hapus</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ padding: '32px', textAlign: 'center', color: '#6b7280' }}>
                  Tidak ada data. <br />
                  <span style={{ fontSize: '14px' }}>Pastikan database MySQL sudah terisi dan skrip PHP me-return data JSON dengan benar.</span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
