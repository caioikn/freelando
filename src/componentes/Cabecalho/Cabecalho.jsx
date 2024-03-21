import styled from '@emotion/styled';
import { FreelandoLogo } from '../Icones/IconeFreelando';
import { Link } from 'react-router-dom';

const HeaderEstilizada = styled.header`
  align-items: center;
  background-color: ${props => props.theme.cores.primarias.a};
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.espacamentos.m} 120px;
`;

const ButtonEstilizado = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.cores.neutras.c};
  font-family: ${props => props.theme.fontFamily};
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.cores.dark.a};
  }
`;

export const Cabecalho = () => {
  return (
    <HeaderEstilizada>
      <Link to='/cadastro'>
        <FreelandoLogo />
      </Link>
      <ButtonEstilizado>Login</ButtonEstilizado>
    </HeaderEstilizada>
  );
};
