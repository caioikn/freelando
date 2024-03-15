import { Global } from '@emotion/react';

const estilos = tema => {
  return {
    html: {
      fontFamily: tema.fontFamily
    },
    body: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0
    }
  };
};

export const Estilos = () => {
  return (
    <Global styles={estilos} />
  );
};
