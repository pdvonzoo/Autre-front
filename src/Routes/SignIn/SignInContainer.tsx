import React from "react";
import SignInPresenter from "./SignInPresenter";
import useInput from "../../Hooks/useInput";

const SignInContainer = () => {
  const email = useInput("");
  const secret = useInput("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
  };

  return (
    <SignInPresenter
      email={email}
      secret={secret}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignInContainer;
