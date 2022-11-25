import React, { useState } from "react";

const Usestate = () => {
  // ini usestate tipe data string
  const [nama, setNama] = useState("olafkwan");
  // ini usestate tipe data integer
  const [umur, setUmur] = useState(0);
  // ini usestate tipe data boolean
  const [status, setStatus] = useState(false);
  // ini usestate tipe data array
  const [array, setArray] = useState({});
  // ini usestate tipe data object
  const [object, setObject] = useState([]);

  // ini kalau data banyak
  const handleGantiNama = () => {
    setNama("faqih");
  };

  return (
    <>
      <h1>Ini UseState</h1>
      <hr />
      <button
        onClick={
          // ini cara pertama
          // () => {
          //   setNama("ini cara cepat pertama");
          // }
					// cara kedua
					handleGantiNama
        }
      >
        Ganti nama
      </button>
      <h1>nama anda : {nama}</h1>
      <h1>umur anda : {umur}</h1>
    </>
  );
};

export default Usestate;
