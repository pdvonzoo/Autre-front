import * as React from "react";
import styled from "../../Utils/typed-styledCom";

const Form = styled.form`
  width: 500rem;
`;

const Label = styled.label``;

const Input = styled.input``;

interface IProps {}

const SignInPresenter = () => {
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
      <input type="submit" />
    </Form>
  );
};

export default SignInPresenter;
