import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { InfoEdificio } from "../public/model/InfoEdificio";
import PropTypes from 'prop-types';

const Step1 = ({ onComplete }) => {

  const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
}

  const divPrincipal = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginLeft: "2%",
    marginRight: "2%",
  }
   
  const containerTab = {
    with:"100%",
  }

  const row = {
    paddingTop: "1rem",
    width: "100%",
  }

  const textS = {
    width: "45%",
    marginRight: "5%"
  }

  const textD = {
    width: "45%",
    marginLeft: "5%"
  }

  const textT = {
    width: "100%",
  }
  const [edificioInfo, setEdificioInfo] = useState(new InfoEdificio());

  const handleInputChange = (event, field) => {
    // Creiamo una copia dell'oggetto edificioInfo e aggiorniamo il campo specifico
    const updatedEdificioInfo = { ...edificioInfo, [field]: event.target.value };
    setEdificioInfo(updatedEdificioInfo);
  };

  useEffect(() => {
    // Definiamo una funzione per verificare se tutti i campi di edificioInfo sono stati completati
    const isEdificioInfoCompleted = () => {
      return (
        edificioInfo.superficieTetto &&
        edificioInfo.via &&
        edificioInfo.citta &&
        edificioInfo.provincia &&
        edificioInfo.cap
      );
    };

    // Quando edificioInfo è completato, chiamiamo onComplete
    if (isEdificioInfoCompleted()) {
      onComplete(edificioInfo);
    }
  }, [edificioInfo, onComplete]);

  return (
    <div style={container}>
      <div style={divPrincipal}>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "70%" }}>
          <div style={containerTab}>
            <div style={row}>
              <TextField
                style={textS}
                id="superficieTetto"
                label="Superficie tetto"
                variant="standard"
                value={edificioInfo.superficieTetto}
                onChange={(e) => handleInputChange(e, "superficieTetto")}
                InputProps={{
                  endAdornment: <InputAdornment position="end">m²</InputAdornment>,
                  inputProps: {
                    pattern: "[0-9]*",
                    style: { fontSize: "20pt" }
                  },
                  onInput: (e) => {
                    e.preventDefault();
                    const inputValue = e.target.value;
                    const numericValue = inputValue.replace(/[^\d,.]/g, ""); // Rimuove tutti i caratteri non numerici, virgola e punto
                    e.target.value = numericValue;
                  }
                }}
                InputLabelProps={{
                  style: { fontSize: "20pt" }
                }}
              />

              <TextField
                style={textD}
                id="via"
                label="Via"
                variant="standard"
                value={edificioInfo.via}
                onChange={(e) => handleInputChange(e, "via")}
                InputProps={{
                  inputProps: {
                    style: { fontSize: "20pt" }
                  },
                }}
                InputLabelProps={{
                  style: { fontSize: "20pt" }
                }}
              />
            </div>
            <div style={row}>
              <TextField
                style={textS}
                id="citta"
                label="Città"
                variant="standard"
                value={edificioInfo.citta}
                onChange={(e) => handleInputChange(e, "citta")}
                InputProps={{
                  inputProps: {
                    style: { fontSize: "20pt" }
                  },
                }}
                InputLabelProps={{
                  style: { fontSize: "20pt" }
                }}
              />
              <TextField
                style={textD}
                id="provincia"
                label="Provincia"
                variant="standard"
                value={edificioInfo.provincia}
                onChange={(e) => handleInputChange(e, "provincia")}
                InputProps={{
                  inputProps: {
                    style: { fontSize: "20pt" }
                  },
                }}
                InputLabelProps={{
                  style: { fontSize: "20pt" }
                }}
              />
            </div>
            <div style={row}>
              <TextField
              style={textT}
                id="cap"
                label="Cap"
                variant="standard"
                value={edificioInfo.cap}
                onChange={(e) => handleInputChange(e, "cap")}
                InputProps={{
                  inputProps: {
                    style: { fontSize: "20pt" }
                  },
                }}
                InputLabelProps={{
                  style: { fontSize: "20pt" }
                }}
              />
            </div>
          </div>
        </FormControl>
      </div>
    </div>
  );
};

Step1.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default Step1;
