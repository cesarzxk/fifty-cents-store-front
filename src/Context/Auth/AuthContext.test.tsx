import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import { mocked } from "jest-mock";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { register, authenticate } from "../../Api";
import { act } from "react-dom/test-utils";

jest.mock("react-cookie");
jest.mock("react-router-dom");
jest.mock("../../Api");

describe("AuthContext context", () => {
  it("AuthContext handlerLogout function called correctly", () => {
    const useCookiesMocked = mocked(useCookies);
    const useNavigateMocked = mocked(useNavigate);

    const functionMocked = jest.fn();

    useNavigateMocked.mockReturnValue(functionMocked);

    useCookiesMocked.mockReturnValue([
      "",
      functionMocked,
      functionMocked,
    ] as any);

    render(
      <AuthProvider>
        <AuthContextTeste />
      </AuthProvider>
    );

    fireEvent.click(screen.getByText("Logout"));
    expect(functionMocked).toBeCalledTimes(6);
  });

  it("AuthContext handlerLogin function status is 200", async () => {
    const useCookiesMocked = mocked(useCookies);
    const useNavigateMocked = mocked(useNavigate);
    const authenticateMocked = mocked(authenticate.post);

    const functionMocked = jest.fn();

    const data = {
      email: "email@teste.com",
      lastname: "testeLastname",
      name: "testeName",
      _id: "testId",
      token: "testeToken",
    };

    let dataCookieMocked = [] as any;

    let dataCookieExpect = [
      { token: "testeToken" },
      { name: "testeName" },
      { email: "email@teste.com" },
      { lastname: "testeLastname" },
      { _id: "testId" },
    ];

    useNavigateMocked.mockReturnValueOnce(functionMocked);

    useCookiesMocked.mockReturnValue([
      "",
      (type: string, value: any) => {
        dataCookieMocked.push({ [type]: value });
      },
      functionMocked,
    ] as any);

    authenticateMocked.mockResolvedValueOnce({
      data: data,
      status: 200,
    });

    render(
      <AuthProvider>
        <AuthContextTeste />
      </AuthProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Login"));
    });

    expect(dataCookieExpect).toEqual(dataCookieMocked);
  });

  it("AuthContext handlerLogin function status is 0", async () => {
    const useCookiesMocked = mocked(useCookies);
    const authenticateMocked = mocked(authenticate.post);

    const cookieMocked = jest.fn();

    useCookiesMocked.mockReturnValue(["", cookieMocked, cookieMocked] as any);

    authenticateMocked.mockRejectedValueOnce({});

    render(
      <AuthProvider>
        <AuthContextTeste />
      </AuthProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Login"));
    });

    expect(cookieMocked).not.toHaveBeenCalled();
  });

  it("AuthContext handlerRegister function status is 200", async () => {
    const useCookiesMocked = mocked(useCookies);
    const useNavigateMocked = mocked(useNavigate);
    const registerMocked = mocked(register.post);

    const functionMocked = jest.fn();

    const data = {
      email: "email@teste.com",
      lastname: "testeLastname",
      name: "testeName",
      _id: "testId",
      token: "testeToken",
    };

    let dataCookieMocked = [] as any;

    let dataCookieExpect = [
      { token: "testeToken" },
      { name: "testeName" },
      { email: "email@teste.com" },
      { lastname: "testeLastname" },
      { _id: "testId" },
    ];

    useNavigateMocked.mockReturnValueOnce(functionMocked);

    useCookiesMocked.mockReturnValue([
      "",
      (type: string, value: any) => {
        dataCookieMocked.push({ [type]: value });
      },
      functionMocked,
    ] as any);

    registerMocked.mockResolvedValueOnce({
      data: data,
      status: 200,
    });

    render(
      <AuthProvider>
        <AuthContextTeste />
      </AuthProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Register"));
    });

    expect(dataCookieExpect).toEqual(dataCookieMocked);
  });

  it("AuthContext handlerRegister function status is 0", async () => {
    const useCookiesMocked = mocked(useCookies);
    const registerMocked = mocked(register.post);

    const cookieMocked = jest.fn();

    useCookiesMocked.mockReturnValue(["", cookieMocked, cookieMocked] as any);

    registerMocked.mockRejectedValueOnce({});

    render(
      <AuthProvider>
        <AuthContextTeste />
      </AuthProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Register"));
    });

    expect(cookieMocked).not.toHaveBeenCalled();
  });
});

const AuthContextTeste = () => {
  const { handlerLogout, handlerLogin, handlerRegister } = useAuth();
  return (
    <>
      <button onClick={handlerLogout}>Logout</button>

      <button onClick={() => handlerLogin("email@teste.com", "testePassword")}>
        Login
      </button>

      <button
        onClick={() =>
          handlerRegister({
            email: "email@teste.com",
            lastname: "testeLastname",
            name: "testeName",
            password: "testePassword",
          })
        }
      >
        Register
      </button>
    </>
  );
};
