import { fireEvent, render, screen } from "@testing-library/react";
import Informations from ".";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => {
  return {
    useNavigate() {
      return {
        to: "/",
      };
    },
  };
});

const userInfo = {
  email: "teste@teste.com",
  lastname: "testeLastname",
  name: "testeName",
};

describe("Information component", () => {
  it("informations renders correctly", () => {
    render(<Informations userInfo={userInfo} onSubmit={() => {}} />);

    expect(screen.getByText("testeLastname")).toBeInTheDocument();
    expect(screen.getByText("teste@teste.com")).toBeInTheDocument();
    expect(screen.getByText("testeName")).toBeInTheDocument();
  });

  it("submit have been called", () => {
    const onClick = jest.fn();

    render(<Informations userInfo={userInfo} onSubmit={onClick} />);

    fireEvent.click(screen.getByText("Sair"));
    expect(onClick).toHaveBeenCalled();
  });
});
