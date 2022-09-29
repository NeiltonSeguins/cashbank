import styled from "styled-components";
import theme from "theme/theme";

const StyledDiv = styled.div`
  background-color: ${theme.colors.neutral.x200};
  width: 690px;
  height: 249px;
  margin-top: 1rem;
  border-radius: 8px;
  padding: 24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Title = styled.h3`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.variants.heading3.fontSize.xs};
  font-weight: ${theme.typography.variants.heading3.fontWeight.xs};
  color: ${theme.colors.neutral.x900};
`;

export default function Transacao() {
  return (
    <StyledDiv>
      <Title>Nova transação</Title>
    </StyledDiv>
  );
}
