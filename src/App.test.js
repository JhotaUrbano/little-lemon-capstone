import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders booking title", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const title = screen.getByText(/reserve your table/i);
  expect(title).toBeInTheDocument();
});
