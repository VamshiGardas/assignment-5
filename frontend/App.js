import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import AllCars from "./AllCars";
import SingleCar from "./SingleCar";
import AllParts from "./AllParts";
import SinglePart from "./SinglePart";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Car Collection</h1>
          <nav>
            <ul>
              <li>
                <Link to="/cars">Get All Cars</Link>
              </li>
              <li>
                <Link to="/car">Get a Single Car by ID</Link>
              </li>
              <li>
                <Link to="/parts">Get All Parts for a Car</Link>
              </li>
              <li>
                <Link to="/part">Get a Single Part for a Car</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/cars" element={<AllCars />} />
            <Route path="/car/:id" element={<SingleCar />} />
            <Route path="/parts" element={<AllParts />} />
            <Route path="/part/:id" element={<SinglePart />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
