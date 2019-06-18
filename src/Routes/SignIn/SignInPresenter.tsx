import React, { FunctionComponent } from "react";
import styled from "../../Utils/typed-styledCom";

const Form = styled.form`
  width: 500rem;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input``;

interface InputValue {
  value: string;
  setValue: any;
  onChange: any;
}

const SignInPresenter: FunctionComponent<{
  userid: InputValue;
  secret: InputValue;
  handleSubmit: any;
}> = ({ userid, secret, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Id
        <Input defaultValue={userid.value} onChange={userid.onChange} />
      </Label>
      <Label>
        Password
        <Input defaultValue={secret.value} onChange={secret.onChange} />
      </Label>
      <button type="button" onClick={handleSubmit}>
        Sign in
      </button>
    </Form>
  );
};

export default SignInPresenter;
