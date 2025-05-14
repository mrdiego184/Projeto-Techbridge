// Página de cadastro das empresas na plataforma 

import { useForm } from "react-hook-form";
import {Containerlogin, FormCompany, LinkLogin, MensagemErro,} from './styles';
import validator from 'validator';


const CompanyRegform = () => { 

    const {register, handleSubmit, formState: {errors}, watch} = useForm() // funçoes do react-hook-form


    const confirmaSenha = watch("senha");

const onSubmit = (data :unknown) => {
    console.log(JSON.stringify(data));
};

    // Forms de cadastro 
    return (
        <Containerlogin>
            <FormCompany>
                <label>CNPJ</label>
                <input 
                type = "text"
                placeholder = "Digite o CNPJ"
                {...register("name", {required : true})}
                />
                {errors?.name?.type === 'required' && <MensagemErro>É necessário inserir o nome.</MensagemErro>}
        

                <label>Login</label>
                <input
                type = "text"
                placeholder = "Defina um login para acessso"
                {...register("username", {required : true})}
                />
                 {errors?.username?.type === 'required' && <MensagemErro>É necessário criar um nome de usuário.</MensagemErro>}

                <label>Email</label>
                <input
                type = "email"
                placeholder ="Digite o e-mail"
                {...register("email", {required : true, validate : (value) => validator.isEmail(value)})}
                />
                {errors?.email?.type === 'required' && <MensagemErro>É necessário informar seu e-mail.</MensagemErro>}
                {errors?.email?.type === 'validate' && <MensagemErro>Insira um e-mail válido.</MensagemErro>}

                <label>Telefone</label>
                <input
                type ="text"
                {...register("telefone", {
                    required : true,  pattern: {
                    value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                    message: "Formato de telefone inválido",
                  },
                })}
                />
                {errors?.telefone?.type === 'required' && <MensagemErro>É necessário informar seu número de telefone.</MensagemErro>}
                {errors?.telefone?.type === 'pattern' && <MensagemErro>Formato de telefone inválido.</MensagemErro>}


                <label>Digite uma senha</label>
                <input
                type ="password"
                {...register("senha", {required : true, minLength: 5})}
                />
                {errors?.senha?.type === 'required' && <MensagemErro>É necessário definir uma senha.</MensagemErro>}
                {errors?.senha?.type === 'minLength' && <MensagemErro>A senha deve conter no mínimo 5 caracteres</MensagemErro>}

                <label>Confirme a senha</label>
                <input
                type ="password"
                {...register("confsenha", {required : true, validate: (value) => value === confirmaSenha,})}
                />
                {errors?.confsenha?.type === 'required' && <MensagemErro>Digite a senha novamente.</MensagemErro>}
                {errors?.confsenha?.type === 'validate' && <MensagemErro>As senhas não são iguais.</MensagemErro>}

                <button onClick={() => handleSubmit(onSubmit)()}>Cadastrar-se</button>
           

                <LinkLogin to="/companyLogin">Já tem cadastro? Clique aqui!</LinkLogin>


            </FormCompany>
        </Containerlogin>
    )

}


export default CompanyRegform;;