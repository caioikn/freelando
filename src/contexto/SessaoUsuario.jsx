import { createContext, useContext } from 'react';
import http from '../http';
import { ArmazenadorToken } from '../utils/ArmazenadorTokes';
import { useNavigate } from 'react-router-dom';

const SessaoUsuarioContext = createContext({
  usuarioLogado: false,
  login: (email, senha) => null,
  logout: () => null,
  perfil: {}
});

export const useSessaoUsuarioContext = () => {
  return useContext(SessaoUsuarioContext);
};

export const SessaoUsuarioProvider = ({ children }) => {
  const login = (email, senha) => {
    http.post('auth/login', {
      email,
      senha
    })
      .then(resposta => {
        ArmazenadorToken.definirTokens(
          resposta.data.access_token,
          resposta.data.refresh_token
        );

        if (resposta.status === 201) {
          window.location.href = '/area-logada/perfil';
        }
      })
      .catch(erro => console.error(erro));
  };

  const contexto = {
    login
  };

  return (
    <SessaoUsuarioContext.Provider value={contexto}>
      {children}
    </SessaoUsuarioContext.Provider>
  );
};
