import { fireEvent, render, screen } from "@testing-library/react";
import Cart from ".";
import { useGlobal } from "../../Context/Global/GlobalContext";
import { mocked } from "jest-mock";
import "@testing-library/jest-dom";
import { useAuth } from "../../Context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom");

jest.mock("../../Context/Global/GlobalContext");
jest.mock("../../Context/Auth/AuthContext");
jest.mock("../../Hooks/useDimensions");

describe("Cart container", () => {
  it("Cart informations displayed correctly", () => {
    const useAuthMock = mocked(useAuth);

    useAuthMock.mockReturnValue({
      isLogued: false,
    } as any);

    const useGlobalMocked = mocked(useGlobal);

    useGlobalMocked.mockReturnValue({
      itemsCart: [
        {
          name: "teste1",
          productId: "01",
          locale: "brazilian",
          price: 201,
          quantity: 200,
        },
        {
          name: "teste2",
          productId: "02",
          locale: "brazilian",
          price: 210,
          quantity: 20,
        },
      ],
      totalCartPrice: 20000,
      setItemsCart: (items: []) => {},
    } as any);

    render(<Cart />);
    expect(screen.getByTestId("qtdpop").innerHTML).toEqual("2");

    fireEvent.click(screen.getByTestId("cartButton"));

    expect(screen.getByText("teste1")).toBeInTheDocument();
    expect(screen.getByText("201.00")).toBeInTheDocument();
    expect(screen.getByText("teste2")).toBeInTheDocument();
    expect(screen.getByText("210.00")).toBeInTheDocument();
    expect(screen.getByText("R$20000.00")).toBeInTheDocument();
  });

  it("Cart delete item function work correctly", () => {
    const useAuthMock = mocked(useAuth);

    useAuthMock.mockReturnValue({
      isLogued: false,
    } as any);

    const setItemsCart = jest.fn();

    const useGlobalMocked = mocked(useGlobal);

    useGlobalMocked.mockReturnValue({
      itemsCart: [
        {
          name: "teste1",
          productId: "01",
          locale: "brazilian",
          price: 201,
          quantity: 200,
        },
        {
          name: "teste2",
          productId: "02",
          locale: "brazilian",
          price: 210,
          quantity: 20,
        },
      ],
      totalCartPrice: 20000,
      setItemsCart: setItemsCart,
    } as any);

    render(<Cart />);
    expect(screen.getByTestId("qtdpop").innerHTML).toEqual("2");
    fireEvent.click(screen.getByTestId("cartButton"));
    fireEvent.click(screen.getAllByTestId("removeButton")[0]);
    expect(setItemsCart).toHaveBeenCalled();
  });

  it("Cart set Quantity item function work correctly", () => {
    const useAuthMock = mocked(useAuth);

    useAuthMock.mockReturnValue({
      isLogued: false,
    } as any);

    const setItemsCart = jest.fn();

    const useGlobalMocked = mocked(useGlobal);

    useGlobalMocked.mockReturnValue({
      itemsCart: [
        {
          name: "teste1",
          productId: "01",
          locale: "brazilian",
          price: 201,
          quantity: 200,
        },
        {
          name: "teste2",
          productId: "02",
          locale: "brazilian",
          price: 210,
          quantity: 20,
        },
      ],
      totalCartPrice: 20000,
      setItemsCart: setItemsCart,
    } as any);

    render(<Cart />);
    expect(screen.getByTestId("qtdpop").innerHTML).toEqual("2");
    fireEvent.click(screen.getByTestId("cartButton"));

    fireEvent.change(screen.getAllByRole("spinbutton")[0], {
      target: { value: "2" },
    });

    expect(setItemsCart).toHaveBeenCalled();
  });
  it("Cart delete item function work correctly", () => {
    const useAuthMock = mocked(useAuth);

    useAuthMock.mockReturnValue({
      isLogued: false,
    } as any);

    const setItemsCart = jest.fn();

    const useGlobalMocked = mocked(useGlobal);

    useGlobalMocked.mockReturnValue({
      itemsCart: [
        {
          name: "teste1",
          productId: "01",
          locale: "brazilian",
          price: 201,
          quantity: 200,
        },
        {
          name: "teste2",
          productId: "02",
          locale: "brazilian",
          price: 210,
          quantity: 20,
        },
      ],
      totalCartPrice: 20000,
      setItemsCart: setItemsCart,
    } as any);

    render(<Cart />);
    expect(screen.getByTestId("qtdpop").innerHTML).toEqual("2");
    fireEvent.click(screen.getByTestId("cartButton"));
    fireEvent.click(screen.getAllByTestId("removeButton")[0]);
    expect(setItemsCart).toHaveBeenCalled();
  });

  it("Cart checkout button work correctly", () => {
    const useAuthMock = mocked(useAuth);

    useAuthMock.mockReturnValue({
      isLogued: true,
    } as any);

    const useGlobalMocked = mocked(useGlobal);

    useGlobalMocked.mockReturnValue({
      itemsCart: [
        {
          name: "teste1",
          productId: "01",
          locale: "brazilian",
          price: 201,
          quantity: 200,
        },
        {
          name: "teste2",
          productId: "02",
          locale: "brazilian",
          price: 210,
          quantity: 20,
        },
      ],
      totalCartPrice: 20000,
      setItemsCart: jest.fn(),
    } as any);

    const checkoutCart = jest.fn();

    const useNavigateMocket = mocked(useNavigate);

    useNavigateMocket.mockReturnValue(checkoutCart);

    render(<Cart />);
    expect(screen.getByTestId("qtdpop").innerHTML).toEqual("2");

    fireEvent.click(screen.getByTestId("cartButton"));
    fireEvent.click(screen.getByTestId("checkout"));

    expect(checkoutCart).toHaveBeenCalled();
  });
});
