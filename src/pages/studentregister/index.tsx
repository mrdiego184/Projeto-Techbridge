import { useForm } from "react-hook-form";
import {
  Containerlogin,
  FormStudent,
  LinkLogin,
  MensagemErro,
} from "./styles.ts";
import validator from "validator";
import axios from "axios";

type FormData = {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confsenha: string;
};

const StudentRegform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

const onSubmit = async (data: FormData) => {
  console.log("Dados do formulário:", data);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confsenha, ...dadosParaEnviar } = data;
  try {
    const response = await axios.post("http://localhost:8000/registerStudent", dadosParaEnviar);


    console.log("Resposta da API:", response.data);
    alert("Cadastro realizado com sucesso!");
    // Aqui você pode limpar o formulário ou redirecionar

  } catch (error: any) {
    console.error("Erro na requisição:", error);
    if (error.response) {
      alert(`Erro: ${error.response.data.detail || "Erro no servidor"}`);
    } else {
      alert(`Erro: ${error.message}`);
    }
  }
};


  return (
    <Containerlogin>
      <FormStudent onSubmit={handleSubmit(onSubmit)}>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome completo"
          {...register("name", { required: "É necessário inserir o nome." })}
        />
        {errors?.name && <MensagemErro>{errors.name.message}</MensagemErro>}

        <label>Usuário</label>
        <input
          type="text"
          placeholder="Digite seu nome de usuário ou apelido"
          {...register("username", { required: "Crie um nome de usuário." })}
        />
        {errors?.username && (
          <MensagemErro>{errors.username.message}</MensagemErro>
        )}

        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu melhor e-mail"
          {...register("email", {
            required: "Informe seu e-mail.",
            validate: (value) => validator.isEmail(value) || "E-mail inválido",
          })}
        />
        {errors?.email && <MensagemErro>{errors.email.message}</MensagemErro>}

        <label>Telefone</label>
        <input
          type="text"
          placeholder="(xx)xxxxx-xxxx"
          {...register("phone", {
            required: "Informe seu número de phone.",
            pattern: {
              value: /^\d{2}\s?\d{4,5}-?\d{4}$/,
              message: "Formato inválido. Use XX XXXXXXXX ou XX XXXX-XXXX",
            },
          })}
        />
        {errors?.phone && <MensagemErro>{errors.phone.message}</MensagemErro>}

        <label>Digite uma senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password", { required: "Digite uma senha." })}
        />
        {errors?.password && (
          <MensagemErro>{errors.password.message}</MensagemErro>
        )}

        <label>Confirme a senha</label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          {...register("confsenha", {
            required: "Confirme a senha.",
            validate: (value) =>
              value === watch("password") || "As senhas não coincidem.",
          })}
        />
        {errors?.confsenha && (
          <MensagemErro>{errors.confsenha.message}</MensagemErro>
        )}

        <button onClick={() => handleSubmit(onSubmit)()}>Cadastrar-se</button>

        <LinkLogin to="/studentLogin">Já tem cadastro? Clique aqui!</LinkLogin>
      </FormStudent>
    </Containerlogin>
  );
};

export default StudentRegform;
