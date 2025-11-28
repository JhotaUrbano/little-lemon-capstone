import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { initializeTimes, updateTimes } from "./utils/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [availableTimes, setAvailableTimes] = useState(initializeTimes());

  function handleDateChange(date) {
    setAvailableTimes(updateTimes(date));
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <BookingPage
                availableTimes={availableTimes}
                onDateChange={handleDateChange}
              />
            }
          />

          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

