import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePart() {
  const { id } = useParams();
  const [part, setPart] = useState(null);

  useEffect(() => {
    const getPart = async () => {
      const response = await axios.get(`http://localhost:5000/parts/${id}`);
      setPart(response.data);
    };
    getPart();
  }, [id]);

  if (!id) {
    return <div>No part found</div>;
  }

  if (!part) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Part Details</h1>
      <ul>
        <li>car : {part.car}</li>
        <li>Name: {part.name}</li>
        <li>Cubic capacity: {part.Cubiccapacity}</li>
        <li>Transmission: {part.transmission}</li>
        <li>name: {part.name}</li>
        <li>Price: {part.price}</li>
      </ul>
    </div>
  );
}

export default SinglePart;
