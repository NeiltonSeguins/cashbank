import styled from "styled-components";
import theme from "theme/theme";

const StyledDiv = styled.div`
  background-color: ${theme.colors.neutral.x050};
  width: 282px;
  margin-top: 1rem;
  border-radius: 8px;
  padding: 24px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Title = styled.h2`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.variants.heading3.fontSize.xs};
  font-weight: ${theme.typography.variants.heading3.fontWeight.xs};
  color: ${theme.colors.neutral.x900};
`;

export default function Extrato() {
  return (
    <StyledDiv>
      <Title>Extrato</Title>
    </StyledDiv>
  );
}
