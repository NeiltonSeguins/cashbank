import React from "react";
import styled from "styled-components";
import theme from "theme/theme";
import { ReactComponent as Icon } from "./eye-icon.svg";
import { Container, StyledDivider, StyledParagraph } from "theme/UI";

const Box = styled(Container)`
  flex-direction: column;
  width: 190px;
  height: 100%;
`;

const Wrapper = styled(Container)`
  width: 180px;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  height: ${({ height }) => height || "283px"};
  width: ${({ width }) => width || "229px"};
  cursor: pointer;
`;

const Divider = styled(StyledDivider)`
  background-color: ${theme.colors.neutral.x050};
  width: 100%;
`;

const Title = styled(StyledParagraph)`
  color: ${theme.colors.neutral.x050};
  font-size: ${theme.typography.variants.heading3.fontSize.xs};
  font-weight: ${theme.typography.variants.body2.fontWeight.xs};
  margin-right: 2rem;
`;

const Text = styled(StyledParagraph)`
  color: ${theme.colors.neutral.x050};
`;

const Valor = styled(StyledParagraph)`
  color: ${theme.colors.neutral.x050};
  font-size: ${theme.typography.variants.heading2.fontSize.xs};
  font-weight: ${theme.typography.variants.body1.fontWeight.xs};
  margin: 1rem 0;
`;

export default function Saldo() {
  return (
    <Box>
      <Wrapper>
        <Title>Saldo</Title>
        <StyledIcon height="20px" width="20px" />
      </Wrapper>
      <Divider />
      <Text>Conta corrente</Text>
      <Valor>R$ 2.500,00</Valor>
    </Box>
  );
}
