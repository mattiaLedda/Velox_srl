import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";

const serviceId = "service_px5bltm";
const templateId = "template_blnjifs";
const userId = "B5Zd4GopwjNHKb9C2"; 

function StepFinal({ preventivo }) {

  const messageForMail = "Ciao " + preventivo.infoUser.nome + " " + preventivo.infoUser.cognome + ", come da te richiesto, ti confermiamo il prezzo della simulazione di preventivo fatta sul nostro sito";
  
    const card = {
        boxShadow: "0 8px 12px rgba(21, 119, 206, 0.5)",
        maxWidth: "544px",
        height: "656px",
        borderRadius: "16px",
    }
  
    const divSpace = {
    padding: "4rem",
  };

  const divTextTitle = {
    marginTop: "35px",
    width: "100%",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const divText = {
    marginTop: "40px",
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const title = {
    fontSize: "34pt",
    color: "#1577CE",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
  };

  const text = {
    fontSize: "34pt",
    color: "#0B9FB3",
    fontFamily: "Arial, sans-serif",
  };

  const text1 = {
    fontSize: "24pt",
    color: "#0B9FB3",
    fontFamily: "Arial, sans-serif",
  };
  const subText = {
    fontSize: "20pt",
    color: "#757575",
    fontFamily: "Arial, sans-serif",
  }

  const subTextDescription = {
    fontSize: "20pt",
    color: "#757575",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
   
  }

  const divDescription = {
    marginTop: "30px",
    width: "100%",
    height: "108px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "16px",
    paddingRight: "16px",
  }

  const divTextSub = {
      marginTop: "20px",
      width: "100%",
      height: "36px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  }

  const buttonC = {
    marginTop: "56px",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "32px",
  }
  
  const buttonT = {
    backgroundColor: "#B8FF21",
    height: "85px",
    width: "340px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "32px",
    fontSize: "20pt",
    color: "#000000",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    fontWeight: "bold",
  }

  const Lavorazioni = {
    SOSTITUZIONE_ISOLANTE: { nome: "Sostituzione Isolante", costo: 130, description: "Migliora l'isolamento termico sostituendo il vecchio materiale isolante con una soluzione più efficiente." },
    RIFACIMENTO_INTEGRALE: { nome: "Rifacimento Integrale", costo: 200, description: "" },
    RISTRUTTURAZIONE_COMPLETA: {
      nome: "Ristrutturazione Completa",
      costo: 340,
      description: ""
    },
  };

  const [prezziFiniti, setPrezziFiniti] = useState({
    finaleIsolante: 0,
    finaleRifacimentoIntegrale: 0,
    finaleRistrutturazione: 0,
  });
  const [calculated, setCalculated] = useState(false);

  useEffect(() => {
    if (preventivo) {
      const superficieTetto = preventivo.infoEdificio.superficieTetto;
  
      const prezzoIsolante =
        superficieTetto * Lavorazioni.SOSTITUZIONE_ISOLANTE.costo;
      const prezzoRifacimento =
        superficieTetto * Lavorazioni.RIFACIMENTO_INTEGRALE.costo;
      const prezzoRistrutturazione =
        superficieTetto * Lavorazioni.RISTRUTTURAZIONE_COMPLETA.costo;
  
      setPrezziFiniti({
        finaleIsolante: prezzoIsolante,
        finaleRifacimentoIntegrale: prezzoRifacimento,
        finaleRistrutturazione: prezzoRistrutturazione,
      });
  
      setCalculated(true);
    }
  }, [preventivo]);

  const handleButtonClick = () => {
    const emailData = {
      to_email: preventivo.infoUser.mail, // Indirizzo e-mail del destinatario
      message: messageForMail + prezziFiniti.finaleIsolante,
    };

    // Invia l'e-mail
    emailjs.send(serviceId, templateId, emailData, userId)
      .then((response) => {
        console.log("E-mail inviata con successo!", response);
      })
      .catch((error) => {
        console.error("Errore nell'invio dell'e-mail:", error);
      });
  };

  return (
    <div style={divSpace}>
      {calculated && (
        <div>
        <Card style={card}>
          <CardContent>
            <div style={divText}>
              <Typography style={title} component="div">
                {Lavorazioni.SOSTITUZIONE_ISOLANTE.nome}
              </Typography>
            </div>
            <div style={divTextTitle}>
              <Typography style={text1} component="div">Prezzo finale</Typography>
              <Typography style={text} component="div">{prezziFiniti.finaleIsolante} €</Typography>
            </div>

            <div style={divTextSub}>
            <Typography style={subText} component="div">
              {Lavorazioni.SOSTITUZIONE_ISOLANTE.costo} €/m²
              </Typography>
            </div>
            <div style={divDescription}>
              <Typography style={subTextDescription} component="div">
                {Lavorazioni.SOSTITUZIONE_ISOLANTE.description}
              </Typography>
            </div>
           <div style={buttonC}>
            <Button style={buttonT} onClick={handleButtonClick}>
              RICHIEDI PREVENTIVO
            </Button>
            </div>
          </CardContent>
        </Card>

        {/* <Card style={card}>
          <CardContent>
            <div style={divText}>
              <Typography style={title} component="div">
                {Lavorazioni.SOSTITUZIONE_ISOLANTE.nome}
              </Typography>
            </div>
            <div style={divTextTitle}>
              <Typography style={text1} component="div">Prezzo finale</Typography>
              <Typography style={text} component="div">{prezziFiniti.finaleIsolante} €</Typography>
            </div>

            <div style={divTextSub}>
            <Typography style={subText} component="div">
              {Lavorazioni.SOSTITUZIONE_ISOLANTE.costo} €/m²
              </Typography>
            </div>
            <div style={divDescription}>
              <Typography style={subTextDescription} component="div">
                {Lavorazioni.SOSTITUZIONE_ISOLANTE.description}
              </Typography>
            </div>
           <div style={buttonC}>
            <Button style={buttonT} onClick={handleButtonClick}>
              RICHIEDI PREVENTIVO
            </Button>
            </div>
          </CardContent>
        </Card>

        <Card style={card}>
          <CardContent>
            <div style={divText}>
              <Typography style={title} component="div">
                {Lavorazioni.SOSTITUZIONE_ISOLANTE.nome}
              </Typography>
            </div>
            <div style={divTextTitle}>
              <Typography style={text1} component="div">Prezzo finale</Typography>
              <Typography style={text} component="div">{prezziFiniti.finaleIsolante} €</Typography>
            </div>

            <div style={divTextSub}>
            <Typography style={subText} component="div">
              {Lavorazioni.SOSTITUZIONE_ISOLANTE.costo} €/m²
              </Typography>
            </div>
            <div style={divDescription}>
              <Typography style={subTextDescription} component="div">
                {Lavorazioni.SOSTITUZIONE_ISOLANTE.description}
              </Typography>
            </div>
           <div style={buttonC}>
            <Button style={buttonT} onClick={handleButtonClick}>
              RICHIEDI PREVENTIVO
            </Button>
            </div>
          </CardContent>
        </Card> */}
        </div>
      )}
    </div>
  );
}

StepFinal.propTypes = {
  preventivo: PropTypes.shape({
    infoEdificio: PropTypes.object,
    infoTetto: PropTypes.object,
    infoUser: PropTypes.object,
  }).isRequired,
};
export default StepFinal;
