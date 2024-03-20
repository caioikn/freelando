import styled from '@emotion/styled';
import clienteConcluido from './assets/cliente-concluido.png';
import { Link } from 'react-router-dom';
import { Botao } from '../../componentes/Botao/Botao';
import { Col, Row } from 'react-grid-system';
import CabecalhoCadastro from '../../componentes/CabecalhoCadastro/CabecalhoCadastro';

const ImagemEstilizada = styled.img`
  border-radius: 16px;
  max-width: 100%;
  margin: ${props => props.theme.espacamentos.l} 0;
`;

const Concluido = () => {
  return (
    <div>
      <CabecalhoCadastro
        titulo='Seu perfil está completo!'
        descricao='Agora é só começar a se conectar com os melhores freelancers do mercado!'
      />
      <figure>
        <ImagemEstilizada src={clienteConcluido} alt="" />
      </figure>
      <Row justify='center'>
        <Col md={6} sm={6} style={{ textAlign: 'center' }}>
          <Link to='/cadastro' style={{ textDecoration: 'none' }}>
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
