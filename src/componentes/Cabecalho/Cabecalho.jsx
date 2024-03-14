import styled from '@emotion/styled';

const HeaderEstilizada = styled.header`
  align-items: center;
  background-color: ${props => props.theme.cores.primarias.a};
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.espacamentos.m} 120px;
`;

export const Cabecalho = () => {
  return (
    <HeaderEstilizada>
      <h2>Freelando</h2>

      <button>Login</button>
    </HeaderEstilizada>
  );
};
