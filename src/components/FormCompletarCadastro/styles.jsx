import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField
} from "@mui/material";
import { cyan, lightBlue, purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const Titulo = styled(DialogTitle)(({ theme }) => ({
  theme: theme.palette.getContrastText(cyan[300]),
  // backgroundColor: "#1DE59F",
  // width: "100%",

  /* background-color: green; */
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  // fontSize: "2.2vw",
  color: "black",
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "8px",
  borderRadius: ".8vw",
  "&:hover": {
    backgroundColor: cyan[800],
  },
}));
export const ColorButtonSalvar = styled(Button)(({ theme }) => ({
  theme: theme.palette.getContrastText(cyan[300]),
  backgroundColor: "#1DE59F",
  width: 150,
  fontFamily: "Montserrat",
  fontWeight: 400,
  color: "white",
  lineHeight: "29px",
  borderRadius: ".8vw",
  "&:hover": {
    backgroundColor: cyan[800],
  },
}));

export const ColorButtonCancelar = styled(Button)(({ theme }) => ({
  theme: theme.palette.getContrastText(lightBlue[300]),
  backgroundColor: lightBlue[500],
  width: 100,
  color: "white",
  fontFamily: "Montserrat",
  fontWeight: 400,
  lineHeight: "29px",
  borderRadius: ".8vw",
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export const ContainerModal = styled(Dialog)(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[300]),
  fullWidth: true,
  maxWidth: "lg",
  width: "100%",
  //  alignItems: "center",
  //  display: "flex",
  //  flexDirection: "column",
  //  justifyContent: "space-evenly",
  //  padding: "0 1vw",
  //  borderRadius: "40px",
  //      '&:hover': {
  //   backgroundColor: purple[700],
  // },
}));

export const ContainerTextFieldInput = styled(DialogContent)(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[300]),
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",

}));
export const TextFieldInput = styled(TextField)(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[300]),
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      borderRadius: 40,
    },
  },
  "& .MuiInputBase-formControl": {
    "& fieldset": {
      borderColor: "rgba(19,141,147,255)",
      borderRadius: 40,
    },
  },
}));

export const ContainerTextFieldInputCadastro = styled(DialogContent)(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[300]),
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",

}));
export const TextFieldInputCadastro = styled(TextField)(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[300]),
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      borderRadius: 40,
    },
  },
  "& .MuiInputBase-formControl": {
    "& fieldset": {
      borderColor: "rgba(19,141,147,255)",
      borderRadius: 40,
    },
  },
}));




















export const FormControlDiv = styled(FormControl)(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[300]),
  width: "100%",
}));
export const SelectInput = styled(TextField)(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[300]),
  width: "100%%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      borderRadius: 40,
    },
  },
 "& .MuiInputBase-formControl": {
    "& fieldset": {
      borderColor: "rgba(19,141,147,255)",
      borderRadius: 40,
    },
  },
}));

export const TextAreaInputField = styled(TextField)(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[300]),
  width: "100%",
  height:"100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      borderRadius: 40,
    },
  },
  "& .MuiInputBase-formControl": {
    "& fieldset": {
      borderColor: "rgba(19,141,147,255)",
      borderRadius: 40,
    },
  },
  "& .MuiInputBase-multiline": {
    padding: "16px", // Adiciona algum padding para melhor visualização
  },
}));
