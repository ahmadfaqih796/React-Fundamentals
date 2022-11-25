/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [cetak, setCetak] = useState();
  const handleChild = (pesan) => {
    const keys = Object.keys(pesan);
    const dataChild = [];
    keys.map((val, idx) => {
      dataChild.push({
        id: idx + 1,
        umur: pesan[idx].umur,
				name: pesan[idx].name,
				// ini untuk full data dari child
        // data: pesan[val],
      });
    });
    // const jadwal = { dataChild };
    setCetak(dataChild);
    // setDataJadwal(dataChild);
    console.log(cetak);
  };
  return (
    <>
      <h1>Child to Parent</h1>

      <Child handleSubmit={(pesan) => handleChild(pesan)} />
			<p>{JSON.stringify(cetak)}</p>
    </>
  );
};

export default Parent;
