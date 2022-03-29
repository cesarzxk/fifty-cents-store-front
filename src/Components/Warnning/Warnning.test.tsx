import { fireEvent, render, screen } from "@testing-library/react";
import Warnning from ".";
import "@testing-library/jest-dom";

const statusList = {
  412: {
    type: "error" as "error",
    msg: "Por favor preencher todos os campos!",
  },
  409: {
    type: "warning" as "warning",
    msg: "Você não tem autorização para isso!!",
  },

  404: {
    type: "error" as "error",
    msg: "Erro interno!",
  },
  401: {
    type: "error" as "error",
    msg: "Email ou senha incorretos!",
  },
  500: {
    type: "error" as "error",
    msg: "Erro fatal interno!!",
  },
};

describe("Warnning component", () => {
  it("Warnning displayed on status 412 is correctly", () => {
    let status = 412;
    const setStatus = (value: number) => (status = value);

    render(<Warnning status={status} setStatus={setStatus} />);

    expect(screen.getByText(statusList[412].msg)).toBeInTheDocument();
  });

  it("Warnning displayed on status 409 is correctly", () => {
    let status = 409;
    const setStatus = (value: number) => (status = value);

    render(<Warnning status={status} setStatus={setStatus} />);

    expect(screen.getByText(statusList[409].msg)).toBeInTheDocument();
  });

  it("Warnning displayed on status 404 is correctly", () => {
    let status = 404;
    const setStatus = (value: number) => (status = value);

    render(<Warnning status={status} setStatus={setStatus} />);

    expect(screen.getByText(statusList[404].msg)).toBeInTheDocument();
  });

  it("Warnning displayed on status 401 is correctly", () => {
    let status = 401;
    const setStatus = (value: number) => (status = value);

    render(<Warnning status={status} setStatus={setStatus} />);

    expect(screen.getByText(statusList[401].msg)).toBeInTheDocument();
  });

  it("Warnning displayed on status 412 is correctly", () => {
    let status = 500;
    const setStatus = (value: number) => (status = value);

    render(<Warnning status={status} setStatus={setStatus} />);

    expect(screen.getByText(statusList[500].msg)).toBeInTheDocument();
  });

  it("Warnning close button is closed correctly", () => {
    let status = 412;
    const setStatus = (value: number) => (status = value);

    render(<Warnning status={status} setStatus={setStatus} />);

    fireEvent.click(screen.getByTestId("close"));

    expect(status).toEqual(0);
  });
});
