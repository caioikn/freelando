import Radio from './Radio';

const GrupoRadio = ({ opcoes, valor, onChange }) => {
  return (
    <div>
      {opcoes.map(opcao => (
        <Radio
          key={opcao.valor}
          valor={opcao.valor}
          label={opcao.label}
          checked={opcao.valor === valor}
          onClick={() => onChange(opcao.valor)}
        />
      ))}
    </div>
  );
};

export default GrupoRadio;
