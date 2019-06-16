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
        Email
        <Input defaultValue={email.value} onChange={email.onChange} />
      </Label>
      <Label>
        Password
        <Input defaultValue={secret.value} onChange={secret.onChange} />
      </Label>
      <Label>
        Address
        <Input defaultValue={userimage.value} onChange={userimage.onChange} />
      </Label>
      <Label>
        phone
        <Input
          defaultValue={phonenumber.value}
          onChange={phonenumber.onChange}
        />
      </Label>
      <Label>
        Image
        <Input defaultValue={username.value} onChange={username.onChange} />
      </Label>
      <input type="submit" />
    </Form>
  );
};

export default SignUpPresenter;
