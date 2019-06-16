import React from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import SignUpPresenter from "./SignUpPresenter";
import useInput from "../../Hooks/useInput";

const REGISTER_USER = gql`
  mutation createAccount(
    $userid: String
    $email: String
    $secret: String
    $address: String
    $phonenumber: String
    $username: String
    $userimage: String
  ) {
    createAccount(
      userid: $userid
      email: $email
      secret: $secret
      address: $address
      phonenumber: $phonenumber
      username: $username
      userimage: $userimage
    )
  }
`;

const SignUpContainer = () => {
  const userid = useInput("");
  const email = useInput("");
  const secret = useInput("");
  const address = useInput("");
  const phonenumber = useInput("");
  const username = useInput("");
  const userimage = useInput("");
  const register = useMutation(REGISTER_USER, {
    variables: {
      userid: userid.value,
      secret: secret.value,
      username: username.value
    }
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    try {
      console.log(userid.value, secret.value, username.value);
      const { data } = await register();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignUpPresenter
      userid={userid}
      email={email}
      secret={secret}
      address={address}
      phonenumber={phonenumber}
      username={username}
      userimage={userimage}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
