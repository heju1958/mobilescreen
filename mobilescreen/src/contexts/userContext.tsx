import api from "../services";
import { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySucess } from "../components/Toasts";
import jwt_decode from "jwt-decode";

// Interface para tipar o contexto:

interface IUserContext {
  registerUser: (data: IRegisterFunction) => void;
  loginUser: (data: ILoginFunction) => void;
  logout: () => void;
  token: string | null;
  user: UserData | null;
  editUser: (data: IEditFunction) => void;
  deleteUser: () => void;
  getUser: (id: string) => void;
}

// Interface para tipar as props:

interface IUserProps {
  children: ReactNode;
}

// Interfaces relacionadas ao cadastro de usuário:

export interface IRegisterFunction {
  name: string;
  email: string;
  password: string;
  isAdm?: boolean;
}

interface IRegisterResponse {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
  isActive: boolean;
}

// Interfaces relacionadas ao login:

export interface ILoginFunction {
  name: string;
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
}

export interface IEditFunction {
  name: string;
  email: string;
  password: string;
}

interface UserData {
  email: string;
  name: string;
  password: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [update, setUpdate] = useState<UserData | null>(null);
  const token = localStorage.getItem("@TOKEN");
  const id = localStorage.getItem("@id");

  const navigate = useNavigate();

  function registerUser(data: IRegisterFunction) {
    api
      .post<IRegisterResponse>("/user/", data)
      .then(() => {
        notifySucess("Conta criada com sucesso!");
        navigate("/", { replace: true });
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
        localStorage.setItem("@TOKEN", res.data.token);
        const token = res.data.token;
        let decode: any = jwt_decode(token);
        localStorage.setItem("@id", decode.user_id);
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        notifyError("Email ou senha incorretos...");
      });
  }

  function editUser(data: IEditFunction) {
    api
      .patch(`/user/${String(id)}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUpdate(res.data);
        notifySucess("Alteração realizado com sucesso!");
      })
      .catch((err) => console.log(err));
    notifyError("Não foi possível alterar seus dados!");
  }

  function deleteUser() {
    api
      .delete(`/user/${String(id)}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        notifySucess("Conta deletada com sucesso!");
        navigate("/", { replace: true });
        window.localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
        notifyError("Não foi possível excluir sua conta!");
      });
  }

  function getUser() {
    const token = localStorage.getItem("@TOKEN");
    api
      .get(`/user/owner/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("@id", res.data.id);
      })
      .catch((err) => console.log(err));
  }

  function logout() {
    window.localStorage.clear();
    navigate("/login");
  }

  useEffect(() => {
    getUser();
  }, [update]);

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        logout,
        token,
        user,
        editUser,
        deleteUser,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
