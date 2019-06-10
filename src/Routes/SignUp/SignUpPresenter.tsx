import * as React from "react";
import styled from "../../Utils/typed-styledCom";

const Form = styled.form`
  width: 500rem;
`;

const Label = styled.label``;

const Input = styled.input``;

interface IProps {}

const SignUpPresenter = () => {
  return (
    <Form>
      <Label>
        Email
        <Input />
      </Label>
      <Label>
        Password
        <Input />
      </Label>
      <Label>
        name
        <Input />
      </Label>
      <Label>
        address
        <Input />
      </Label>
      <Label>
        user image
        <Input />
      </Label>
      <input type="submit" />
    </Form>
  );
};

export default SignUpPresenter;
