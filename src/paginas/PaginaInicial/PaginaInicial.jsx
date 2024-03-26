import { Container } from 'react-grid-system';
import Banner from './Banner/Banner';
import CardCliente from './Vantagens/cards/CardCliente';
import CardFreela from './Vantagens/cards/CardFreela';
import Habilidades from './Habilidades/Habilidades';

const PaginaInicial = () => {
  return (
    <>
      <Banner />
      <Container>
        <CardCliente />
        <CardFreela />
        <Habilidades />
      </Container>
    </>
  );
};

export default PaginaInicial;
