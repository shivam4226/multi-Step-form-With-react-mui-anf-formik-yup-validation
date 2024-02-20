import React, { useState } from "react";
import PImage from "./1.jpg"
import { Provider } from "./MultiStepFormContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Details from "./Step1Form";
import Address from "./Step2Form";
import Review from "./Step3Form";
import Steprer from "./steprer";

const steps = ["Fill in your details", "Address details", "Review and Save"];

const detailsInitialState = {
  name: "",
  age: "",
  profession: ""
};

const addressInitialState = {
  address1: "",
  address2: "",
  city: ""
};

const MultiStepForm = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    if (activeStep === steps.length - 1) {
      setActiveStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const prev = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return <Details />;
      case 1:
        return <Address />;
      case 2:
        return <Review />;
      default:
        return null;
    }
  };

  return (
    <Provider value={{ details, setDetails, next, prev, address, setAddress, activeStep }}>
      <Card sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Form Section
              </Typography>
              <main>{renderStep(activeStep)}</main>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <img src={PImage} alt='' style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Card>
      <Steprer />
    </Provider>
  );
};

export default MultiStepForm;
