import styled from '@emotion/styled';

const DivEstilizada = styled.div`
  background: ${props => props.theme.cores.secundarias.a};
  border: 1px solid;
  border-color: ${props => props.theme.cores.primarias.a};
  border-radius: ${props => props.theme.espacamentos.s};
  padding: ${props => props.theme.espacamentos.l};
  text-align: center;
`;

export const Card = ({ children }) => {
  return (
    <DivEstilizada>
      {children}
    </DivEstilizada>
  );
};
