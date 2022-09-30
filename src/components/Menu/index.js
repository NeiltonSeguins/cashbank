import React from "react";
import styled from "styled-components";
import theme from "theme/theme";

const listaMenu = [
  "Inicial",
  "Transferências",
  "Investimentos",
  "Informe de rendimentos",
  "Outros serviços",
];

const StyledMenu = styled.ul`
  list-style: none;
  margin-top: 1rem;
  width: 180px;
  border-radius: 8px;
  padding: 24px;
  background-color: ${theme.colors.neutral.x050};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Item = styled.li`
  font-family: ${theme.typography.fontFamily};
  text-align: center;
  color: ${theme.colors.neutral.x900};
  font-size: ${theme.typography.variants.heading1};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.neutral.x999};
    font-weight: 600;
  }
`;

export const StyledDivider = styled.div`
  width: 90%;
  height: 1px;
  background-color: ${theme.colors.neutral.x900};
  margin: 1rem auto;
`;

export default function Menu() {
  return (
    <StyledMenu>
      {listaMenu.map((item, key) => {
        return (
          <>
            <Item key={item}>{item}</Item>
            {key !== listaMenu.length - 1 && <StyledDivider />}
          </>
        );
      })}
    </StyledMenu>
  );
}
