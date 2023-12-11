import Home from "./Home";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";

describe("Home", () => {
  test("should render correctly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText("Clientes")).toBeDefined();
  });
});

describe("iconos", () => {
  test("se cargan todos los iconos", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const svgs = screen.getAllByRole("img");
    expect(svgs.length).toBe(8);
  });
});
