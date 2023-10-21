import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import PropTypes from 'prop-types';
import { User } from "../public/model/User";

const Step3 = ({onCompleteStep3}) =>{
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
    <div className="container">
      <div className="">
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "70%" }}>
          <div className="row">
            <div className="input-group">
              <TextField
                className="textS"
                id="nome"
                label="Nome"
                variant="standard"
                value={user.nome}
                onChange={(e) => handleInputChange(e, "nome")}
              />

              <TextField
                className="textD"
                id="cognome"
                label="Cognome"
                variant="standard"
                value={user.cognome}
                onChange={(e) => handleInputChange(e, "cognome")}
              />
            </div>
            <div className="input-group">
              <TextField
                className="textS"
                id="cellulare"
                label="Cellulare"
                variant="standard"
                value={user.cellulare}
                onChange={(e) => handleInputChange(e, "cellulare")}
              />
              <TextField
                className="textD"
                id="mail"
                label="E-mail"
                variant="standard"
                value={user.mail}
                onChange={(e) => handleInputChange(e, "mail")}
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