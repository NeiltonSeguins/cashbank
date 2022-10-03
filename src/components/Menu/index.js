import React from "react";
import styled from "styled-components";
import theme from "theme/theme";
import { StyledDivider, StyledItem, StyledLista } from "theme/UI";

const listaMenu = [
  "Inicial",
  "Transferências",
  "Investimentos",
  "Outros serviços",
];

const StyledMenu = styled(StyledLista)`
  width: 180px;
  border-radius: 8px;
  padding: 24px;
  background-color: ${theme.colors.neutral.x050};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export default function Menu() {
  return (
    <StyledMenu>
      {listaMenu.map((item, index) => {
        return (
          <div key={item}>
            <StyledItem>{item}</StyledItem>
            {index !== listaMenu.length - 1 && <StyledDivider/>}
          </div>
        );
      })}
    </StyledMenu>
  );
}
