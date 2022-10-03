import styled from "styled-components";
import theme from "theme/theme";
import { Container, StyledDiv, StyledParagraph } from "theme/UI";
import { ReactComponent as Ilustracao } from "./ilustracao.svg";
import { ReactComponent as DetalheSup } from "./detalhe-sup.svg";
import { ReactComponent as DetalheInf } from "./detalhe-inf.svg";
import Saldo from "./Saldo";

const Box = styled(StyledDiv)`
  background-color: ${theme.colors.positive.x400};
  width: 690px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const Wrapper = styled(Container)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Data = styled(StyledParagraph)`
  font-size: ${theme.typography.variants.body3.fontSize.xs};
  color: ${theme.colors.neutral.x050};
  margin: 0.8rem 0;
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
  const date = Date.now();
  const today = new Date(date);
  const dayOfWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  return (
    <Box>
      <StyledDetalheSup />
      <StyledDetalheInf />
      <Title>Olá, Neilton!</Title>
      <Data>{`${
        dayOfWeek[today.getDay()]
      }, ${today.toLocaleDateString()}`}</Data>
      <Wrapper>
        <StyledIlustracao height="190px" />
        <Saldo />
      </Wrapper>
    </Box>
  );
}
