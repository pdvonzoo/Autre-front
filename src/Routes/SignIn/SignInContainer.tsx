import React from "react";
import SignInPresenter from "./SignInPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import CONFIRM_USER from "./SignInQuery";

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
