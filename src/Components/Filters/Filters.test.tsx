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

  it("should input is enabled add filter", () => {
    const useGlobalMocked = mocked(useGlobal);

    let pushmocked = [""];

    useGlobalMocked.mockReturnValueOnce({
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

    let pushmocked = [""];

    useGlobalMocked.mockReturnValueOnce({
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
      fireEvent.click(input);
      expect(pushmocked).toEqual([]);
    });

    materials.map((material) => {
      const input = screen.getByTestId(material);
      fireEvent.click(input);
      fireEvent.click(input);
      expect(pushmocked).toEqual([]);
    });
  });
});
