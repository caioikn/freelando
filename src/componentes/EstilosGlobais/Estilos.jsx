import { Global } from '@emotion/react';

const estilos = tema => {
  return {
    html: {
      fontFamily: tema.fontFamily
    },
    body: {
      margin: 0,
      padding: 0,
      overflowX: 'hidden'
    },
    a: {
      textDecoration: 'none'
    }
  };
};

export const Estilos = () => {
  return (
    <Global styles={estilos} />
  );
};
