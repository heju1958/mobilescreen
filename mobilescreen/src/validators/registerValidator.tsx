import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  email: yup
    .string()
    .required("Email obrigatório!")
    .email("Digite um e-mail válido!"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      "Formato: 8 caracteres, 1 letra maiúscula, 1 minúscula, 1 número e 1 caracter especial!"
    ),
});

export default registerSchema;
