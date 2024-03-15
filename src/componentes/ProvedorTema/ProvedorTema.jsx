import { ThemeProvider } from '@emotion/react';

const tema = {
  cores: {
    branco: '#FFFFFF',
    atencao: '',
    focus: '#B009FF',
    primarias: {
      a: '#5754ED',
      b: '#D93114',
      c: ''
    },
    secundarias: {
      a: '#F8F8FD',
      b: '',
      c: ''
    },
    neutras: {
      a: '#373737',
      b: '#E8E8E8',
      c: '#F5F5F5',
      d: ''
    },
    dark: {
      a: '#110EA0',
      b: '#B61B00'
    }
  },
  espacamentos: {
    xs: '8px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '48px'
  },
  fontFamily: "'Montserrat', sans-serif"
};

export const ProvedorTema = ({ children }) => {
  return (
    <ThemeProvider theme={tema}>
      {children}
    </ThemeProvider>
  );
};
