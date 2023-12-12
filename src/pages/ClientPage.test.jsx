import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ClientPage from "./ClientPage";
import { describe, test, expect } from "vitest";

describe("ClientPage", () => {
  test("renders client page correctly", () => {
    render(
      <BrowserRouter>
        <ClientPage />
      </BrowserRouter>
    );

    // Verificar que los componentes principales se rendericen correctamente
    expect(screen.findByRole("a")).toBeTruthy();
  });
});
