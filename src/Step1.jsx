import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { InfoEdificio } from "../public/model/InfoEdificio";
import PropTypes from 'prop-types';

const Step1 = ({ onComplete, area }) => {
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
    <div className="container w-100">
      <div className="w-100">
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "70%", display: "flex", flexDirection: "column",  justifyContent:"center" , margin:"auto" }}>
          <div className="row">
            <div className="input-group">
              <TextField
                className="textS"
                id="superficieTetto"
                label="Superficie tetto"
                variant="standard"
                value={Math.round(area * 10) / 10}
                onChange={(e) => handleInputChange(e, "superficieTetto")}
                InputProps={{
                  endAdornment: <InputAdornment position="end">m²</InputAdornment>,
                  inputProps: {
                    pattern: "[0-9]*",
                  },
                }}
              />

              <TextField
                className="textD"
                id="via"
                label="Via"
                variant="standard"
                value={edificioInfo.via}
                onChange={(e) => handleInputChange(e, "via")}
              />
            </div>
            <div className="input-group">
              <TextField
                className="textS"
                id="citta"
                label="Città"
                variant="standard"
                value={edificioInfo.citta}
                onChange={(e) => handleInputChange(e, "citta")}
              />
              <TextField
                className="textD"
                id="provincia"
                label="Provincia"
                variant="standard"
                value={edificioInfo.provincia}
                onChange={(e) => handleInputChange(e, "provincia")}
              />
            </div>
            <div className="input-group">
              <TextField
                id="cap"
                label="Cap"
                variant="standard"
                value={edificioInfo.cap}
                onChange={(e) => handleInputChange(e, "cap")}
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
