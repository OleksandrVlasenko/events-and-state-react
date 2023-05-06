import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import shortid from 'shortid';
import styled from '@emotion/styled';
import { object, string } from 'yup';

const loginId = shortid.generate();
const passwordId = shortid.generate();

const initialValues = {
  login: '',
  password: '',
};

const schema = object({
  login: string().required(),
  password: string().min(6).max(10).required(),
});

const Input = styled(Field)`
  color: red;
`;

export const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    console.log('LoginForm  actions:', actions);
    console.log('LoginForm  values:', values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label htmlFor={loginId}>Login</label>
        <Input type="text" name="login" id={loginId} />
        <ErrorMessage name="login" />
        <label htmlFor={passwordId}>Password</label>
        <Input type="password" name="password" id={passwordId} />
        <ErrorMessage name="password " />

        <button type="submit">Sign in</button>
      </Form>
    </Formik>
  );
};
