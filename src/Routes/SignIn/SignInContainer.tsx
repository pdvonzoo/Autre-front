import React from "react";
import SignInPresenter from "./SignInPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

const CONFIRM_USER = gql`
  mutation cofirmAccount($userid: String, $secret: String) {
    cofirmAccount(userid: $userid, secret: $secret)
  }
`;

const SignInContainer = () => {
  const userid = useInput("");
  const secret = useInput("");

  const confirmUser = useMutation(CONFIRM_USER, {
    variables: {
      userid: userid.value,
      secret: secret.value
    }
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const { data } = await confirmUser();
    console.log(data);
  };

  return (
    <SignInPresenter
      userid={userid}
      secret={secret}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignInContainer;
