import styled from '@emotion/styled';

const ListaEstilizada = styled.ul`
  align-items: center;
  display: inline-flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: ${props => props.theme.espacamentos.xs};
`;

export const ListaLink = ({ children }) => {
  return (
    <ListaEstilizada>
      {children}
    </ListaEstilizada>
  );
};
