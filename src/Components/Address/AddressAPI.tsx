import React from "react";
import DaumPostcode from "react-daum-postcode";

const AddressAPI = ({ setValue }: any) => {
  const handleAddress = (data: any) => data;
  return <DaumPostcode onComplete={e => setValue(handleAddress(e))} />;
};

export default AddressAPI;
