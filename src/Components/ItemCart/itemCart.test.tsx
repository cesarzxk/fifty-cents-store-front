import { fireEvent, render, screen } from "@testing-library/react";
import ItemCart from ".";
import { mocked } from "jest-mock";

import "@testing-library/jest-dom";
import useDimensions from "../../Hooks/useDimensions";

jest.mock("../../Hooks/useDimensions");

describe("ItemCart component", () => {
  it("itemCart informations renders correctly", () => {
    const dimensionsmoked = mocked(useDimensions);

    dimensionsmoked.mockReturnValueOnce({
      height: 700,
      width: 1366,
    });

    const item = {
      name: "testeName",
      price: 0.99,
      productId: "testeId",
      locale: "testeLocale",
      quantity: 1,
    };

    render(
      <ItemCart setQuantity={() => {}} remove={() => {}} properties={item} />
    );

    expect(screen.getByText("testeName"));
    expect(screen.getByText(/0\.99/i));
  });

  it("itemCart setQuantity has called correctly", () => {
    const dimensionsmoked = mocked(useDimensions);

    dimensionsmoked.mockReturnValueOnce({
      height: 700,
      width: 1366,
    });

    const item = {
      name: "testeName",
      price: 0.99,
      productId: "testeId",
      locale: "testeLocale",
      quantity: 1,
    };
    const setQuantity = jest.fn();

    render(
      <ItemCart setQuantity={setQuantity} remove={() => {}} properties={item} />
    );

    fireEvent.change(screen.getByRole("spinbutton"), {
      target: { value: "2" },
    });

    expect(setQuantity).toHaveBeenCalled();
  });

  it("itemCart remove has called correctly", () => {
    const dimensionsmoked = mocked(useDimensions);

    dimensionsmoked.mockReturnValueOnce({
      height: 700,
      width: 1366,
    });

    const item = {
      name: "testeName",
      price: 0.99,
      productId: "testeId",
      locale: "testeLocale",
      quantity: 1,
    };
    const remove = jest.fn();

    render(
      <ItemCart setQuantity={() => {}} remove={remove} properties={item} />
    );

    screen.getByTestId("removeButton").click();

    expect(remove).toHaveBeenCalled();
  });
});
