import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from 'prop-types';

const accordionStyle = {
  borderRadius: "16px", // Bordi arrotondati
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Ombra visibile
  marginTop: "2rem",
  marginBottom: "2rem",
};

const titleStyle = {
  color: "#1577CE", 
  borderRadius: "16px 16px 0 0", // Bordi superiori arrotondati
  paddingTop: "1rem",
  paddingBottom: "1rem",
  paddingLeft: "2rem",
};

const textStyle = {
  paddingLeft: "4rem", // Spaziatura interna
};

const pStyle = {
  color: "#1577CE",
}

function Step4({ preventivo, area }) {
  return (
    <div>

<Accordion style={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} style={titleStyle}>
          <Typography variant="h4">Informazioni Edificio</Typography>
        </AccordionSummary>
        <AccordionDetails style={textStyle}>
          <Typography variant="h5">Superficie tetto:</Typography>
          <br />
          <Typography variant="h6" style={pStyle}>{Math.round(area * 10) / 10} m²</Typography>
          <br />

        </AccordionDetails>
      </Accordion>


      <Accordion style={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} style={titleStyle}>
          <Typography variant="h4">Informazioni Tetto</Typography>
        </AccordionSummary>
        <AccordionDetails style={textStyle}>
          <Typography variant="h5">Tipologia Tetto:</Typography>
          <br />
          <Typography variant="h6" style={pStyle}>{preventivo.infoTetto.tipologiaTetto}</Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion style={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} style={titleStyle}>
          <Typography variant="h4">Informazioni Utente</Typography>
        </AccordionSummary>
        <AccordionDetails style={textStyle}>
          <Typography variant="h5">Nome:</Typography>
          <br />
          <Typography variant="h6" style={pStyle}>{preventivo.infoUser.nome}</Typography>
          <br />

          <Typography variant="h5">Cognome:</Typography>
          <br />

          <Typography variant="h6" style={pStyle}>{preventivo.infoUser.cognome}</Typography>
          <br />

          <Typography variant="h5">Cellulare:</Typography>
          <br />
          <Typography variant="h6" style={pStyle}>{preventivo.infoUser.cellulare}</Typography>
          <br />
          <Typography variant="h5">Email:</Typography>
          <br />
          <Typography variant="h6" style={pStyle}>{preventivo.infoUser.mail}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

Step4.propTypes = {
  preventivo: PropTypes.shape({
    infoEdificio: PropTypes.object,
    infoTetto: PropTypes.object,
    infoUser: PropTypes.object,
    // Aggiungi altre proprietà necessarie per gli altri sottooggetti
  }).isRequired,
};

export default Step4;
