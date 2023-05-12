import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllCars.css";

function AllCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/cars");
      setCars(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Cars</h1>
      {cars.map((car) => (
        <div key={car.id}>
          <h2>{car.make}</h2>
          <p>{car.model}</p>
          <p>{car.year}</p>
        </div>
      ))}
    </div>
  );
}

export default AllCars;
