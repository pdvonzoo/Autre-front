import React, { FunctionComponent } from "react";
import styled from "../../Utils/typed-styledCom";

const Form = styled.form`
  width: 500rem;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input``;

interface InputValue {
  value: string;
  setValue: any;
  onChange: any;
}

const ProductSettingPresenter: FunctionComponent<{
  productname: InputValue;
  productimage: InputValue;
  price: InputValue;
  color: InputValue;
  text: InputValue;
  size: InputValue;
  handleSubmit: any;
}> = ({ productname, productimage, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        제품 이름
        <Input
          defaultValue={productname.value}
          onChange={productname.onChange}
        />
      </Label>
      <Label>
        제품 이미지
        <Input
          defaultValue={productimage.value}
          onChange={productimage.onChange}
        />
      </Label>
      <button type="button" onClick={handleSubmit}>
        제품 등록
      </button>
    </Form>
  );
};

export default ProductSettingPresenter;
