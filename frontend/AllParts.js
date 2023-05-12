import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllParts.css";

function AllParts() {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/parts");
      setParts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="all-parts">
      <h1>All Parts</h1>
      {parts.map((part) => (
        <div key={part.id} className="part">
          <h3>{part.name}</h3>
          <p>car:{part.car}</p>
          <p>id : {part.id}</p>
          <p>Cubiccapacity: {part.Cubiccapacity}</p>
          <p>Transmission: {part.transmission}</p>
          <p>name: {part.name}</p>
          <p>Price: {part.price}</p>
        </div>
      ))}
    </div>
  );
}

export default AllParts;
