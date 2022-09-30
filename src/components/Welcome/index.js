import { ReactComponent as Ilustracao } from "./ilustracao.svg";
import { ReactComponent as DetalheSup } from "./detalhe-sup.svg";
import { ReactComponent as DetalheInf } from "./detalhe-inf.svg";
import styled from "styled-components";
import theme from "theme/theme";

const StyledDiv = styled.div`
  background-color: ${theme.colors.positive.x400};
  width: 690px;
  height: 50%;
  margin-top: 1rem;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${theme.typography.fontFamily};
  position: relative;
`;

const Data = styled.p`
  font-size: ${theme.typography.variants.body3.fontSize.xs};
  color: ${theme.colors.neutral.x050};
`;

const StyledIlustracao = styled(Ilustracao)`
  height: ${({ height }) => height || "283px"};
  width: ${({ width }) => width || "229px"};
  z-index: 1;
`;

const StyledDetalheSup = styled(DetalheSup)`
  height: ${({ height }) => height || "200px"};
  width: ${({ width }) => width || "200px"};
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledDetalheInf = styled(DetalheInf)`
  height: ${({ height }) => height || "200px"};
  width: ${({ width }) => width || "200px"};
  position: absolute;
  bottom: 0;
  left: 0;
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
      <StyledDetalheSup />
      <StyledDetalheInf />
      <Title>Olá, Neilton!</Title>
      <Data>{`${
        diasDaSemana[hoje.getDay()]
      }, ${hoje.toLocaleDateString()}`}</Data>
      <StyledIlustracao height="190px" />
    </StyledDiv>
  );
}
