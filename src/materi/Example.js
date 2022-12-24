import React from "react";

const Example = () => {
  const identitas = {
    nama: "Faqih",
    umur: 22,
    status: true,
  };
  const kartuNama = {
    ...identitas,
    alamat: "Jakarta",
  };
  console.log(kartuNama);
  return <div>Example</div>;
}

export default Example;
