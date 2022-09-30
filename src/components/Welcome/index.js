import { ReactComponent as Ilustracao } from "./ilustracao.svg";
import styled from "styled-components";
import theme from "theme/theme";

const StyledDiv = styled.div`
  background-color: ${theme.colors.positive.x400};
  width: 690px;
  height: 50%;
  margin-top: 1rem;
  border-radius: 8px;
  padding: 24px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${theme.typography.fontFamily};
`;

const Data = styled.p`
  font-size: ${theme.typography.variants.body3.fontSize.xs};
  color: ${theme.colors.neutral.x050};
`;

const StyledIlustracao = styled(Ilustracao)`
  height: ${({ height }) => height || "283px"};
  width: ${({ width }) => width || "229px"};
`;

const Title = styled.h1`
  font-weight: ${theme.typography.variants.body1.fontWeight.md};
  font-size: ${theme.typography.variants.body1.fontSize.md};
  color: ${theme.colors.neutral.x050};
`;

export default function Welcome() {
  const data = Date.now();
  const hoje = new Date(data);
  const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  return (
    <StyledDiv>
      <Title>Olá, Neilton!</Title>
      <Data>{`${
        diasDaSemana[hoje.getDay()]
      }, ${hoje.toLocaleDateString()}`}</Data>
      <StyledIlustracao height="190px" />
    </StyledDiv>
  );
}
