import styled from "styled-components";

const Label = styled.span`
  color: #343a40;
  width: auto;
`;

const Dropdown = styled.select`
  width: 100%;
  height: 50px;
  font-size: 17px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #343a40;
  color: #343a40;
  padding: 10px;
  padding-right: 38px;
  margin: 10px 0px 10px 0px;
  /* Adding transition effect */
  transition: color 0.3s ease, background-color 0.3s ease,
    border-bottom-color 0.3s ease;
  &:hover {
    color: #fff;
    background-color: #343a40;
    border-bottom-color: #dcdcdc;
  }
`;

export const DropdownField = ({ label, ...props }) => {
  return (
    <span>
      <Label>{label}</Label>
      <Dropdown {...props} />
    </span>
  );
};
