import { useState, useEffect } from "react";
import "./App.css";
import Kartu from "./Kartu";
import Penghitung from "./Penghitung";
import FormTugas from "./FormTugas";
import ItemTugas from "./ItemTugas";

function App() {
  // 1. State utama daftar tugas
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem("daftar-tugas");

    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }

    return [
      { id: 1, judul: "Install Node.js dan Vite", selesai: true },
      { id: 2, judul: "Pelajari useState", selesai: false },
    ];
  });

  // 2. State untuk filter tugas
  const [filter, setFilter] = useState("semua");

  // 3. Effect saat aplikasi pertama kali dibuka
  useEffect(() => {
    console.log("Aplikasi Daftar Tugas siap digunakan!");
  }, []);

  // 4. Mengubah judul tab browser
  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;

    document.title = `(${sisa}) Tugas Belum Selesai`;
  }, [daftarTugas]);

  // 5. Menyimpan data ke localStorage
  useEffect(() => {
    localStorage.setItem("daftar-tugas", JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  // 6. Menambahkan tugas baru
  const tambahTugas = (judul) => {
    const tugasBaru = {
      id: Date.now(),
      judul: judul,
      selesai: false,
    };

    setDaftarTugas((prev) => [...prev, tugasBaru]);
  };

  // 7. Mengubah status tugas
  const ubahStatus = (id) => {
    setDaftarTugas((prev) =>
      prev.map((tugas) => {
        if (tugas.id === id) {
          return {
            ...tugas,
            selesai: !tugas.selesai,
          };
        }

        return tugas;
      }),
    );
  };

  // 8. Menghapus satu tugas
  const hapusTugas = (id) => {
    setDaftarTugas((prev) => prev.filter((tugas) => tugas.id !== id));
  };

  // 9. Menghitung jumlah tugas selesai
  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  // 10. Menghapus semua tugas yang selesai
  const hapusSemuaSelesai = () => {
    setDaftarTugas((prev) => prev.filter((tugas) => !tugas.selesai));
  };

  // 11. Menampilkan tugas berdasarkan filter
  const tugasDitampilkan = daftarTugas.filter((tugas) => {
    if (filter === "belum") {
      return !tugas.selesai;
    }

    if (filter === "selesai") {
      return tugas.selesai;
    }

    return true;
  });

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>

      <p className="subjudul">
        Laboratorium Informatika - Modul 2: React Lanjutan
      </p>

      <Penghitung />

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        {/* Tombol Filter */}
        <div className="filter">
          <button
            className={`tombol tombol-filter ${
              filter === "semua" ? "aktif" : ""
            }`}
            onClick={() => setFilter("semua")}
          >
            Semua
          </button>

          <button
            className={`tombol tombol-filter ${
              filter === "belum" ? "aktif" : ""
            }`}
            onClick={() => setFilter("belum")}
          >
            Belum Selesai
          </button>

          <button
            className={`tombol tombol-filter ${
              filter === "selesai" ? "aktif" : ""
            }`}
            onClick={() => setFilter("selesai")}
          >
            Selesai
          </button>
        </div>

        {/* Tombol Hapus Semua yang Selesai */}
        {jumlahSelesai > 0 && (
          <button
            className="tombol tombol-merah hapus-semua"
            onClick={hapusSemuaSelesai}
          >
            Hapus Semua yang Selesai
          </button>
        )}

        {/* Conditional Rendering Daftar Tugas */}
        {daftarTugas.length === 0 ? (
          <p className="kosong">
            Belum ada tugas. Yuk tambahkan tugas pertamamu!
          </p>
        ) : tugasDitampilkan.length === 0 ? (
          <p className="kosong">Tidak ada tugas pada filter ini.</p>
        ) : (
          <ul className="daftar">
            {tugasDitampilkan.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;
