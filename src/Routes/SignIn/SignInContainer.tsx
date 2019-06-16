import React from "react";
import SignInPresenter from "./SignInPresenter";
import useInput from "../../Hooks/useInput";

const SignInContainer = () => {
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
    <SignInPresenter
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

export default SignInContainer;
