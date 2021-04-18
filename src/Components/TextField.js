import React from "react";

import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #343a40;
  min-height: 35px;
  height: 50px;
  font-size: 17px;
  width: 100%;
  display: initial;
  margin: 10px 0px 10px 0px;
`;

const Label = styled.span`
  color: #343a40;
  width: auto;
`;

export const TextField = ({ label, ...props }) => {
  return (
    <span>
      <Label>{label}</Label>
      <Input {...props} />
    </span>
  );
};
