import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { test } from "vitest";

test("renders learn react link", async () => {
  render(<App />);
  const logo = await screen.findByRole("link", { name: "Wineshop" });
  expect(logo).toBeInTheDocument();
});
