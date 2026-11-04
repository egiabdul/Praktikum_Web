import React from "react";

function BadgeSkill({ namaSkill, level }) {
  const warnaLevel = {
    Pemula: {
      backgroundColor: "#FFF3CD",
      color: "#856404",
    },
    Menengah: {
      backgroundColor: "#D1ECF1",
      color: "#0C5460",
    },
    Mahir: {
      backgroundColor: "#D4EDDA",
      color: "#155724",
    },
  };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 14px",
        margin: "5px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: "bold",
        ...(warnaLevel[level] || warnaLevel.Pemula),
      }}
    >
      {namaSkill} - {level}
    </span>
  );
}

export default BadgeSkill;
