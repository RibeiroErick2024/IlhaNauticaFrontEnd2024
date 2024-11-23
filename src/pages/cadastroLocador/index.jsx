import { useState } from "react";

import "./index.css";
import CadastroEmbarcacoes from "../../components/FormCadastroEmbarcacao";
import PerfilEmbarcacao from "../../components/FormPerfilEmbarcacao";
import DescricaoEmbarcacao from "../../components/FormDescricao";
import HeaderPrincipal from "../../components/Header";
import PerfilMarinheiro from "../../components/FormPerfilMarinheiro";
import CadastroEmbarcacaoContinua from "../../components/FormCadastroEmbarcacaoContinua";
import { useNavigate } from "react-router-dom";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";

function ProgressMobileStepper() {
  return (
    <div>
      <MobileStepper
        variant="progress"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>
        }
      />
    </div>
  );
}

function CadastroLocador({ titulo }) {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    <PerfilEmbarcacao />,
    <CadastroEmbarcacaoContinua />,
    <CadastroEmbarcacoes titulo="Cadastro Embarcação" />,
    <PerfilMarinheiro />,
    <DescricaoEmbarcacao />,
  ];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //teste
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      {/* <HeaderPrincipal /> */}
      <div className="container-cadastro">
        <div className="titulo-cadastro">
          <h2>Seu Barco </h2>
          <hr className="linhaHr" />
        </div>
        <div className="icones-embarcacao">
          <button type="button" className="btn-icone" onClick={handleClick}>
            <img
              className="icon-svg"
              src="./images/Drag Boat.png"
              alt="Icone Jet-ski"
            />
          </button>
          <button className="btn-icone">
            <img
              className="icon-svg"
              src="./images/Yacht.png"
              alt="Icone Iate"
            />
          </button>
          <button className="btn-icone">
            <img
              className="icon-svg"
              src="./images/Boat Launch.png"
              alt="Icone Lancha"
            />
          </button>
          <button className="btn-icone">
            <img
              className="icon-svg"
              src="./images/Sailboat.png"
              alt="Icone Veleiro"
            />
          </button>
        </div>

        <div className="forms-cadastro">
          {/* <PerfilEmbarcacao />
          <CadastroEmbarcacaoContinua />
          <CadastroEmbarcacoes titulo="Cadastro Embarcação" />
          <PerfilMarinheiro />
          <DescricaoEmbarcacao /> */}
          {steps[activeStep]}
        </div>
        <MobileStepper
          variant="progress"
          steps={6}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
            >
              Continuar
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Voltar
            </Button>
          }
        />
      </div>
    </>
  );
}

export default CadastroLocador;
