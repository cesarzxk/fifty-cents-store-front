import { fireEvent, render, screen } from "@testing-library/react";
import Header from ".";
import { mocked } from "jest-mock";
import "@testing-library/jest-dom";
import useDimensions from "../../Hooks/useDimensions";

jest.mock("../../Hooks/useDimensions");
jest.mock("react-router-dom");

describe("Header container", () => {
  it("Header informations displayed correctly in width 1366px", () => {
    const dimensionsmoked = mocked(useDimensions);

    dimensionsmoked.mockReturnValueOnce({
      height: 700,
      width: 1366,
    });

    render(<Header />);

    expect(screen.getByText("uu")).toBeInTheDocument();
    expect(screen.getByTestId("cartButton")).toBeInTheDocument();
    expect(screen.getByTestId("searchInput")).toBeInTheDocument();
  });

  it("Header informations displayed correctly in width < 400px", () => {
    const dimensionsmoked = mocked(useDimensions);

    dimensionsmoked.mockReturnValueOnce({
      height: 700,
      width: 300,
    });

    render(<Header />);

    expect(screen.getByText("uu")).toBeInTheDocument();
    expect(screen.getByTestId("cartButton")).toBeInTheDocument();
    expect(screen.getByTestId("setSeachButton")).toBeInTheDocument();
  });

  it("Header search button work correctly in width < 400px", () => {
    const dimensionsmoked = mocked(useDimensions);

    dimensionsmoked.mockReturnValue({
      height: 700,
      width: 300,
    });

    render(<Header />);

    fireEvent.click(screen.getByTestId("setSeachButton"));

    expect(screen.getByTestId("searchInput")).toBeInTheDocument();
  });
});
