import React from "react";
import { useMutation } from "react-apollo-hooks";
import SignUpPresenter from "./SignUpPresenter";
import useInput from "../../Hooks/useInput";
import REGISTER_USER from "./SignUpQuery";

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
      const { data } = await register();
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
