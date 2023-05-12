import React from "react";

const Car = ({ car }) => {
  return (
    <div className="car">
      <h3>
        {car.make} {car.model}
      </h3>
      <p>Year: {car.year}</p>
      {car.price !== null && car.price !== undefined && (
        <p>Price: ${car.price.toLocaleString()}</p>
      )}
    </div>
  );
};

export default Car;
