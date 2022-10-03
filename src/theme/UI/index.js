import styled from "styled-components";
import theme from "theme/theme";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const StyledButton = styled.button`
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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 90%;
  padding-top: 24px;
  z-index: 1;
`;

export const StyledSelect = styled.select`
  border-radius: 6px;
  padding: 8px;
  border: 1px solid ${theme.colors.positive.x200};
  font-size: ${theme.typography.variants.body3.fontSize.xs};
  outline: none;
`;

export const StyledLabel = styled.label`
  padding: 0.8rem 0;
  font-size: ${theme.typography.variants.heading4.fontSize.xs};
  font-weight: ${theme.typography.variants.heading3.fontWeight.md};
`;

export const StyledInput = styled.input`
  border-radius: 6px;
  padding: 8px;
  border: 1px solid ${theme.colors.positive.x200};
  font-size: ${theme.typography.variants.body3.fontSize.xs};
  outline: none;
  text-align: center;
  width: 70%;
  margin-bottom: 1rem;
`;

export const StyledDivider = styled.div`
  width: 90%;
  height: 1px;
  background-color: ${theme.colors.neutral.x900};
  margin: 1rem auto;
`;

export const StyledItem = styled.li`
  text-align: center;
  color: ${theme.colors.neutral.x900};
  font-size: ${theme.typography.variants.heading1};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.neutral.x999};
    font-weight: 600;
  }
`;

export const StyledTitle = styled.h3`
  font-size: ${theme.typography.variants.heading3.fontSize.xs};
  font-weight: ${theme.typography.variants.heading3.fontWeight.xs};
  color: ${theme.colors.neutral.x900};
`;

export const StyledParagraph = styled.p`
  font-size: ${theme.typography.variants.body3.fontSize.xs};
  color: ${theme.colors.positive.x400};
`;

export const StyledLista = styled.ul`
  list-style: none;
`;

export const StyledDiv = styled.div`
  background-color: ${theme.colors.neutral.x050};
  border-radius: 8px;
  padding: 24px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
