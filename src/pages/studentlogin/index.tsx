// Página de Login dos estudantes na plataforma

import { useForm } from "react-hook-form";
import { Containerlogin, FormStudent, MensagemErro } from "./styles.ts";

const StudentLogform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // funçoes do react-hook-form

  console.log(errors);

  const onSubmit = (data: unknown) => {
    console.log(JSON.stringify(data));
  };

  // Forms de Login
  return (
    <Containerlogin>
      <FormStudent>
        <label>Usuário</label>
        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          {...register("username", { required: true })}
        />
        {errors?.username?.type === "required" && (
          <MensagemErro>Usuário inválido.</MensagemErro>
        )}

        <label>Digite uma senha</label>
        <input
          type="password"
          {...register("senha", { required: true, minLength: 5 })}
        />
        {errors?.senha?.type === "required" && (
          <MensagemErro>Senha inválida ou incorreta.</MensagemErro>
        )}
        {errors?.senha?.type === "minLength" && (
          <MensagemErro>A senha contém no mínimo 5 caracteres.</MensagemErro>
        )}

        <button onClick={() => handleSubmit(onSubmit)()}>Entrar</button>
        <a href="./studentregister/index.tsx">Não tem cadastro? Clique aqui!</a>
      </FormStudent>
    </Containerlogin>
  );
};

export default StudentLogform;
