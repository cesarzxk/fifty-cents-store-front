import { fireEvent, render, screen } from "@testing-library/react";
import User from ".";
import "@testing-library/jest-dom";
import { useAuth } from "../../Context/Auth/AuthContext";
import { mocked } from "jest-mock";

jest.mock("react-router-dom");
jest.mock("../../Context/Auth/AuthContext");

describe("User container", () => {
  it("User informations displayed correctly if user is not logued", () => {
    const useAuthMock = mocked(useAuth);

    useAuthMock.mockReturnValue({
      isLogued: false,
    } as any);

    render(<User />);

    expect(screen.getByText("uu")).toBeInTheDocument();
    expect(screen.getByText("Logar")).toBeInTheDocument();
    expect(screen.getByText("Criar conta")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });

  it("User informations displayed correctly if user is logued", () => {
    const useAuthMock = mocked(useAuth);

    useAuthMock.mockReturnValue({
      isLogued: true,
    } as any);

    render(<User />);

    expect(screen.getByText(/Bem-vindo/i)).toBeInTheDocument();
    expect(screen.getByText("Sair")).toBeInTheDocument();
  });

  it("User swith to register button work correctly", () => {
    const useAuthMock = mocked(useAuth);

    useAuthMock.mockReturnValue({
      isLogued: false,
    } as any);

    render(<User />);

    fireEvent.click(screen.getByText("Criar conta"));

    expect(screen.getByText("Logar")).toBeInTheDocument();
    expect(screen.getByText("Criar conta")).toBeInTheDocument();
    expect(screen.getByText("Registrar")).toBeInTheDocument();
  });

  it("User swith to login button work correctly", () => {
    const useAuthMock = mocked(useAuth);

    useAuthMock.mockReturnValue({
      isLogued: false,
    } as any);

    render(<User />);

    fireEvent.click(screen.getByText("Criar conta"));

    fireEvent.click(screen.getByText("Logar"));

    expect(screen.getByText("Logar")).toBeInTheDocument();
    expect(screen.getByText("Criar conta")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });
});
