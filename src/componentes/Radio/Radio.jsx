import styled from '@emotion/styled';

const InputEstilizado = styled.input`
  appearance: none;
  opacity: 0;
`;

const LabelEstilizada = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  margin-bottom: ${props => props.theme.espacamentos.m};
  margin-left: ${props => props.theme.espacamentos.xs};
  padding: ${props => props.theme.espacamentos.xs};

  &:before {
    align-items: center;
    background-color: ${props => props.checked ? props.theme.cores.primarias.b : props.theme.cores.neutras.c};
    border: 2px solid ${props => props.theme.cores.neutras.a};
    border-color: ${props => props.checked ? props.theme.cores.primarias.b : 'inherit'};
    border-radius: 50%;
    content: '';
    cursor: pointer;
    display: flex;
    height: 20px;
    justify-content: center;
    margin-right: 10px;
    width: 20px;
  }

  &:hover {
    &:before {
      border-color: ${props => props.theme.cores.focus};
    }
  }
`;

const Radio = ({ valor, label, checked, onClick }) => {
  return (
    <>
      <InputEstilizado type="radio" valor={valor} checked={checked} onChange={onClick} id={`radio-customizado-${valor}`} />
      <LabelEstilizada htmlFor={`radio-customizado-${valor}`} checked={checked}>
        {label}
      </LabelEstilizada>
    </>
  );
};

export default Radio;
