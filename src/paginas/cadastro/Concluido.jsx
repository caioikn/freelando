import styled from '@emotion/styled';
import { Tipografia } from '../../componentes/Tipografia/Tipografia';
import clienteConcluido from './assets/cliente-concluido.png';
import { Link } from 'react-router-dom';
import { Botao } from '../../componentes/Botao/Botao';
import { Col, Row } from 'react-grid-system';

const ImagemEstilizada = styled.img`
  border-radius: 16px;
  max-width: 100%;
`;

const Concluido = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Tipografia variante='h1' componente='h1'>
        Seu perfil está completo!
      </Tipografia>
      <Tipografia variante='body' componente='body'>
        Agora é só começar a se conectar com os melhores freelancers do mercado!
      </Tipografia>
      <ImagemEstilizada />
      <figure>
        <ImagemEstilizada src={clienteConcluido} alt="" />
      </figure>
      <Row justify='center'>
        <Col md={6} sm={6} style={{ textAlign: 'center' }}>
          <Link to='/cadastro'>
            <Botao variante='secundaria' concluido='true'>
              <img src="../arrow-back.svg" alt="" />
              Voltar para a home
            </Botao>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Concluido;
