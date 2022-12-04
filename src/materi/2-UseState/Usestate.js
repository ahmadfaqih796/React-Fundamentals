import React, { useState } from "react";

const Usestate = () => {
  // ini usestate tipe data string
  const [nama, setNama] = useState("olafkwan");
  // ini usestate tipe data integer
  const [umur, setUmur] = useState(0);
  // ini usestate tipe data boolean
  const [status, setStatus] = useState(false);
  // ini usestate tipe data array
  const [array, setArray] = useState([]);
  // ini usestate tipe data object
  const [object, setObject] = useState({});

  const handleChange = (e) => {
    setNama(e.target.value);
    setUmur(e.target.value);
  };

  // ini kalau data banyak
  const handleGantiNama = () => {
    setObject({ nama: nama, umur: umur, status: false });
    array.push(object);
    console.log(array);
    console.log(object);
  };

  return (
    <>
      <h1>Ini UseState</h1>
      <hr />
      <form>
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
        <button
          type="submit"
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
      </form>
      <h1>nama anda : {nama}</h1>
      <h1>umur anda : {umur}</h1>

      <p>{JSON.stringify(object)}</p>
    </>
  );
};

export default Usestate;
