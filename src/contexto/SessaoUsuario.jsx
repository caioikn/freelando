import { createContext, useContext } from 'react';

const SessaoUsuarioContext = createContext({
  usuarioLogado: false,
  login: () => null,
  logout: () => null,
  perfil: {}
});

export const useSessaoUsuarioContext = () => {
  return useContext(SessaoUsuarioContext);
}

export const SessaoUsuarioProvider = ({ children }) => {
  const contexto = {};

  return (
    <SessaoUsuarioContext.Provider value={contexto}>
      {children}
    </SessaoUsuarioContext.Provider>
  );
};
