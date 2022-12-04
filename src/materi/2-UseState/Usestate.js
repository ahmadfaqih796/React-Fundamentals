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
    setArray({ nama: nama, umur: umur });
    console.log(array);
  };

  return (
    <>
      <h1>Ini UseState</h1>
      <hr />
      <label htmlFor="nama">nama</label>
      <input
        type="text"
        name="nama"
        onChange={(e) => setNama(e.target.value)}
      />
      <label htmlFor="umur">umur</label>
      <input
        type="number"
        name="umur"
        onChange={(e) => setUmur(e.target.value)}
      />
      <p>{JSON.stringify({nama, umur})}</p>
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
