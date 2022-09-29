import { StyledDivider } from "components/Menu";
import styled from "styled-components";
import theme from "theme/theme";
import extrato from "./transacoes";

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

const Paragraph = styled.p`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.variants.body4.fontSize.xs};
  font-weight: ${theme.typography.variants.body4.fontWeight.md};
  color: ${theme.colors.positive.x400};
  margin-top: 0.8rem;
  margin-bottom: 0.3rem;
`;

const Lista = styled.ul`
  list-style: none;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.variants.body3.fontSize.xs};
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

const Text = styled.h3`
  margin-top: 0.4rem;
`;

export default function Extrato() {
  return (
    <StyledDiv>
      <Title>Extrato</Title>
      {extrato.map((item) => {
        return (
          <>
            <Paragraph>{item.mes}</Paragraph>
            <Lista>
              {item.transacoes.map((transacao, index) => {
                return (
                  <li key={index}>
                    <Item>
                      <p>{transacao.descricao}</p>
                      <span>{transacao.dataPagamento}</span>
                    </Item>
                    <Text>{transacao.valorPagamento}</Text>
                    {index !== item.transacoes.length - 1 && <Divider />}
                  </li>
                );
              })}
            </Lista>
          </>
        );
      })}
    </StyledDiv>
  );
}
