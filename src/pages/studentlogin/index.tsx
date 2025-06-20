// Página de Login dos estudantes na plataforma

import { useForm } from "react-hook-form";
import { Containerlogin, FormStudent, LinkLogin, MensagemErro } from "./styles.ts";
import { useNavigate } from "react-router-dom";
import axios from "axios";


type LoginData = {
  username: string;
  password: string;
};

const StudentLogform = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>();

const onSubmit = async (data: LoginData) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/login",
      {
        username: data.username,
        password: data.password
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, 
      }
    );
console.log(response.data); 
    localStorage.setItem("user", JSON.stringify(response.data));
    navigate("/studentDashboard");
    
  } catch (error: any) {
    let errorMessage = "Erro ao fazer login";
    
    if (error.response) {
      if (error.response.status === 401) {
        errorMessage = "Credenciais inválidas";
      } else if (error.response.status === 404) {
        errorMessage = "Usuário não encontrado";
      } else {
        errorMessage = error.response.data?.detail || errorMessage;
      }
    }
    
    alert(errorMessage);
  }
};

  return (
    <Containerlogin  onSubmit={handleSubmit(onSubmit)}>
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
          {...register("password", { required: true, minLength: 5 })}
        />
        {errors?.password?.type === "required" && (
          <MensagemErro>Senha inválida ou incorreta.</MensagemErro>
        )}
        {errors?.password?.type === "minLength" && (
          <MensagemErro>A senha contém no mínimo 5 caracteres.</MensagemErro>
        )}

        <button onClick={() => handleSubmit(onSubmit)()}>Entrar</button>
        
        <LinkLogin to="/studentRegister">Já tem cadastro? Clique aqui!</LinkLogin>

      </FormStudent>
    </Containerlogin>
  );
};

export default StudentLogform;
