import styled from '@emotion/styled';

const BotaoPrimarioEstilizado = styled.button`
  align-items: center;
  background-color: ${props => props.theme.cores.primarias.b};
  border: 2px solid transparent;
  border-radius: ${props => props.theme.espacamentos.s};
  color: ${props => props.theme.cores.branco};
  cursor: pointer;
  display: inline-flex;
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  font-weight: 700;
  gap: ${props => props.theme.espacamentos.xs};
  justify-content: center;
  line-height: 20px;
  padding: 10px ${props => props.theme.espacamentos.s};
  text-decoration: none;
  width: ${props => props.perfil ? '100%' : 'auto'};

  &:hover {
    background-color: ${props => props.theme.cores.dark.b};
  }

  &:focus {
    outline-color: ${props => props.theme.cores.focus};
  }
`;

const BotaoSecundarioEstilizado = styled.button`
  align-items: center;
  background-color: transparent;
  border: 2px solid;
  border-color: ${props => props.theme.cores.primarias.b};
  border-radius: ${props => props.theme.espacamentos.s};
  color: ${props => props.theme.cores.primarias.b};
  cursor: pointer;
  display: flex;
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  font-weight: 700;
  gap: ${props => props.theme.espacamentos.xs};
  line-height: 20px;
  margin: ${props => props.concluido ? '0 auto' : '0px'};
  padding: 10px ${props => props.theme.espacamentos.s};
  text-decoration: none;

  &:hover {
    border-color: ${props => props.theme.cores.dark.b};
    color: ${props => props.theme.cores.dark.b};
  }

  &:focus {
    outline-color: ${props => props.theme.cores.focus};
  }
`;

export const Botao = ({ children, variante = 'primaria', concluido = false, perfil = false }) => {
  if (variante === 'primaria') {
    return (
      <BotaoPrimarioEstilizado perfil={perfil}>
        {children}
      </BotaoPrimarioEstilizado>
    );
  }

  return (
    <BotaoSecundarioEstilizado concluido={concluido}>
      {children}
    </BotaoSecundarioEstilizado>
  );
};
