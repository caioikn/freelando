import { Outlet } from 'react-router-dom';
import { Cabecalho } from '../componentes/Cabecalho/Cabecalho';
import { Rodape } from '../componentes/Rodape/Rodape';

const LayoutBase = ({ children, logado = false }) => {
  return (
    <>
      <Cabecalho logado={logado} />
      <Outlet />
      {children}
      <Rodape />
    </>
  );
};

export default LayoutBase;
