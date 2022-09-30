import { Container } from "components/UI";
import styled from "styled-components";
import theme from "theme/theme";
import { ReactComponent as Ilustracao } from "./ilustracao.svg";
import { ReactComponent as DetalheSup } from "./detalhe-sup.svg";
import { ReactComponent as DetalheInf } from "./detalhe-inf.svg";

const StyledContainer = styled(Container)`
  flex-direction: column;
  width: 60%;
  height: 100%;
`;

const StyledIlustracao = styled(Ilustracao)`
  height: ${({ height }) => height || "283px"};
  width: ${({ width }) => width || "329px"};
`;

const StyledDiv = styled.div`
  background-color: ${theme.colors.neutral.x200};
  width: 690px;
  height: 50%;
  margin-top: 1rem;
  border-radius: 8px;
  padding: 24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-family: ${theme.typography.fontFamily};
  display: flex;
  align-items: center;
  position: relative;
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

const Title = styled.h3`
  font-size: ${theme.typography.variants.heading3.fontSize.xs};
  font-weight: ${theme.typography.variants.heading3.fontWeight.xs};
  color: ${theme.colors.neutral.x900};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  padding-top: 24px;
  z-index: 1;
`;

const StyledSelect = styled.select`
  border-radius: 6px;
  padding: 8px;
  border: 1px solid ${theme.colors.positive.x200};
  font-size: ${theme.typography.variants.body3.fontSize.xs};
  outline: none;
`;

const StyledLabel = styled.label`
  padding: 0.8rem 0;
  font-size: ${theme.typography.variants.heading4.fontSize.xs};
  font-weight: ${theme.typography.variants.heading3.fontWeight.md};
`;

const StyledInput = styled.input`
  border-radius: 6px;
  padding: 8px;
  border: 1px solid ${theme.colors.positive.x200};
  font-size: ${theme.typography.variants.body3.fontSize.xs};
  outline: none;
  text-align: center;
  width: 70%;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  background-color: ${theme.colors.positive.x300};
  color: ${theme.colors.neutral.x050};
  padding: 0.8rem 0;
  width: 70%;
  border: none;
  border-radius: 6px;
  font-size: ${theme.typography.variants.body2.fontSize.xs};
  font-weight: ${theme.typography.variants.heading1.fontWeight.md};
  cursor: pointer;
  transition: 0.1s ease-in;

  &:hover {
    background-color: ${theme.colors.positive.x400};
  }
`;

export default function Transacao() {
  return (
    <StyledDiv>
      <StyledDetalheSup />
      <StyledContainer>
        <Title>Nova transação</Title>
        <StyledForm>
          <StyledSelect>
            <option value="Selecione o tipo de transação" selected>
              Selecione o tipo de transação
            </option>
            <option value="Transferência">Transferência</option>
            <option value="Pagamento">Pagamento</option>
            <option value="Depósito">Depósito</option>
            <option value="Pix">Pix</option>
          </StyledSelect>
          <StyledLabel>Valor</StyledLabel>
          <StyledInput placeholder="00,00"></StyledInput>
          <StyledButton>Realizar transação</StyledButton>
        </StyledForm>
      </StyledContainer>
      <StyledIlustracao />
      <StyledDetalheInf />
    </StyledDiv>
  );
}
