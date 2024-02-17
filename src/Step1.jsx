import React, { useState } from 'react';
import FormControl from "@mui/material/FormControl";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';

const Step1 = ({ onComplete }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    // Passiamo il valore selezionato al parent component tramite la funzione onComplete
    onComplete(event.target.value);
  };

  return (
    <div className="container w-100">
      <FormControl className='w-100' component="fieldset">
        <FormLabel className='w-100 text-center' component="legend">Seleziona una lavorazione</FormLabel>
        <RadioGroup
          className='w-100 d-flex flex-row justify-content-around'
          aria-label="opzione"
          name="radio-buttons-group"
          value={selectedValue}
          onChange={handleChange}
        >
          <FormControlLabel className='ml-5' value="Tegole Marsigliesi" control={<Radio />} label="Tegole Marsigliesi" />
          <FormControlLabel value="Tegole Portoghesi" control={<Radio />} label="Tegole Portoghesi" />
          <FormControlLabel value="Lamiera" control={<Radio />} label="Lamiera" />
          {/* Aggiungi altre opzioni qui */}
          <FormControlLabel value="Pannelli coibentati" control={<Radio />} label="Pannelli coibentati" />
          <FormControlLabel value="Coppi" control={<Radio />} label="Coppi" />
          {/* Aggiungi altre opzioni qui */}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

Step1.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default Step1;
