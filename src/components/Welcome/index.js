import React from "react";
import styled from "styled-components";
import theme from "theme/theme";

const StyledDiv = styled.div`
  background-color: ${theme.colors.positive.x400};
  width: 690px;
  height: 320px;
  margin-top: 1rem;
  border-radius: 8px;
  padding: 24px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

const Title = styled.h1`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.variants.heading3.fontSize.md};
  font-weight: ${theme.typography.variants.heading3.fontWeight.md};
  color: ${theme.colors.neutral.x050};
`;

export default function Welcome() {
  return (
    <StyledDiv>
      <Title>Olá, Joana!</Title>
    </StyledDiv>
  );
}
