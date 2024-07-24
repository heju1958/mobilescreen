import { Form, MsgErro } from "../FormRegister/style";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginFunction, UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

import catPc from "../../assets/catpc.svg";
import loginSchema from "../../validators/loginValidator";

const FormLogin = () => {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFunction>({ resolver: yupResolver(loginSchema) });
  return (
    <Form typeof="submit" onSubmit={handleSubmit(loginUser)}>
      <p>Bem vindo(a)!</p>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      <MsgErro>{errors.name?.message}</MsgErro>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <MsgErro>{errors.email?.message}</MsgErro>

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <MsgErro>{errors.password?.message}</MsgErro>

      <button type="submit" className="formButton">
        Entrar
      </button>
      <div className="containerNewUser">
        <p>Ainda não possui Conta?</p>
        <button onClick={() => navigate("/register")}>
          Crie agora, é Grátis!
        </button>
        <img src={catPc} alt="" />
      </div>
    </Form>
  );
};

export default FormLogin;
