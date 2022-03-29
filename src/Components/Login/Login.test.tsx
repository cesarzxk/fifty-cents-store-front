import { fireEvent, render, screen } from "@testing-library/react";
import Login from ".";
import "@testing-library/jest-dom";
import { mocked } from "jest-mock";
import { useState } from "react";
import { act } from "react-dom/test-utils";

describe("Login component", () => {
  it("Login informations renders correctly", () => {
    render(
      <Login
        onSubmit={async (email: string, password: string) => {
          return 1;
        }}
      />
    );

    expect(screen.getByText("Senha")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });

  it("Login submit have been called", async () => {
    const onSubmit = jest.fn().mockResolvedValueOnce(200);
    render(<Login onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId("email"), {
      target: { value: "testeUser" },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "testePassword" },
    });

    await act(async () => {
      fireEvent.submit(screen.getByText("Entrar"));
    });

    expect(onSubmit).toHaveBeenCalled();
  });
});
