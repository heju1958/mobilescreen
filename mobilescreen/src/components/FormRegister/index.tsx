import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegisterFunction, UserContext } from "../../contexts/userContext";
import registerSchema from "../../validators/registerValidator";
import { MsgErro, Form } from "./style";
import { useContext } from "react";

import women from "../../assets/women.svg";

const FormRegister = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFunction>({ resolver: yupResolver(registerSchema) });

  function onSubmitRegisterFunction(data: IRegisterFunction) {
    const { ...newUser } = data;
    registerUser(newUser);
  }

  return (
    <>
      <img src={women} alt="" />
      <Form typeof="submit" onSubmit={handleSubmit(onSubmitRegisterFunction)}>
        <p>Crie já sua conta!</p>
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
          Registrar
        </button>
      </Form>
    </>
  );
};

export default FormRegister;
