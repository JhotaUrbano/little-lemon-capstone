import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, onDateChange }) {
  const navigate = useNavigate();

  function handleSuccess() {
    navigate("/confirmed");
  }

  return (
    <main id="booking" className="booking-section">
      <h1 className="booking-title">Reserve Your Table</h1>

      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        onSubmitSuccess={handleSuccess}
      />
    </main>
  );
}
