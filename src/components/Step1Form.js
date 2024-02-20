import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import MultiStepFormContext from "./MultiStepFormContext";

const Details = () => {
  const { details, setDetails, next } = useContext(MultiStepFormContext);

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    age: yup
      .number()
      .required("Age is required")
      .positive("Age must be a positive number")
      .integer("Age must be an integer")
      .max(90, "Are you sure you're human?"),
    profession: yup
      .string()
      .required("Profession is required")
      .matches(
        /^[a-zA-Z\s]*$/,
        "Profession should not contain numbers or special characters"
      ),
  });

  return (
    <Formik
      initialValues={details}
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <Form className={"details__wrapper"}>
          <div className={"form__item"}>
            <label htmlFor="name">Name *</label>
            <Field
              as={TextField}
              id="name"
              name="name"
              placeholder="Enter your name"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error__feedback"
            />
          </div>
          <div className={"form__item"}>
            <label htmlFor="age">Age *</label>
            <Field
              as={TextField}
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="age"
              component="div"
              className="error__feedback"
            />
          </div>
          <div className={"form__item"}>
            <label htmlFor="profession">Profession *</label>
            <Field
              as={TextField}
              id="profession"
              name="profession"
              placeholder="Enter your profession"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="profession"
              component="div"
              className="error__feedback"
            />
          </div>
          <div className={"form__item button__items d-flex justify-content-end"}>
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
