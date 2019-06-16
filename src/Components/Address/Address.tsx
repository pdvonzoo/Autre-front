import React from "react";
import DaumPostcode from "react-daum-postcode";

const Address = (setValue: any) => {
  console.log(setValue);
  const handleAddress = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(data);
  };
  return <DaumPostcode onComplete={handleAddress} />;
};

export default Address;
