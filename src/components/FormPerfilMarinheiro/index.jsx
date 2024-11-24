import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "../FormCadastroEmbarcacao/index.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField, 
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  ColorButtonCancelar,
  ColorButtonSalvar,
  ContainerTextFieldInput,
  SelectInput,
  TextFieldInput,
  Titulo,
  ContainerModal,
  FormControlDiv,
} from "../FormCompletarCadastro/styles.jsx";
function PerfilMarinheiro() {
  // const [nome, setNome] = useState("");
  // const [aniversario, setAniversario] = useState("");
  // const [cpf, setCPF] = useState("");
  // const [genero, setGenero] = useState("");
  // const [email, setEmail] = useState("");
  // const [telefone, setTelefone] = useState("");
  // const [posto, setPosto] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    setError,
    setValue,
    clearErrors,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
  };
  const onError = (errors) => {
    console.log("Error no form", errors);
  };
  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/marinheiro/fc83bcb0-ea6c-4f7d-bf01-d8b23d4ff2c5"
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        setValue("nome", data.nome);
        setValue("categoria", data.categoria);
        setValue("registroMaritimo", data.registroMaritimo);
        setValue("disponibilidade", data.disponibilidade);
        setValue("dataNascimento", '000');
        setValue("cpf", '0000000000');
    
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="container-cadastro-embarcacoes">
        <h1 className="titulo-embarcacao">Perfil Marinheiro</h1>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="form-section-embarcacoes">
          <ContainerTextFieldInput>
            <TextFieldInput
              fullWidth
              focused
               id="validation-outlined-input"
              label="Nome Completo"
              variant="outlined"
              margin="dense"
              {...register("nome", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.nome}
              helperText={errors.nome?.message}
            />

            <TextFieldInput //adicionar no back
              fullWidth
              focused
              type="date"
              label="Data de Nascimento"
              variant="outlined"
              margin="dense"
              {...register("dataNascimento", {
                required: "Campo obrigatório",
              })}
              error={!!errors.aniversario}
              helperText={errors.aniversario?.message}
            />

            <TextFieldInput
              fullWidth
              type="text"
              label="CPF"
              variant="outlined"
              margin="dense"
              {...register("cpf", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "CPF inválido",
                },
              })}
              error={!!errors.cpf}
              helperText={errors.cpf?.message}
            />

            <TextFieldInput
              fullWidth
              label="Gênero"
              variant="outlined"
              margin="dense"
              {...register("genero", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.genero}
              helperText={errors.genero?.message}
            />
          </ContainerTextFieldInput>

          <ContainerTextFieldInput>
            <TextFieldInput
              fullWidth
              type="email"
              label="E-mail"
              variant="outlined"
              margin="dense"
              {...register("email", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "E-mail inválido",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextFieldInput
              fullWidth
              type="tel"
              label="Telefone"
              variant="outlined"
              margin="dense"
              {...register("telefone", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^\(?\d{2}\)?\s?\d{5}-\d{4}$/,
                  message: "Telefone inválido",
                },
              })}
              error={!!errors.telefone}
              helperText={errors.telefone?.message}
            />

            <TextFieldInput 
              fullWidth
              label="Disponibilidade"
              variant="outlined"
              margin="dense"
              {...register("disponibilidade", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.disponibilidade}
              helperText={errors.disponibilidade?.message}
            />
            <TextFieldInput 
              fullWidth
              label="Categoria"
              variant="outlined"
              margin="dense"
              {...register("categoria", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.categoria}
              helperText={errors.categoria?.message}
            />
          </ContainerTextFieldInput>

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default PerfilMarinheiro;
