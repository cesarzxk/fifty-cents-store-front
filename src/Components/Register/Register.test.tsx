import { fireEvent, render, screen } from "@testing-library/react";
import Register from ".";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

describe("Register component", () => {
  it("Register informations renders correctly", () => {
    const onSubmit = jest.fn().mockResolvedValueOnce(200);

    render(<Register onSubmit={onSubmit} />);

    expect(screen.getByText("Nome:")).toBeInTheDocument();
    expect(screen.getByText("Sobrenome:")).toBeInTheDocument();
    expect(screen.getByText("Email:")).toBeInTheDocument();
    expect(screen.getByText("Senha:")).toBeInTheDocument();
    expect(screen.getByText("Repita:")).toBeInTheDocument();
    expect(screen.getByText("Registrar")).toBeInTheDocument();
  });

  it("Register submit have been called", async () => {
    const onSubmit = jest.fn().mockResolvedValueOnce(200);

    render(<Register onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId("name"), {
      target: { value: "testeName" },
    });

    fireEvent.change(screen.getByTestId("lastname"), {
      target: { value: "testeLastname" },
    });

    fireEvent.change(screen.getByTestId("email"), {
      target: { value: "email@teste.com" },
    });

    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "testePassword" },
    });

    fireEvent.change(screen.getByTestId("rePassword"), {
      target: { value: "testePassword" },
    });

    await act(async () => {
      fireEvent.click(screen.getByText("Registrar"));
    });

    expect(onSubmit).toHaveBeenCalled();
  });
});
