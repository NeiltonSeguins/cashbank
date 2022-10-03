import {
  StyledDiv,
  StyledDivider,
  StyledLista,
  StyledParagraph,
  StyledTitle,
} from "theme/UI";
import styled from "styled-components";
import theme from "theme/theme";
import extrato from "./transacoes";

const Box = styled(StyledDiv)`
  width: 282px;
`;

const Paragraph = styled(StyledParagraph)`
  font-size: ${theme.typography.variants.body4.fontSize.xs};
  font-weight: ${theme.typography.variants.body4.fontWeight.md};
  margin-top: 0.8rem;
  margin-bottom: 0.3rem;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Divider = styled(StyledDivider)`
  height: 2px;
  width: 100%;
  background-color: ${theme.colors.positive.x100};
`;

const Text = styled(StyledTitle)`
  margin-top: 0.4rem;
  font-size: ${theme.typography.variants.heading4.fontSize.xs};
`;

export default function Extrato() {
  return (
    <Box>
      <StyledTitle>Extrato</StyledTitle>
      {extrato.map((item, index) => {
        return (
          <div key={index}>
            <Paragraph>{item.mes}</Paragraph>
            <StyledLista>
              {item.transacoes.map((transacao) => {
                return (
                  <li key={transacao.id}>
                    <Item>
                      <p>{transacao.tipoTransacao}</p>
                      <span>{transacao.dataPagamento}</span>
                    </Item>
                    {transacao.tipoTransacao === "Transferência" ? (
                      <Text>{`- ${transacao.valorPagamento}`}</Text>
                    ) : (
                      <Text>{transacao.valorPagamento}</Text>
                    )}
                    {index !== item.transacoes.length - 1 && <Divider />}
                  </li>
                );
              })}
            </StyledLista>
          </div>
        );
      })}
    </Box>
  );
}
