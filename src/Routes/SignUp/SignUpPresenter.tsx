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

const SignUpPresenter: FunctionComponent<{
  username: InputValue;
  email: InputValue;
  secret: InputValue;
  phoneNum: InputValue;
  handleSubmit: any;
}> = ({ username, email, secret, phoneNum, handleSubmit }) => {
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
      <Label>
        name
        <Input defaultValue={username.value} onChange={username.onChange} />
      </Label>
      <Label>
        Phone number
        <Input defaultValue={phoneNum.value} onChange={phoneNum.onChange} />
      </Label>
      <input type="submit" />
    </Form>
  );
};

export default SignUpPresenter;
