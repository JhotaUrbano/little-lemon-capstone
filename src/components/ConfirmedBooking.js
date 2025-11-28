
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmedBooking() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="confirmed-section">
      <div className="confirmed-card">
        <h1 className="confirmed-title">Booking Confirmed!</h1>

        <p className="confirmed-text">
          Thank you! Your reservation has been successfully submitted.
        </p>

        <p className="confirmed-text">
          We look forward to serving you at Little Lemon.
        </p>

        <p className="confirmed-redirect">Redirecting back to home...</p>
      </div>
    </section>
  );
}


