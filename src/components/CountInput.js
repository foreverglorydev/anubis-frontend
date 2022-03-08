import React from "react";
import AmountInput from "./base/AmountInput";
import { AiOutlineCloudUpload } from "react-icons/ai";

const CountInput = ({onChange}) => {
  return (
    <AmountInput
      placeholder="Please Input Mint Amount"
      width={'400px'}
      onChange={onChange}
      icon={<AiOutlineCloudUpload size="30" color="rgba(48,118,234,1)" />}
      />
  );
};

export default CountInput;
