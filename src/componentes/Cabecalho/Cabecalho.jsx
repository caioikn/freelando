import styled from '@emotion/styled';
import { FreelandoLogo } from '../Icones/IconeFreelando';
import { Col, Container, Row } from 'react-grid-system';
import { Link } from '../Link/Link';
import { Link as RouterLink } from 'react-router-dom';

import avatar from '../../../public/avatar.png';

const HeaderEstilizada = styled.header`
  background-color: ${props => props.theme.cores.primarias.a};
  padding: ${props => props.theme.espacamentos.m} 120px;
`;

const ListaEstilizada = styled.ul`
  align-items: center;
  display: inline-flex;
  gap: ${props => props.theme.espacamentos.l};
  margin: 0;
  text-align: center;
`;

const ImagemEstilizadda = styled.img`
  width: 64px;
`;

export const Cabecalho = ({ logado }) => {
  if (logado) {
    return (
      <HeaderEstilizada>
        <Container>
          <Row align='center'>
            <Col>
              <RouterLink to='/'>
                <FreelandoLogo />
              </RouterLink>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <nav>
                <ListaEstilizada>
                  <RouterLink to='./'>
                    <Link>
                      Contrate
                    </Link>
                  </RouterLink>
                  <RouterLink to='./'>
                    <Link>
                      Encontre Trabalho
                    </Link>
                  </RouterLink>
                  <RouterLink to='./'>
                    <Link>
                      Meus projetos
                    </Link>
                  </RouterLink>
                  <ImagemEstilizadda src={avatar} alt="Ícone ed usuário." />
                  <RouterLink to='./'>
                    <Link>
                      Sair
                    </Link>
                  </RouterLink>
                </ListaEstilizada>
              </nav>
            </Col>
          </Row>
        </Container>
      </HeaderEstilizada>
    );
  }

  return (
    <HeaderEstilizada>
      <Container>
        <Row align='center'>
          <Col>
            <RouterLink to='/'>
              <FreelandoLogo />
            </RouterLink>
          </Col>
          <Col style={{ textAlign: 'right' }}>
            <RouterLink to='/login'>
              <Link>
                Login
              </Link>
            </RouterLink>
          </Col>
        </Row>
      </Container>
    </HeaderEstilizada>
  );
};
