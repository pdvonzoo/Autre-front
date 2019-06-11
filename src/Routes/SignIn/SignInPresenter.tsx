import React, { FunctionComponent } from "react";
import styled from "../../Utils/typed-styledCom";

const Form = styled.form`
  width: 500rem;
`;

const Label = styled.label``;

const Input = styled.input``;

interface InputValue {
  value: string;
  setValue: any;
  onChange: any;
}

const SignInPresenter: FunctionComponent<{
  email: InputValue;
  secret: InputValue;
  handleSubmit: any;
}> = ({ email, secret, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input defaultValue={email.value} onChange={email.onChange} />
      </Label>
      <Label>
        Password
        <Input defaultValue={secret.value} onChange={secret.onChange} />
      </Label>
      <input type="submit" />
    </Form>
  );
};

export default SignInPresenter;
