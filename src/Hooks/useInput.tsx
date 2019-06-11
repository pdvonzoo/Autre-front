import React from "react";

interface IProps {
  value: string;
  setValue: any;
  onChange: any;
}

const useInput = (defaultValue: string) => {
  const [value, setValue] = React.useState(defaultValue);

  const onChange = (e: any) => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  return { value, onChange, setValue };
};

export default useInput;
