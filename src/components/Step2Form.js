import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import MultiStepFormContext from "./MultiStepFormContext";

const Details = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);

  const validationSchema = yup.object().shape({
    address1: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
  });

  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors }) => (
        <Form className={"details__wrapper"}>
          <div className={"form__item"}>
            <label htmlFor="address1">Address-1 *</label>
            <Field
              as={TextField}
              id="address1"
              name="address1"
              placeholder="Enter Address-1"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="address1"
              component="div"
              className="error__feedback"
            />
          </div>
          <div className={"form__item"}>
            <label htmlFor="address2">Address-2</label>
            <Field
              as={TextField}
              id="address2"
              name="address2"
              placeholder="Enter Address-2"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className={"form__item"}>
            <label htmlFor="city">City *</label>
            <Field
              as={TextField}
              id="city"
              name="city"
              placeholder="Enter City"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="city"
              component="div"
              className="error__feedback"
            />
          </div>
          <div className={"form__item button__items d-flex justify-content-between"}>
            <Button type={"button"} onClick={prev} variant="outlined">
              Back
            </Button>
            <Button type={"submit"} variant="contained" color="primary">
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Details;
