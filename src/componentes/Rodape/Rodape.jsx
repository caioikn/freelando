import styled from '@emotion/styled';

const FooterEstilizado = styled.footer`
  background-color: ${props => props.theme.cores.primarias.a};
  color: ${props => props.theme.cores.branco};
  padding: ${props => props.theme.espacamentos.xl};
`;

export const Rodape = () => {
  return (
    <FooterEstilizado>
      Alo
    </FooterEstilizado>
  );
};
