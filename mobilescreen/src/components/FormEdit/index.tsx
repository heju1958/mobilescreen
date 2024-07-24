import { Form, MsgErro } from "../../components/FormRegister/style";
import { ProfileInfo } from "./style";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/userContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { IEditFunction } from "../../contexts/userContext";
import { formSchemaEdit } from "../../validators/editProfile";
import formLogo from "../../assets/formLogo.png";

const FormEdit = () => {
  const { deleteUser, editUser, user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditFunction>({
    resolver: yupResolver(formSchemaEdit),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      password: user?.password,
    },
  });

  return (
    <>
      <ProfileInfo>
        <img></img>
        <div>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
          <button onClick={deleteUser}>Excluir Perfil</button>
        </div>
      </ProfileInfo>
      <Form
        typeof="submit"
        onSubmit={handleSubmit((register) => editUser(register))}
      >
        <img src={formLogo} alt="" />
        <p>Editar Perfil</p>
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
          Salvar Alteracoes
        </button>
      </Form>
    </>
  );
};

export default FormEdit;
