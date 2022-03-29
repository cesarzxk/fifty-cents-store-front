import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./";
import "@testing-library/jest-dom";
import { mocked } from "jest-mock";
import { useGlobal } from "../../Context/Global/GlobalContext";

jest.mock("../../Context/Global/GlobalContext");

describe("Search component", () => {
  it("Search informations renders correctly", () => {
    const useGlobalMocked = mocked(useGlobal);

    useGlobalMocked.mockReturnValue({
      setKeyword: jest.fn(),
    } as any);

    render(<Search />);

    expect(screen.getByTestId("searchInput")).toBeInTheDocument();
    expect(screen.getByTestId("searchButton")).toBeInTheDocument();
  });

  it("Search submit have been called", async () => {
    let pushmocked = "";

    const useGlobalMocked = mocked(useGlobal);

    useGlobalMocked.mockReturnValue({
      setKeyword: (value: string) => {
        pushmocked = value;
      },
    } as any);

    render(<Search />);

    fireEvent.change(screen.getByTestId("searchInput"), {
      target: { value: "testeSearch" },
    });
    fireEvent.click(screen.getByTestId("searchButton"));

    expect(pushmocked).toEqual("testeSearch");
  });
});
