import React from "react";
import { FormComponent } from "../components";

const Form = ({ value, error, handleSubmit, handleChange }) => {
   return <FormComponent handleSubmit={handleSubmit} value={value} handleChange={handleChange} error={error} />;
};

export default Form;
