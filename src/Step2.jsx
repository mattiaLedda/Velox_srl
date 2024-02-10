import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import { TipoTetto } from "../public/model/TipoTetto";

const roofTypes = [
  { id: 1, type: "Due falde" },
  { id: 2, type: "Due falde assimetriche" },
  { id: 3, type: "A padiglione" },
  { id: 4, type: "Falda unica" },
/*   { id: 5, type: "A tenda" },
  { id: 6, type: "Due falde con teste a padiglione" },
  { id: 7, type: "A volta" },
  { id: 8, type: "A mansarda" },
  { id: 9, type: "A padiglione mansardato" },
  { id: 10, type: "A mansarda con teste a padiglione" },
  { id: 11, type: "A shed" },
  { id: 12, type: "A croce" }, */
];

const roofImages = [
  "/assets/Tetti/due_falde.png",
  "/assets/Tetti/due_falde_assimetriche.png",
  "/assets/Tetti/a_padiglione.jpg",
  "/assets/Tetti/falda_unica.png",
  "/assets/Tetti/tenda.png",
  "/assets/Tetti/due_falde_padiglione.png",
  "/assets/Tetti/volta.png",
  "/assets/Tetti/mansarda.png",
  "/assets/Tetti/padiglione_mansardato.png",
  "/assets/Tetti/mansarda_padiglione.png",
  "/assets/Tetti/shed.png",
  "/assets/Tetti/croce.png",
];

const StyledCard = styled(Card)({
  maxWidth: "230px",
  height: "350px",
  paddingBottom: "1rem",
  cursor: "pointer",
});

const StyledSelectedCard = styled(Card)({
  maxWidth: "230px",
  height: "350px",
  cursor: "pointer",
  boxShadow: "0 8px 12px rgba(21, 119, 206, 0.5)",
});

const Step2 = ({ onCompleteTetti }) => {
  const [tetti, setTetti] = useState(new TipoTetto());
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (id) => {
    const selectedRoofType = roofTypes.find((type) => type.id === id);

    if (selectedRoofType) {
      setSelectedCard(id);

      // Aggiorna tetti con il tipo di tetto selezionato
      setTetti((prevTetti) => ({
        ...prevTetti,
        tipologiaTetto: selectedRoofType.type,
      }));
    } else {
      console.error("ID del tetto non valido");
    }

    tetti.tipologiaTetto = selectedRoofType.type;
    // Invia tetti a onCompleteTetti dopo che è stato aggiornato
    onCompleteTetti(tetti);

    console.log(`Card ID selected: ${id}`);
  };

  return (
    <form>
      <Grid container spacing={2} style={{ marginTop: "20px", width: "100%", display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center" }}>
        {roofTypes.map((roofType) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={roofType.id} style={{
            maxWidth: "230px",
            cursor: "pointer",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
          }}>
            {selectedCard === roofType.id ? (
              <StyledSelectedCard
                onClick={() => handleCardClick(roofType.id)}
                style={{
                  maxWidth: "230px",
                  cursor: "pointer"
                }}
              >
                <CardMedia
                  component="img"
                  alt={roofType.type}
                  height="230"
                  image={roofImages[roofType.id - 1]}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {roofType.type}
                  </Typography>
                  <Typography variant="body2">
                    Roof Type ID: {roofType.id}
                  </Typography>
                </CardContent>
              </StyledSelectedCard>
            ) : (
              <StyledCard
                onClick={() => handleCardClick(roofType.id)}
                style={{
                  maxWidth: "230px",
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  component="img"
                  alt={roofType.type}
                  height="230"
                  image={roofImages[roofType.id - 1]}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {roofType.type}
                  </Typography>
                  <Typography variant="body2">
                    Roof Type ID: {roofType.id}
                  </Typography>
                </CardContent>
              </StyledCard>
            )}
          </Grid>
        ))}
      </Grid>
    </form>
  );
};

Step2.propTypes = {
  onCompleteTetti: PropTypes.func.isRequired,
};

export default Step2;
