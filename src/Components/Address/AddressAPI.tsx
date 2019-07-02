import React from "react";
import DaumPostcode from "react-daum-postcode";

const AddressAPI = ({ setValue }: any) => {
  const handleAddress = (data: any) => data;
  return (
    <DaumPostcode
      onComplete={e => {
        const data = handleAddress(e);
        setValue({
          addressType: data.addressType,
          zonecode: data.zonecode,
          address: data.address,
          roadAddress: data.roadAddress,
          jibunAddress: data.jibunAddress,
          sido: data.sido,
          sigungu: data.sigungu,
          bname: data.bname,
          query: data.query
        });
      }}
    />
  );
};

export default AddressAPI;
