import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filters from ".";
import { useGlobal } from "../../Context/Global/GlobalContext";
import { mocked } from "jest-mock";

const materials = [
  "Concrete",
  "Cotton",
  "Fresh",
  "Frozen",
  "Granite",
  "Metal",
  "Plastic",
  "Rubber",
  "Soft",
  "Steel",
  "Wooden",
];

const categorys = [
  "Awesome",
  "Ergonomic",
  "Fantastic",
  "Generic",
  "Gorgeous",
  "Handcrafted",
  "Handmade",
  "Incredible",
  "Intelligent",
  "Licensed",
  "Practical",
  "Refined",
  "Rustic",
  "Sleek",
  "Small",
  "Tasty",
  "Unbranded",
];

jest.mock("../../Context/Global/GlobalContext");

describe("component Filters", () => {
  it("informations renders correctly", () => {
    const useGlobalMocked = mocked(useGlobal);

    useGlobalMocked.mockReturnValueOnce({
      setFiltersCategory: jest.fn(),
      setFiltersMaterial: jest.fn(),
      filtersCategory: [],
      filtersMaterial: [],
    } as any);

    render(<Filters />);
    categorys.map((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
    materials.map((material) => {
      expect(screen.getByText(material)).toBeInTheDocument();
    });
  });

  it("should buttoms price sort have been clicked", () => {
    const useGlobalMocked = mocked(useGlobal);
    let pushmocked = undefined;

    useGlobalMocked.mockReturnValue({
      setSort: (data: string) => (pushmocked = data),
      sort: pushmocked,
    } as any);

    render(<Filters />);

    let input = screen.getByTestId("biggerButtom");
    fireEvent.click(input);
    expect(pushmocked).toEqual("bigger");

    input = screen.getByTestId("smallerButtom");
    fireEvent.click(input);
    expect(pushmocked).toEqual("smaller");
  });

  it("should input is enabled add filter", () => {
    const useGlobalMocked = mocked(useGlobal);

    let pushmocked = [""];

    useGlobalMocked.mockReturnValue({
      setFiltersCategory(category: []) {
        pushmocked = category;
      },
      setFiltersMaterial(material: []) {
        pushmocked = material;
      },
      filtersCategory: [],
      filtersMaterial: [],
    } as any);

    render(<Filters />);

    categorys.map((category) => {
      const input = screen.getByTestId(category);
      fireEvent.click(input);

      expect(pushmocked).toEqual([category]);
    });

    materials.map((material) => {
      const input = screen.getByTestId(material);
      fireEvent.click(input);
      expect(pushmocked).toEqual([material]);
    });
  });

  it("should input is disabled remove filter", () => {
    const useGlobalMocked = mocked(useGlobal);

    let pushmocked = [] as any;

    useGlobalMocked.mockReturnValueOnce({
      setFiltersCategory(category: []) {
        pushmocked = category;
      },
      setFiltersMaterial(material: []) {
        pushmocked = material;
      },
      filtersCategory: pushmocked,
      filtersMaterial: pushmocked,
    } as any);

    render(<Filters />);

    categorys.map((category) => {
      fireEvent.click(screen.getByTestId(category));

      fireEvent.click(screen.getByTestId(category));

      expect(pushmocked).toEqual([]);
    });

    materials.map((material) => {
      fireEvent.click(screen.getByTestId(material));

      fireEvent.click(screen.getByTestId(material));

      expect(pushmocked).toEqual([]);
    });
  });
});
