// Página de cadastro das empresas na plataforma

import { useForm } from "react-hook-form";
import { Containerlogin, FormCompany, LinkLogin, MensagemErro } from "./styles";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";

type FormData = {
  cnpj: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confsenha: string;
};

const CompanyRegform = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const confirmaSenha = watch("password");

  const onSubmit = async (data: FormData) => {
    console.log("Dados do formulário:", data);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confsenha, ...dadosParaEnviar } = data;
    try {
      const response = await axios.post(
        "http://localhost:8000/registerCompany",
        dadosParaEnviar
      );

      console.log("Resposta da API:", response.data);
      alert("Cadastro realizado com sucesso!");
      // Aqui você pode limpar o formulário ou redirecionar
      navigate("/companyDashboard");
    } catch (error: any) {
      console.error("Erro na requisição:", error);
      if (error.response) {
        alert(`Erro: ${error.response.data.detail || "Erro no servidor"}`);
      } else {
        alert(`Erro: ${error.message}`);
      }
    }
  };

  // Forms de cadastro
  return (
    <Containerlogin>
      <FormCompany onSubmit={handleSubmit(onSubmit)}>
        <label>CNPJ</label>
        <input
          type="text"
          placeholder="Digite o CNPJ"
          {...register("cnpj", {
            required: true,
            pattern: {
              value: /^\d{14}$/,
              message: "CNPJ inválido. Digite apenas números.",
            },
          })}
        />
        {errors?.cnpj?.type === "required" && (
          <MensagemErro>É necessário inserir o CNPJ.</MensagemErro>
        )}
        {errors?.cnpj?.type === "pattern" && (
          <MensagemErro>Formato de CNPJ inválido.</MensagemErro>
        )}

        <label>Nome</label>
        <input
          type="text"
          placeholder="Defina um login para acessso"
          {...register("username", { required: true })}
        />
        {errors?.username?.type === "required" && (
          <MensagemErro>É necessário criar um nome de usuário.</MensagemErro>
        )}

        <label>Email</label>
        <input
          type="email"
          placeholder="Digite o e-mail"
          {...register("email", {
            required: true,
            validate: (value) => validator.isEmail(value),
          })}
        />
        {errors?.email?.type === "required" && (
          <MensagemErro>É necessário informar seu e-mail.</MensagemErro>
        )}
        {errors?.email?.type === "validate" && (
          <MensagemErro>Insira um e-mail válido.</MensagemErro>
        )}

        <label>Telefone</label>
        <input
          type="text"
          {...register("phone", {
            required: true,
            pattern: {
              value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
              message: "Formato de telefone inválido",
            },
          })}
        />
        {errors?.phone?.type === "required" && (
          <MensagemErro>
            É necessário informar seu número de telefone.
          </MensagemErro>
        )}
        {errors?.phone?.type === "pattern" && (
          <MensagemErro>Formato de telefone inválido.</MensagemErro>
        )}

        <label>Digite uma senha</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 5 })}
        />
        {errors?.password?.type === "required" && (
          <MensagemErro>É necessário definir uma senha.</MensagemErro>
        )}
        {errors?.password?.type === "minLength" && (
          <MensagemErro>
            A senha deve conter no mínimo 5 caracteres
          </MensagemErro>
        )}

        <label>Confirme a senha</label>
        <input
          type="password"
          {...register("confsenha", {
            required: true,
            validate: (value) => value === confirmaSenha,
          })}
        />
        {errors?.confsenha?.type === "required" && (
          <MensagemErro>Digite a senha novamente.</MensagemErro>
        )}
        {errors?.confsenha?.type === "validate" && (
          <MensagemErro>As senhas não são iguais.</MensagemErro>
        )}

        <button onClick={() => handleSubmit(onSubmit)()}>Cadastrar-se</button>

        <LinkLogin to="/companyLogin">Já tem cadastro? Clique aqui!</LinkLogin>
      </FormCompany>
    </Containerlogin>
  );
};

export default CompanyRegform;
