import { fireEvent, render, screen } from "@testing-library/react";
import DrawerFilter from ".";
import "@testing-library/jest-dom";

describe("DrawerFilter container", () => {
  it("DrawerFilter button work correctly", () => {
    render(<DrawerFilter />);

    expect(screen.queryByText("Filters")).toBeNull();

    fireEvent.click(screen.getByTestId("drawerFilterButton"));

    expect(screen.getByText("Filters")).toBeInTheDocument();
  });
});
