import React from "react";
import { useMutation } from "react-apollo-hooks";
import SignUpPresenter from "./SignUpPresenter";
import useInput from "../../Hooks/useInput";
import { REGISTER_USER, SEND_SMS } from "./SignUpQuery";

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
      email: email.value,
      secret: secret.value,
      address: address.value,
      phonenumber: phonenumber.value,
      username: username.value,
      useimage: userimage.value
    }
  });

  const sendSMS = useMutation(SEND_SMS, {
    variables: {
      phonenumber: phonenumber.value
    }
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    try {
      await register();
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
      sendSMS={sendSMS}
    />
  );
};

export default SignUpContainer;
