import * as yup from "yup";

export const formSchemaEdit = yup.object().shape({
  username: yup.string(),
  email: yup.string(),
  password: yup.string(),
});
