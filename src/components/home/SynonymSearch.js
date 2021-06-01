import React from "react";
import { Form, Field } from "react-final-form";

const SynonymSearch = () => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };

  const validateSearchTerm = values => {
    const errors = {};
    if (!values.searchTerm) {
      errors.searchTerm = "Missing Search Term";
    }
    // add check for only letters
    return errors;
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ searchTerm: "happy" }}
      validate={validateSearchTerm(values)}
      
    />
  );
};

export default SynonymSearch;
