import styled from '@emotion/styled';
import { Tipografia } from '../../../../componentes/Tipografia/Tipografia';
import { IconeCertificado } from '../icones/IconeCertificado';
import { Col, Row } from 'react-grid-system';
import { IconeConexoes } from '../icones/IconeConexoes';
import { IconeAtendimento } from '../icones/IconeAtendimento';
import { IconeSeguranca } from '../icones/IconeSeguranca';

const dadosCliente = [
  {
    icone: <IconeCertificado />,
    texto: 'Profissionais qualificados'
  },
  {
    icone: <IconeConexoes />,
    texto: 'Múltiplas especialidades'
  },
  {
    icone: <IconeAtendimento />,
    texto: 'Atendimento e Agilidade'
  },
  {
    icone: <IconeSeguranca />,
    texto: 'Simplicidade e Segurança'
  }
];

const DivEstilizada = styled.div`
  margin-bottom: 56px;
  text-align: center;
`;

const CardEstilizado = styled.div`
  background-color: ${props => props.theme.cores.secundarias.a};
  border-radius: 16px;
  color: ${props => props.theme.cores.primarias.a};
  padding: ${props => props.theme.espacamentos.m} 0;

  h3 {
    margin-bottom: 0;
    margin-top: ${props => props.theme.espacamentos.s};
  }
`;

const CardCliente = () => {
  return (
    <DivEstilizada>
      <Tipografia variante='h2' componente='h2'>
        Vantagens para contratantes
      </Tipografia>
      <Row>
        {dadosCliente.map(cliente =>
          <Col lg={3} md={6} sm={6} style={{ marginBottom: '24px' }} key={cliente.texto}>
            <CardEstilizado>
              {cliente.icone}
              <Tipografia variante='h3' componente='h3'>
                {cliente.texto}
              </Tipografia>
            </CardEstilizado>
          </Col>
        )}
      </Row>
    </DivEstilizada>
  );
};

export default CardCliente;