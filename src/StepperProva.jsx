import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RichiestaPrev } from "../public/model/RichiestaPrev";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import StepFinal from "./StepFinal";

const steps = [
  "Info edificio",
  "Tipologia tetto",
  "Info interessato",
  "Conferma dati",
];

export default function StepperProva() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [preventivo, setPreventivo] = React.useState(new RichiestaPrev());

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleStep1Complete = (infoEdificio) => {
    // Salva i dati del passo 1 (infoEdificio) nell'oggetto preventivo
    setPreventivo({ ...preventivo, infoEdificio });
  };

  const handleStep2Complete = (infoTetto) =>{
    setPreventivo({...preventivo, infoTetto})
  }

  const handleStep3Complete = (infoUser) =>{
    setPreventivo({...preventivo, infoUser})
  }

  const handleComplete = () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);

    // Stampa l'oggetto preventivo aggiornato passo dopo passo
    console.log("Passo", activeStep + 1, ":", preventivo);

    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setPreventivo(new RichiestaPrev());
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
             {<StepFinal preventivo={preventivo}/>}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {activeStep === 0 && <Step1 onComplete={handleStep1Complete} />}
              {activeStep === 1 && <Step2 onCompleteTetti={handleStep2Complete}/>}
              {activeStep === 2 && <Step3 onCompleteStep3={handleStep3Complete}/>}
              {activeStep === 3 && <Step4 preventivo={preventivo}/>}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
