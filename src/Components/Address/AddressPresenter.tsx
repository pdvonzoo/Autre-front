import React from "react";
import styled from "../../Utils/typed-styledCom";

const AddressWrapper = styled.div`
  width: 100%;
`;

const Label = styled.label``;
const Input = styled.input``;

const AddressPresenter = ({ addressValue }: any) => {
  const getAddress = ({ addressValue }: any) => {
    const address =
      addressValue.userSelectedType === "R"
        ? addressValue.roadAddress
        : addressValue.jibunAddress;
    const buildingName = addressValue.buildingName
      ? addressValue.buildingName
      : "";
    return address ? `${address} (${buildingName})` : "";
  };
  return (
    <AddressWrapper>
      <Label>
        <Input defaultValue={addressValue.zonecode} />
      </Label>
      <Label>
        <Input defaultValue={getAddress({ addressValue })} />
      </Label>
      <Label>
        <Input />
      </Label>
    </AddressWrapper>
  );
};

export default AddressPresenter;
