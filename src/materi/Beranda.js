import React from "react";
import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <>
      <div>Beranda</div>
      <Link to="/child-to-parent">1. Styling</Link>
      <Link to="/usestate">2. seState</Link>
    </>
  );
};

export default Beranda;
