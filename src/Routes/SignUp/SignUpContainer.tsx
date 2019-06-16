import React from "react";
import SignUpPresenter from "./SignUpPresenter";
import useInput from "../../Hooks/useInput";

const SignUpContainer = () => {
  const userid = useInput("");
  const email = useInput("");
  const secret = useInput("");
  const address = useInput("");
  const phonenumber = useInput("");
  const username = useInput("");
  const userimage = useInput("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
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
