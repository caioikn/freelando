import { createBrowserRouter } from 'react-router-dom';
import SelecaoCliente from '../paginas/cadastro/SelecaoCliente';
import LayoutBaseCadastro from '../paginas/cadastro/LayoutBaseCadastro';
import LayoutBase from '../paginas/LayoutBase';
import Interesses from '../paginas/cadastro/Interesses';
import DadosPessoais from '../paginas/cadastro/DadosPessoais';
import Concluido from '../paginas/cadastro/Concluido';
import PaginaInicial from '../paginas/PaginaInicial/PaginaInicial';
import Pagina404 from '../paginas/erros/Pagina404';
import Login from '../paginas/Login/Login';
import Perfil from '../paginas/area-logada/Perfil';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutBase />,
    ErrorBoundary: Pagina404,
    children: [
      {
        path: '',
        element: <PaginaInicial />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'cadastro',
        element: <LayoutBaseCadastro />,
        children: [
          {
            path: '',
            element: <SelecaoCliente />
          },
          {
            path: 'interesses',
            element: <Interesses />
          },
          {
            path: 'dados-pessoais',
            element: <DadosPessoais />
          },
          {
            path: 'concluido',
            element: <Concluido />
          }
        ]
      }
    ],
  },
  {
    path: '/',
    element: <LayoutBase logado={true} />,
    ErrorBoundary: Pagina404,
    children: [
      {
        path: 'area-logada',
        children: [
          {
            path: 'perfil',
            element: <Perfil />
          }
        ]
      }
    ]
  }
]);
