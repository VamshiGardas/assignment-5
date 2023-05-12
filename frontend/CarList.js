import React, { useState, useEffect } from "react";
import axios from "axios";
import Car from "./Car";
import "./Carlist.css";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [showCars, setShowCars] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cars");
        console.log("Fetched car data:", response.data);
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    if (showCars) {
      fetchCars();
    }
  }, [showCars]);

  return (
    <div>
      <h2>Car List</h2>
      <button className="show-cars-btn" onClick={() => setShowCars(!showCars)}>
        {showCars ? "Hide Cars List" : "Show Cars List"}
      </button>
      {showCars && (
        <div className="car-list">
          {cars.map((car) => (
            <Car key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarList;
