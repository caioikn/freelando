import styled from '@emotion/styled';
import { FreelandoLogo } from '../Icones/IconeFreelando';
import { Col, Container, Row } from 'react-grid-system';
import { Link } from '../Link/Link';
import { Link as RouterLink } from 'react-router-dom';

const HeaderEstilizada = styled.header`
  background-color: ${props => props.theme.cores.primarias.a};
  padding: ${props => props.theme.espacamentos.m} 120px;
`;

export const Cabecalho = () => {
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
            <Link>Login</Link>
          </Col>
        </Row>
      </Container>
    </HeaderEstilizada>
  );
};
