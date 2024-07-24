import * as yup from "yup";

const loginSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  email: yup
    .string()
    .email("Digite um e-mail válido!")
    .required("Email obrigatório!"),
  password: yup.string().required("Senha obrigatória!"),
});

export default loginSchema;
