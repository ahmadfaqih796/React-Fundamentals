import React, { useState } from "react";

const Usestate = () => {
  // ini usestate tipe data string
  const [nama, setNama] = useState("");
  // ini usestate tipe data integer
  const [umur, setUmur] = useState(0);
  // ini usestate tipe data boolean
  const [status, setStatus] = useState(false);
	// ini usestate tipe data array
  const [array, setArray] = useState({});
	// ini usestate tipe data object
  const [object, setObject] = useState([]);

  return <div>Usestate</div>;
};

export default Usestate;
