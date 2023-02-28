import api from "../services";
import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySucess } from "../components/Toasts";

// Interface para tipar o contexto:

interface IUserContext {
  registerUser: (data: IRegisterFunction) => void;
  loginUser: (data: ILoginFunction) => void;
  logout: () => void;
  token: string | null;
  user: UserData | null;
  editUser: (data: IEditFunction) => void;
}

// Interface para tipar as props:

interface IUserProps {
  children: ReactNode;
}

// Interfaces relacionadas ao cadastro de usuário:

export interface IRegisterFunction {
  username: string;
  email: string;
  password: string;
  isAdm?: boolean;
}

interface IRegisterResponse {
  id: string;
  username: string;
  email: string;
  isAdm: boolean;
  isActive: boolean;
}

// Interfaces relacionadas ao login:

export interface ILoginFunction {
  username: string;
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
}

export interface IEditFunction {
  username: string;
  email: string;
  password: string;
}

interface UserData {
  email: string;
  username: string;
  password: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
  const [user, setUser] = useState<UserData | null>(null);
  const token = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();

  function registerUser(data: IRegisterFunction) {
    api
      .post<IRegisterResponse>("/users/", data)
      .then(() => {
        notifySucess("Conta criada com sucesso!");
        navigate("/login", { replace: true });
      })
      .catch(() => {
        notifyError("Erro ao realizar cadastro");
      });
  }

  function loginUser(data: ILoginFunction) {
    api
      .post<ILoginResponse>("/login/", data)
      .then((res) => {
        notifySucess("Login realizado com sucesso!");
        window.localStorage.setItem("@TOKEN", res.data.token);
        navigate("/home", { replace: true });
        setUser(data);
      })
      .catch((err) => {
        notifyError("Email ou senha incorretos...");
      });
  }

  function editUser(data: IEditFunction) {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@id");

    api
      .patch(`/users/${String(id)}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }

  function logout() {
    window.localStorage.clear();
    navigate("/login");
  }

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        logout,
        token,
        user,
        editUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
