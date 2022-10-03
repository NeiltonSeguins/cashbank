import styled from "styled-components";
import theme from "theme/theme";
import {
  Container,
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTitle,
} from "theme/UI";
import { ReactComponent as Ilustracao } from "./ilustracao.svg";
import { ReactComponent as DetalheSup } from "./detalhe-sup.svg";
import { ReactComponent as DetalheInf } from "./detalhe-inf.svg";

const StyledContainer = styled(Container)`
  flex-direction: column;
  width: 60%;
  height: 100%;
`;

const Box = styled(StyledDiv)`
  background-color: ${theme.colors.neutral.x200};
  margin-top: 1rem;
  width: 690px;
  height: 50%;
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledIlustracao = styled(Ilustracao)`
  height: ${({ height }) => height || "283px"};
  width: ${({ width }) => width || "329px"};
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

export default function Transacao() {
  return (
    <Box>
      <StyledDetalheSup />
      <StyledContainer>
        <StyledTitle>Nova transação</StyledTitle>
        <StyledForm>
          <StyledSelect>
            <option value="Selecione o tipo de transação" selected>
              Selecione o tipo de transação
            </option>
            <option value="Transferência">Transferência</option>
            <option value="Depósito">Depósito</option>
          </StyledSelect>
          <StyledLabel>Valor</StyledLabel>
          <StyledInput placeholder="00,00"></StyledInput>
          <StyledButton>Realizar transação</StyledButton>
        </StyledForm>
      </StyledContainer>
      <StyledIlustracao />
      <StyledDetalheInf />
    </Box>
  );
}
