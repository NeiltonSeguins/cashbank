import { Container } from "components/UI";
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
  width: 15%;
  height: 100%;
  border-radius: 8px;
  padding: 24px;
  background-color: ${theme.colors.positive.x300};
`;

const Item = styled.li`
  font-family: ${theme.typography.fontFamily};
  text-align: center;
  color: ${theme.colors.neutral.x050};
  font-size: ${theme.typography.variants.heading1};
  cursor: pointer;
`;

const StyledDiv = styled(Container)`
  height: 84vh;
`;

const StyledDivider = styled.div`
  width: 90%;
  height: 1px;
  background-color: ${theme.colors.neutral.x050};
  margin: 1rem auto;
`;

export default function Menu() {
  return (
    <StyledDiv>
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
    </StyledDiv>
  );
}
