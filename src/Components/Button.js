import styled from "styled-components";
//----------------button-------------------
export const Button = styled.button`
  apperance: none;
  border: 1px solid #343a40;
  padding: 0.25em 0.5em;
  transition: all 0.5s;
  font-size: 17px;
  &:hover {
    color: #fff;
    background-color: #343a40;
    border: 1px solid #343a40;
  }
  &:disabled {
    cursor: no-drop;
  }
`;
