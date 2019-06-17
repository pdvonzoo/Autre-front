import React from "react";
import SignInPresenter from "./SignInPresenter";
import useInput from "../../Hooks/useInput";

const SignInContainer = () => {
  const userid = useInput("");
  const secret = useInput("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
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
