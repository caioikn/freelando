import { Col, Container, Row } from 'react-grid-system';
import { Botao } from '../../../componentes/Botao/Botao'
import { Tipografia } from '../../../componentes/Tipografia/Tipografia';
import imagemBanner from './pessoas.png';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const SectionEstilizada = styled.section`
  background-color: ${props => props.theme.cores.neutras.c};
  color: ${props => props.theme.cores.primarias.b};
  padding-top: ${props => props.theme.espacamentos.l};
  padding-bottom: 55px;
  margin: 0;

  img {
    max-width: 100%;
  }
`;

const Banner = () => {
  return (
    <SectionEstilizada>
      <Container>
        <Row align='center'>
          <Col md={5} sm={12}>
            <Tipografia variante='h1' componente='h1'>
              Uma ponte entre os freelas mais talentosos e os projetos mais interessantes!
            </Tipografia>
            <Link to='/cadastro'>
              <Botao>Quero me cadastrar!</Botao>
            </Link>
          </Col>
          <Col md={7} sm={12} style={{ textAlign: 'right' }}>
            <img
              src={imagemBanner}
              alt="Fotos de duas mulheres utilizando o notebook e de um homem olhando para baixo."
            />
          </Col>
        </Row>
      </Container>
    </SectionEstilizada>
  );
};

export default Banner;
