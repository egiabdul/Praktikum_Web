import React from "react";

function KartuProyek({ judul, deskripsi, teknologi, linkGithub }) {
  return (
    <div
      style={{
        border: "1px solid #D0D7DE",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ color: "#1B365D" }}>{judul}</h3>

      <p style={{ color: "#555", fontSize: "14px" }}>{deskripsi}</p>

      <div style={{ margin: "15px 0" }}>
        {teknologi.map((item) => (
          <span
            key={item}
            style={{
              display: "inline-block",
              backgroundColor: "#E8EEF5",
              color: "#1B365D",
              padding: "5px 9px",
              borderRadius: "5px",
              fontSize: "12px",
              margin: "3px",
            }}
          >
            #{item}
          </span>
        ))}
      </div>

      <a
        href={linkGithub}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#1B365D",
          color: "#FFFFFF",
          padding: "9px 15px",
          borderRadius: "5px",
          textDecoration: "none",
          fontSize: "13px",
        }}
      >
        Lihat Repository GitHub
      </a>
    </div>
  );
}

export default KartuProyek;
