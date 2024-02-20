import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { MdEmail, MdMessage, MdPerson } from 'react-icons/md';
import MultiStepFormContext from "./MultiStepFormContext";
import "./style.css";

const Steprer = () => {
  const { activeStep } = useContext(MultiStepFormContext);

  return (
    <div className="steprer-container">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          top: '40%',
          right: '20px',
          transform: 'translateY(-100%)',
        }}
        className="steprer-box"
      >
        <div className={`circle ${activeStep > 0 ? 'active' : ''}`}>
          <IconButton>
            <MdPerson />
          </IconButton>
        </div>
        <div className={`circle ${activeStep > 1 ? 'active' : ''}`}>
          <IconButton>
            <MdEmail />
          </IconButton>
        </div>
        <div className={`circle ${activeStep > 2 ? 'active' : ''}`}>
          <IconButton>
            <MdMessage />
          </IconButton>
        </div>
      </Box>
    </div>
  );
};

export default Steprer;
