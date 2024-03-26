import styled from "@emotion/styled";
import { Tipografia } from "../../../componentes/Tipografia/Tipografia";
import Chip from "../../../componentes/Chip/Chip";

const habilidades = [
  'Design',
  'Branding',
  'lustração',
  'Marketing',
  'Identidade Visual',
  'SEO',
  'Redação',
  'Transcricão',
  'Revisão',
  'Tradução',
  'E-Books',
  'ABNT',
  'Programação',
  'API',
  'Desenvolvimento de Aplicativo',
  'Desenvolvimento de Websites',
];

const DivEstilizada = styled.div`
margin-bottom: ${props => props.theme.espacamentos.xl};
  text-align: center;
`;

const Habilidades = () => {
  return (
    <DivEstilizada>
      <Tipografia variante='h2' componente='h2'>
        Quais habilidades você encontra por aqui?
      </Tipografia>

      {habilidades.map(habilidade =>
        <Chip key={habilidade}>
          {habilidade}
        </Chip>
      )}
    </DivEstilizada>
  );
};

export default Habilidades;
