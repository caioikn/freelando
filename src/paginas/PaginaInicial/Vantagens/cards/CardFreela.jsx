import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../../../componentes/Tipografia/Tipografia";
import { IconeCheckout } from "../icones/IconeCheckout";
import { IconeCliente } from "../icones/IconeCliente";
import { IconeProjetos } from "../icones/IconeProjetos";
import { IconeRelacionamento } from "../icones/IconeRelacionamento";
import styled from "@emotion/styled";

const dadosFreela = [
  {
    icone: <IconeCliente />,
    texto: 'Clientes verificados'
  },
  {
    icone: <IconeRelacionamento />,
    texto: 'Atendimento e agilidade'
  },
  {
    icone: <IconeProjetos />,
    texto: 'Projetos interessantes'
  },
  {
    icone: <IconeCheckout />,
    texto: 'Remuneração supervisionada'
  },
];

const DivEstlizizada = styled.div`  
  text-align: center;
  margin-bottom: 80px;
`;

const CardEstilizado = styled.div`
  align-items: center;
  background-color: ${props => props.theme.cores.secundarias.c};
  color: ${props => props.theme.cores.primarias.c};
  display: flex;
  gap: 16px;
  padding: ${props => props.theme.espacamentos.m} 97px;
`;

const CardFreela = () => {
  return (
    <DivEstlizizada>
      <Tipografia variante='h2' componente='h2'>
        Vantagens para freelas
      </Tipografia>
      <Row>
        {dadosFreela.map(freela =>
          <Col lg={6} md={12} sm={12} style={{ marginBottom: '24px' }} key={freela.texto}>
            <CardEstilizado>
              {freela.icone}
              <Tipografia variante='h3' componente='h3'>
                {freela.texto}
              </Tipografia>
            </CardEstilizado>
          </Col>
        )}
      </Row>
    </DivEstlizizada>
  );
};

export default CardFreela;
