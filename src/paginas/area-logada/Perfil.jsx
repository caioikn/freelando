import styled from '@emotion/styled';
import { Col, Container, Row } from 'react-grid-system';
import { Card } from '../../componentes/Card/Card';
import { Tipografia } from '../../componentes/Tipografia/Tipografia';
import { CampoTexto } from '../../componentes/CampoTexto/CampoTexto';
import { Botao } from '../../componentes/Botao/Botao';

import banner from './assets/perfil-bg.png';
import iconeSalvar from './assets/salvar.svg';
import avatar from '../../../public/avatar.png';

const TituloEstilizado = styled.h1`
  background: url(${banner}) no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0 0 80px 0;
  padding: 98.5px 0;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  width: 100%;
`;

const FormEstilizado = styled.form`
  h2 {
    margin-top: 0;
  }
`;

const Perfil = () => {
  return (
    <>
      <TituloEstilizado>
        Meu perfil
      </TituloEstilizado>
      <Container style={{ marginBottom: '80px' }}>
        <Row>
          <Col sm={12} lg={4}>
            <Card>
              <div style={{ textAlign: 'center' }}>
                <Tipografia variante='h2' componente='h2'>Nome Completo</Tipografia>
                <img src={avatar} alt='Foto do usuário.' />
              </div>
            </Card>
          </Col>
          <Col sm={12} lg={8}>
            <FormEstilizado>
              <Tipografia variante='h2' componente='h2'>Revise seus dados</Tipografia>
              <CampoTexto titulo='Nome' />
              <CampoTexto titulo='Sobrenome' />
              <Row>
                <Col sm={12} lg={6}>
                  <CampoTexto titulo='Celular' />
                </Col>
                <Col sm={12} lg={6}>
                  <CampoTexto titulo='Email' />
                </Col>
                <Col sm={12} lg={6}>
                  <CampoTexto titulo='Código postal' />
                </Col>
                <Col sm={12} lg={6}>
                  <CampoTexto titulo='País' />
                </Col>
                <Col sm={12} lg={6}>
                  <Botao perfil>
                    Salvar
                    <img src={iconeSalvar} alt="" />
                  </Botao>
                </Col>
              </Row>
            </FormEstilizado>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Perfil;
