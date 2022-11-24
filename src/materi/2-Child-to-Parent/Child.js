import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const dataPenduduk = [
  {
		id: 1,
    name: "Ahmad Faqih Arifin",
    umur: 23,
    alamat: "Jl.Bekasi",
    status: true,
  },
  {
		id: 2,
    name: "Muhammad Rafie",
    umur: 23,
    alamat: "Jl.Bekasi",
    status: true,
  },
];

const Child = ({ handleSubmit }) => {
  const [data, setData] = useState(dataPenduduk);
  const navigate = useNavigate();
  const handleClickSubmit = () => {
    handleSubmit?.(data);
    // closeModalHandler();
  };
  return (
    <>
      <h1>Ini Child</h1>
      <button onClick={handleClickSubmit}>Terapkan</button>
    </>
  );
};

export default Child;
