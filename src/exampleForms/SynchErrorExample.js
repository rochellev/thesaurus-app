import React from "react";

import ErrorWithDelay from "./ErrorWithDelay";
import { Form, Field } from "react-final-form";

const SynchErrorExample = () => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };

  const validateValues = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.age) {
      errors.age = "Required";
    } else if (isNaN(values.age)) {
      errors.age = "Must be a number";
    } else if (values.age < 18) {
      errors.age = "Must be >18";
    }
    return errors;
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ firstName: "Bob" }}
      validate={values => validateValues(values)}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName">
            {({ input, meta }) => (
              <div>
                <label>First Name</label>
                <input {...input} type="text" placeholder="First Name" />
                <ErrorWithDelay name="firstName" delay={1000}>
                  {error => <span>{error}</span>}
                </ErrorWithDelay>
              </div>
            )}
          </Field>
          <Field name="lastName">
            {({ input, meta }) => (
              <div>
                <label>Last Name</label>
                <input {...input} type="text" placeholder="Last Name" />
                <ErrorWithDelay name="lastName" delay={1000}>
                  {error => <span>{error}</span>}
                </ErrorWithDelay>
              </div>
            )}
          </Field>
          <Field name="age">
            {({ input, meta }) => (
              <div>
                <label>Age</label>
                <input {...input} type="text" placeholder="Age" />
                <ErrorWithDelay name="age" delay={1000}>
                  {error => <span>{error}</span>}
                </ErrorWithDelay>
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
};

export default SynchErrorExample;
