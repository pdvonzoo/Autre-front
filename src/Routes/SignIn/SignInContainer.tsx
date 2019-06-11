import * as React from "react";
import useInput from "../../Hooks/useInput";
import SignInPresenter from "./SignInPresenter";

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
