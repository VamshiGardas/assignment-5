import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function SingleCar() {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/cars/${id}`)
      .then((response) => response.json())
      .then((data) => setCar(data));
  }, [id]);

  return (
    <div>
      <h2>Single Car Details</h2>
      <ul>
        <li>Make: {car.make}</li>
        <li>Model: {car.model}</li>
        <li>Year: {car.year}</li>
      </ul>
    </div>
  );
}

export default SingleCar;
