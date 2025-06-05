// Página de Login das empresas na plataforma

import { useForm } from "react-hook-form";
import { Containerlogin, FormCompany, LinkLogin, MensagemErro } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CompanyLogform = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>(); 

type LoginData = {
  username: string;
  password: string;
};

type ErrorResponse = {
  detail: string;
};

const onSubmit = async (data: LoginData) => {

 
try {
  const response = await axios.post(
    "http://localhost:8000/companyLogin",
    {
      username: data.username,
      password: data.password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );

  localStorage.setItem("user", JSON.stringify(response.data));
  navigate("/companyDashboard");

} catch (error) {
  let errorMessage = "Erro ao fazer login";

  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const errorData = error.response?.data as ErrorResponse;

    if (status === 401) {
      errorMessage = "Credenciais inválidas";
    } else if (status === 404) {
      errorMessage = "Usuário não encontrado";
    } else {
      errorMessage = errorData?.detail || "Erro desconhecido";
    }
  }

  alert(errorMessage);
}

};

  // Forms de Login
  return (
    <Containerlogin onSubmit={handleSubmit(onSubmit)}>
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
          {...register("password", { required: true, minLength: 5 })}
        />
        {errors?.password?.type === "required" && (
          <MensagemErro>Senha inválida ou incorreta.</MensagemErro>
        )}
        {errors?.password?.type === "minLength" && (
          <MensagemErro>A senha contém no mínimo 5 caracteres.</MensagemErro>
        )}

        <button onClick={() => handleSubmit(onSubmit)()}>Entrar</button>
        
        <LinkLogin to="/companyRegister">Não tem cadastro? Clique aqui!</LinkLogin>

      </FormCompany>
    </Containerlogin>
  );
};

export default CompanyLogform;
