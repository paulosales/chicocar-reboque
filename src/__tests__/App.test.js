import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("render the start page", () => {
  const { getAllByText } = render(<App />);
  const titleElement = getAllByText(/Chicocar Reboque 24hs/i);
  expect(titleElement).toHaveLength(2);
});
