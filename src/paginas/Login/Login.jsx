import { Col, Container, Row } from 'react-grid-system';
import { Logo } from './Logo';
import { Card } from '../../componentes/Card/Card';
import { Tipografia } from '../../componentes/Tipografia/Tipografia';
import { CampoTexto } from '../../componentes/CampoTexto/CampoTexto';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Botao } from '../../componentes/Botao/Botao';
import styled from '@emotion/styled';
import { Link } from '../../componentes/Link/Link';

import LoginLogo from './assets/login.svg';

const FormEstilizado = styled.form`
  border-bottom: 1px solid;
  border-color: ${props => props.theme.cores.primarias.a};
  padding-bottom: 40px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Container>
      <Row justify='center' style={{ margin: '80px 0' }}>
        <Col lg={6} md={8} sm={12}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Logo />
          </div>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <Tipografia variante='h1' componente='h1'>
                Efetuar Login
              </Tipografia>
            </div>
            <FormEstilizado>
              <CampoTexto
                titulo='Email'
                valor={email}
                onChange={setEmail}
                tipo='email'
              />
              <CampoTexto
                titulo='Senha'
                valor={senha}
                onChange={setSenha}
                tipo='password'
              />
              <div style={{ textAlign: 'right' }}>
                <RouterLink to=''>
                  <Tipografia variante='legenda' componente='legenda'>
                    Esqueceu sua senha?
                  </Tipografia>
                </RouterLink>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Botao>
                  Login
                  <img src={LoginLogo} alt='Logo de um mouse com o fio em volta.' />
                </Botao>
              </div>
            </FormEstilizado>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Tipografia variante='legenda' componente='legenda'>
                Ainda não criou sua conta no Freelando?
              </Tipografia>
              <RouterLink to='/cadastro'>
                <Link variante='secundaria'>
                  Cadastre-se clicando aqui!
                </Link>
              </RouterLink>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
