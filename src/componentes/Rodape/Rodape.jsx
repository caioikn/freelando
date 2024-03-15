import styled from '@emotion/styled';
import { FreelandoLogo } from '../Icones/IconeFreelando';
import { Col, Container, Row } from 'react-grid-system';
import { Tipografia } from '../Tipografia/Tipografia';
import { IconeWhatsApp } from '../Icones/IconeWhats';
import { IconeTwitch } from '../Icones/IconeTwitch';
import { IconeInstagram } from '../Icones/IconeInstagram';
import { IconeTwitter } from '../Icones/IconeTwitter';
import { ListaLink } from '../Lista/ListaLink';

const FooterEstilizado = styled.footer`
  background-color: ${props => props.theme.cores.primarias.a};
  color: ${props => props.theme.cores.branco};
  padding: ${props => props.theme.espacamentos.xl} 0;
`;

export const Rodape = () => {
  return (
    <FooterEstilizado>
      <Container>
        <Row>
          <Col>
            <FreelandoLogo width={176} height={40} />
            <Tipografia variante='legenda' componente='legenda'>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Tipografia>
          </Col>
          <Col style={{ textAlign: 'right' }}>
            <Tipografia variante='legenda' componente='legenda'>Acesse nossas redes:</Tipografia>
            <ListaLink>
              <li>
                <a href="index.html" aria-label='Link para WhatsApp'>
                  <IconeWhatsApp />
                </a>
              </li>
              <li>
                <a href="index.html" aria-label='Link para Twitch'>
                  <IconeTwitch />
                </a>
              </li>
              <li>
                <a href="index.html" aria-label='Link para WhatsApp'>
                  <IconeInstagram />
                </a>
              </li>
              <li>
                <a href="index.html" aria-label='Link para WhatsApp'>
                  <IconeTwitter />
                </a>
              </li>
            </ListaLink>
          </Col>
        </Row>
      </Container>
    </FooterEstilizado>
  );
};
