import { fireEvent, getByText, render, screen } from "@testing-library/react";
import ItemCard from ".";
import { mocked } from "jest-mock";

import "@testing-library/jest-dom";
import useDimensions from "../../Hooks/useDimensions";

jest.mock("../../Hooks/useDimensions");

describe("ItemCard component", () => {
  it("itemCard informations renders correctly if not have discount", () => {
    const dimensionsmoked = mocked(useDimensions);

    dimensionsmoked.mockReturnValueOnce({
      height: 700,
      width: 1366,
    });

    const item = {
      hasDiscount: false,
      name: "testeName",
      images: ["image.teste.com"],
      description: "testeDescription",
      price: "0.99",
      discountValue: "0.05",
      material: "testeMaterial",
      category: "testeCategory",
      id: "testeId",
      locale: "testeLocale",
    };

    render(<ItemCard property={item} />);

    expect(screen.getByText("testeName"));
    expect(screen.getByText(/testeMaterial/i));
    expect(screen.getByText(/testeCategory/i));
    expect(screen.getByText(/r\$0\.99/i));
  });

  it("itemCard informations renders correctly", () => {
    const dimensionsmoked = mocked(useDimensions);

    dimensionsmoked.mockReturnValueOnce({
      height: 700,
      width: 1366,
    });

    const item = {
      hasDiscount: true,
      name: "testeName",
      images: ["image.teste.com"],
      description: "testeDescription",
      price: "0.99",
      discountValue: "0.05",
      material: "testeMaterial",
      category: "testeCategory",
      id: "testeId",
      locale: "testeLocale",
    };

    render(<ItemCard property={item} />);

    item.hasDiscount = true;

    expect(screen.getByText("testeName"));
    expect(screen.getByText(/testeMaterial/i));
    expect(screen.getByText(/testeCategory/i));
    expect(screen.getByText(/r\$0\.99/i));
    expect(screen.getByText("sale 5%"));
  });
});
