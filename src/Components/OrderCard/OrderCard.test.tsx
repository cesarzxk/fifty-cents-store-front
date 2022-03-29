import { render, screen } from "@testing-library/react";
import OrderCard from ".";
import "@testing-library/jest-dom";

const properties = {
  items: [
    {
      productId: 1,
      locale: "testeLocale",
      price: 555,
      quantity: 222,
      name: "testeName",
      _id: "777",
    },
    {
      productId: 2,
      locale: "testeLocale2",
      price: 441,
      quantity: 333,
      name: "testeName2",
      _id: "888",
    },
  ],
  _id: "159753",
  clientId: 99654,
  total: 996,
};

describe("OrderCard component", () => {
  it("OrderCard informations renders correctly", () => {
    render(<OrderCard properties={properties} />);

    expect(screen.getByText("555.00")).toBeInTheDocument();
    expect(screen.getByText("222")).toBeInTheDocument();
    expect(screen.getByText("testeName")).toBeInTheDocument();

    expect(screen.getByText("441.00")).toBeInTheDocument();
    expect(screen.getByText("333")).toBeInTheDocument();
    expect(screen.getByText("testeName2")).toBeInTheDocument();

    expect(screen.getByText("159753")).toBeInTheDocument();
    expect(screen.getByText("996.00")).toBeInTheDocument();
  });
});
