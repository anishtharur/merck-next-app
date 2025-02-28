import React from "react";
import { render, screen } from "@testing-library/react";
import ThemeToggle from "../../src/components/ThemeToggle";

// Basic test case for ThemeToggle component

test("renders ThemeToggle component", () => {
  render(<ThemeToggle />);
  const toggleElement = screen.getByRole("button");
  expect(toggleElement).toBeInTheDocument();
});
