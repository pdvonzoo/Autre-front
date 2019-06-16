import React, { FunctionComponent } from "react";
import styled from "../../Utils/typed-styledCom";
import { AddressAPI, AddressPresenter } from "../../Components/Address";

const Form = styled.form`
  margin: auto;
  width: 50rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1.8rem;
  margin-top: 1rem;
`;

const InputInfo = styled.div`
  display: inline-block;
  width: 10rem;
`;

const Input = styled.input`
  width: 40rem;
`;

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
        <InputInfo>Id</InputInfo>
        <Input defaultValue={userid.value} onChange={userid.onChange} />
      </Label>
      <Label>
        <InputInfo>Email</InputInfo>
        <Input defaultValue={email.value} onChange={email.onChange} />
      </Label>
      <Label>
        <InputInfo>Password</InputInfo>
        <Input defaultValue={secret.value} onChange={secret.onChange} />
      </Label>
      <Label>
        <InputInfo>Name</InputInfo>
        <Input defaultValue={username.value} onChange={username.onChange} />
      </Label>
      <Label>
        <InputInfo>Address</InputInfo>
        <AddressPresenter addressValue={address.value} />
        <Input defaultValue={address.value} onChange={address.onChange} />
        <AddressAPI setValue={address.setValue} />
      </Label>
      <Label>
        <InputInfo>Phone</InputInfo>
        <Input
          defaultValue={phonenumber.value}
          onChange={phonenumber.onChange}
        />
      </Label>
      <Label>
        <InputInfo>Image</InputInfo>
        <Input defaultValue={userimage.value} onChange={userimage.onChange} />
      </Label>
      <input type="button" value="Sign Up" onClick={handleSubmit} />
    </Form>
  );
};

export default SignUpPresenter;
