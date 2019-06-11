import * as React from "react";
import axios from "axios";
import SignUpPresenter from "./SignUpPresenter";
import useInput from "../../Hooks/useInput";

const SignUpContainer = () => {
  const email = useInput("");
  const username = useInput("");
  const secret = useInput("");
  const phoneNum = useInput("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
  };

  return (
    <SignUpPresenter
      username={username}
      email={email}
      secret={secret}
      phoneNum={phoneNum}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
