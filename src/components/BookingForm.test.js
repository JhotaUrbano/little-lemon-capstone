import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("shows errors when submitting empty form", async () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      onDateChange={() => {}}
      onSubmitSuccess={() => {}}
    />
  );

  fireEvent.click(screen.getByRole("button"));

  const errors = await screen.findAllByText(/required/i);
  expect(errors.length).toBeGreaterThan(0);
});
