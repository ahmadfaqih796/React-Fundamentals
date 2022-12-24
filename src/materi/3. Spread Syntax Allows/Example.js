import React from "react";

const SpreadSyntaxAllow = () => {
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
  return <div>SpreadSyntaxAllow</div>;
};

export default SpreadSyntaxAllow;
