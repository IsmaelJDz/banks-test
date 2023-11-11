import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Banks } from "../src/containers/banks/banks";
import { banks } from "./mocks/bank.mock";

describe("Home", () => {
  it("renders a heading <Banks /> component", async () => {
    render(<Banks banks={banks} />);

    const bbva = screen.getByRole("heading", {
      name: /BBVA Bancomer/i
    });

    const pagaTodo = screen.getByRole("heading", {
      name: /Paga Todo/i
    });

    const bbvaImage = screen.getByRole("img", {
      name: /BBVA Bancomer/i
    });

    expect(bbvaImage).toBeInTheDocument();
    expect(bbva).toBeInTheDocument();
    expect(pagaTodo).toBeInTheDocument();
  });
});
