// Página de Login das empresas na plataforma

import { useForm } from "react-hook-form";
import { Containerlogin, FormCompany, LinkLogin, MensagemErro } from "./styles";

const CompanyLogform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 


  const onSubmit = (data: unknown) => {
    console.log(JSON.stringify(data));
  };

  // Forms de Login
  return (
    <Containerlogin>
      <FormCompany>
        <label>Login</label>
        <input
          type="text"
          placeholder="Digite o login"
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
        
        <LinkLogin to="/companyRegister">Não tem cadastro? Clique aqui!</LinkLogin>

      </FormCompany>
    </Containerlogin>
  );
};

export default CompanyLogform;
