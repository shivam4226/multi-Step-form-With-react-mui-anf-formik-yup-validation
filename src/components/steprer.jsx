import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { MdEmail, MdMessage, MdPerson } from 'react-icons/md';
import MultiStepFormContext from "./MultiStepFormContext";
import "./style.css";

const Steprer = () => {
  const { activeStep } = useContext(MultiStepFormContext);
  console.log("active----", activeStep);



  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: '40%', right: '20px', transform: 'translateY(-100%)', }}>
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
