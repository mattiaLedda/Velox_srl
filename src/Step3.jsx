import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import PropTypes from 'prop-types';
import { User } from "../public/model/User";

const Step3 = ({onCompleteStep3}) =>{
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


const [user, setUser] =  useState(new User());

const   handleInputChange = (event, field) =>{
    const updateUser = {...user, [field]: event.target.value };
    setUser(updateUser);
};

useEffect(() =>{
    const isUserCompleted = () =>{
        return(
            user.nome &&
            user.cognome &&
            user.cellulare &&
            user.mail 
        );
    };
     
    if (isUserCompleted()) {
        onCompleteStep3(user);
    }
}, [user, onCompleteStep3])

return(
    <div style={container}>
      <div style={divPrincipal}>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "70%" }}>
          <div style={containerTab}>
            <div style={row}>
              <TextField
                style={textS}
                id="nome"
                label="Nome"
                variant="standard"
                value={user.nome}
                onChange={(e) => handleInputChange(e, "nome")}
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
                id="cognome"
                label="Cognome"
                variant="standard"
                value={user.cognome}
                onChange={(e) => handleInputChange(e, "cognome")}
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
                id="cellulare"
                label="Cellulare"
                variant="standard"
                value={user.cellulare}
                onChange={(e) => handleInputChange(e, "cellulare")}
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
                id="mail"
                label="E-mail"
                variant="standard"
                value={user.mail}
                onChange={(e) => handleInputChange(e, "mail")}
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

Step3.propTypes = {
    onCompleteStep3: PropTypes.func.isRequired,
};

export default Step3