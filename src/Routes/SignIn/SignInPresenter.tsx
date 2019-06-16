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
  email: InputValue;
  secret: InputValue;
  address: InputValue;
  phonenumber: InputValue;
  username: InputValue;
  userimage: InputValue;
  handleSubmit: any;
}> = ({
  userid,
  email,
  secret,
  address,
  phonenumber,
  username,
  userimage,
  handleSubmit
}) => {
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
      <input type="submit" />
    </Form>
  );
};

export default SignInPresenter;
