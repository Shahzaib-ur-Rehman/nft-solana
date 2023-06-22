import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

type InputType = {
  value: string | undefined;
  onChange: ChangeEventHandler;
};
const Input = ({ value, onChange }: InputType) => {
  const Input = styled.input`
    padding: 10px 20px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-width: 300px;
  `;
  return (
    <div>
      <Input value={value} onChange={onChange} id="simpleInput" placeholder="Search nft name" type="text" />
    </div>
  );
};

export default Input;
