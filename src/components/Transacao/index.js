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
import { useContext, useState } from "react";
import { MyContext } from "providers/provider";

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
  const { transacao, setTransacao } = useContext(MyContext);
  const [valor, setValor] = useState(0);
  const [tipoTransacao, setTipoTransacao] = useState(0);

  const handleChange = (e) => {
    if (e.target.value !== " ") {
      const novoValor = Number(e.target.value);
      setValor(novoValor);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      if (tipoTransacao.tipo === "Selecione um tipo de transação") {
        alert("Selecione um tipo de transação");
      } else if (tipoTransacao.tipo === "Depósito") {
        alert("Depósito realizado com sucesso!");
        setTransacao({ valor: transacao.valor + valor });
      } else if (
        tipoTransacao.tipo === "Transferência" &&
        transacao.valor > 0
      ) {
        alert("Transferência realizada com sucesso!");
        setTransacao({ valor: transacao.valor - valor });
      } else if (
        tipoTransacao.tipo === "Transferência" &&
        transacao.valor <= 0
      ) {
        alert("Saldo insuficiente!");
      } else if (
        tipoTransacao.tipo === "Transferência" &&
        valor > transacao.valor
      ) {
        alert("Saldo insuficiente");
      }
    }, 1000);
  };

  return (
    <Box>
      <StyledDetalheSup />
      <StyledContainer>
        <StyledTitle>Nova transação</StyledTitle>
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <StyledSelect
            onChange={(e) => {
              console.log("mudou");
              setTipoTransacao({ tipo: e.target.value });
            }}
          >
            <option defaultValue="Selecione o tipo de transação">
              Selecione o tipo de transação
            </option>
            <option value="Transferência">Transferência</option>
            <option value="Depósito">Depósito</option>
          </StyledSelect>
          <StyledLabel>Valor</StyledLabel>
          <StyledInput
            placeholder="00,00"
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <StyledButton type="submit">Realizar transação</StyledButton>
        </StyledForm>
      </StyledContainer>
      <StyledIlustracao />
      <StyledDetalheInf />
    </Box>
  );
}
