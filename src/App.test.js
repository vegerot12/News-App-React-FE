import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders footer copyright", () => {
  render(<App />);
  const linkElement = screen.getByText(/nandhini/i);
  expect(linkElement).toBeInTheDocument();
});
