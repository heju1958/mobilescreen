import { Form, MsgErro } from "../Register/style";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/userContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { IEditFunction } from "../../contexts/userContext";
import { formSchemaEdit } from "../../validators/editProfile";

const Profile = () => {
  const { user, logout, editUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditFunction>({
    resolver: yupResolver(formSchemaEdit),
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    },
  });

  return (
    <div className="container">
      <div>
        <p>{user?.username}</p>
        <p>{user?.email}</p>
      </div>

      <Form
        typeof="submit"
        onSubmit={handleSubmit((register) => editUser(register))}
      >
        <p>Editar Perfil</p>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("username")}
        />
        <MsgErro>{errors.username?.message}</MsgErro>

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
          Salvar Alteracoes
        </button>
      </Form>
    </div>
  );
};

export default Profile;
