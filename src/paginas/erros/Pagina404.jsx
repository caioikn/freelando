import { Col, Container, Row } from 'react-grid-system';
import LayoutBase from '../LayoutBase';
import { Card } from '../../componentes/Card/Card';
import { Tipografia } from '../../componentes/Tipografia/Tipografia';
import styled from '@emotion/styled';

import erro404 from './assets/erro-404.png';
import arrowBack from '../../../public/arrow-back.svg';
import { Botao } from '../../componentes/Botao/Botao';
import { Link } from 'react-router-dom';

const ImagemEstilizada = styled.img`
  max-width: 100%;
`;

const Pagina404 = () => {
  return (
    <LayoutBase>
      <Container>
        <Row justify='center' style={{ textAlign: 'center' }}>
          <Col lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
            <Card>
              <Tipografia variante='h1' componente='h1'>
                Ops... Página não encontrada :(
              </Tipografia>
              <ImagemEstilizada src={erro404} alt="Imagem escrito 404 com uma carinha sorrindo ao contrário no lugar do zero." />
              <Tipografia variante='body' componente='body'>
                Não encontramos a página que você está buscando, mas temos muitas outras para você navegar!
              </Tipografia>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Botao variante='secundaria' concluido='true'>
                  <img src={arrowBack} alt="" />
                  Voltar para a home
                </Botao>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </LayoutBase>

  );
};

export default Pagina404;
