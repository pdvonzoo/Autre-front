import React from "react";

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
