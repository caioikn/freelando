import { Outlet } from 'react-router-dom';
import { Cabecalho } from '../componentes/Cabecalho/Cabecalho';
import { Rodape } from '../componentes/Rodape/Rodape';

const LayoutBase = ({ children }) => {
  return (
    <>
      <Cabecalho />
      <Outlet />
      {children}
      <Rodape />
    </>
  );
};

export default LayoutBase;
