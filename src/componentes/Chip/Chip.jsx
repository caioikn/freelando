import styled from '@emotion/styled';

const StyledSpan = styled.span`
    background: ${props => props.theme.cores.neutras.c};
    border: 1px solid;
    border-color: ${props => props.theme.cores.neutras.a};
    border-radius: 16px;
    box-sizing: border-box;
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin: ${props => props.theme.espacamentos.xs};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};

    &:hover {
      background-color: ${props => props.theme.cores.secundarias.b};
      border-color: ${props => props.theme.cores.primarias.b};
      color: ${props => props.theme.cores.primarias.b};
    }
`;

const Chip = ({ children }) => {
  return (
    <StyledSpan>
      {children}
    </StyledSpan>
  );
};

export default Chip;
