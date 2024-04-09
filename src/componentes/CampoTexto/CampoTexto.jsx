import styled from '@emotion/styled';

const LabelEstilizada = styled.label`
  box-sizing: border-box;
  display: block;
  width: 100%;
`;

const InputEstilizado = styled.input`
  background: ${props => props.theme.cores.branco};
  border: 1px solid;
  border-color: ${props => props.theme.cores.neutras.a};
  border-radius: ${props => props.theme.espacamentos.s};
  box-sizing: border-box;
  display: block;  
  font-family: ${props => props.theme.fontFamily};
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  line-height: 17px;
  margin-bottom: ${props => props.theme.espacamentos.s};
  margin-top: ${props => props.theme.espacamentos.xs};
  outline: none;
  padding: 0 ${props => props.theme.espacamentos.s};
  width: 100%;
`;

export const CampoTexto = ({ titulo, valor, onChange, tipo = 'text' }) => {
  return (
    <LabelEstilizada>
      {titulo}
      <InputEstilizado
        value={valor}
        onChange={evento => onChange(evento.target.value)}
        type={tipo}
        required
      />
    </LabelEstilizada>
  );
};
