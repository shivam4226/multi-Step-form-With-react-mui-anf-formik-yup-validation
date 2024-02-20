import React, { useContext } from "react";
import { Button, Grid, Typography } from "@mui/material";
import MultiStepFormContext from "./MultiStepFormContext";

const Review = () => {
  const { details, address, next, prev } = useContext(MultiStepFormContext);
 

  return (
    <div className={"details__wrapper"}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Details</Typography>
          <Typography>Name: {details.name}</Typography>
          <Typography>Age: {details.age}</Typography>
          <Typography>Profession: {details.profession}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Address</Typography>
          <Typography>Address-1: {address.address1}</Typography>
          {address.address2 && <Typography>Address-2: {address.address2}</Typography>}
          <Typography>City: {address.city}</Typography>
          <div className={"form__item button__items d-flex justify-content-between"}>
            <Button variant="outlined" onClick={prev}>Back</Button>
            <Button variant="contained" color="primary" onClick={next}>Confirm</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Review;
