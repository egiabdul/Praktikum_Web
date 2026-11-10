// src/App.jsx
import ItemMatkul from "./ItemMatkul";
import KartuProfil from "./KartuProfil";
import BadgeSkill from "./BadgeSkill";
import KartuProyek from "./KartuProyek";
import fotoProfil from "./assets/foto-egi.jpeg";

function App() {
  // 1. Data daftar mata kuliah praktikum semester ini
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 3,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Sistem Basis Data (PostgreSQL)",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF213",
      nama: "Rekayasa Perangkat Lunak Terapan",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF214",
      nama: "Arsitektur Sistem Terdistribusi",
      sks: 2,
      hari: "Jumat",
    },
  ];
  // 2. Data keahlian mahasiswa
  const daftarSkill = [
    { id: 1, namaSkill: "HTML & CSS", level: "Menengah" },
    { id: 2, namaSkill: "JavaScript", level: "Pemula" },
    { id: 3, namaSkill: "React JS", level: "Pemula" },
    { id: 4, namaSkill: "Java", level: "Pemula" },
  ];

  // 3. Data portofolio proyek
  const daftarProyek = [
    {
      id: 1,
      judul: "Kartu Profil Mahasiswa",
      deskripsi:
        "Aplikasi untuk menampilkan identitas mahasiswa menggunakan komponen React dan Props.",
      teknologi: ["React", "JSX", "Props"],
      linkGithub: "https://github.com/egiabdul/Praktikum_Web",
    },
    {
      id: 2,
      judul: "Daftar Praktikum",
      deskripsi:
        "Menampilkan daftar mata kuliah menggunakan array dan fungsi map().",
      teknologi: ["React", "JavaScript"],
      linkGithub: "https://github.com/egiabdul/Praktikum_Web",
    },
    {
      id: 3,
      judul: "Badge Skill",
      deskripsi:
        "Komponen untuk menampilkan keahlian dengan warna berdasarkan tingkat kemampuan.",
      teknologi: ["React", "JSX", "Props"],
      linkGithub: "https://github.com/egiabdul/Praktikum_Web",
    },
    {
      id: 4,
      judul: "Showcase Portfolio",
      deskripsi:
        "Halaman portofolio sederhana untuk menampilkan kumpulan proyek.",
      teknologi: ["React", "CSS"],
      linkGithub: "https://github.com/egiabdul/Praktikum_Web",
    },
  ];

  // 2. Fungsi penanganan interaksi event tombol
  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.",
    );
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ color: "#1B365D", margin: "0 0 8px 0" }}>
          Praktikum Pemrograman Web
        </h1>
        <p style={{ color: "#666", fontSize: "15px" }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite
        </p>
      </header>

      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Profil Mahasiswa Praktikan
        </h2>
        <KartuProfil
          nama="Moh Egi Abdul Aziz"
          npm="243040004"
          kelas="IF - Praktikum"
          status="Aktif"
          fotoUrl={fotoProfil}
        />
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Keahlian Mahasiswa
        </h2>

        <div>
          {daftarSkill.map((skill) => (
            <BadgeSkill
              key={skill.id}
              namaSkill={skill.namaSkill}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Daftar Rencana Praktikum Semester (List Rendering)
        </h2>
        <div style={{ display: "grid", gap: "12px" }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2>Showcase Portofolio Mahasiswa</h2>

        <div style={{ display: "grid", gap: "12px" }}>
          {daftarProyek.map((proyek) => (
            <KartuProyek key={proyek.id} {...proyek} />
          ))}
        </div>
      </section>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: "#1B365D",
            color: "#FFFFFF",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;
