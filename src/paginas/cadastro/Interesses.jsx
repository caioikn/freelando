import GrupoRadio from '../../componentes/Radio/GrupoRadio';
import { Col, Row } from 'react-grid-system';
import { Botao } from '../../componentes/Botao/Botao';
import { Link, useNavigate } from 'react-router-dom';
import CabecalhoCadastro from '../../componentes/CabecalhoCadastro/CabecalhoCadastro';
import { useCadastroUsuarioContext } from '../../contexto/CadastroUsuario';
import { useEffect } from 'react';

const opcoes = [
  {
    valor: 1,
    label: 'TI e Programação',
  },
  {
    valor: 2,
    label: 'Design e Multimídia',
  },
  {
    valor: 3,
    label: 'Revisão',
  },
  {
    valor: 4,
    label: 'Tradução',
  },
  {
    valor: 5,
    label: 'Transcrição',
  },
  {
    valor: 6,
    label: 'Marketing',
  },
];

const Interesses = () => {
  const {
    usuario,
    setInteresse,
    possoSelecionarInteresse
  } = useCadastroUsuarioContext();

  const navegar = useNavigate();

  useEffect(() => {
    if (!possoSelecionarInteresse()) {
      navegar('/cadastro');
    }
  }, [navegar, possoSelecionarInteresse]);

  return (
    <>
      <CabecalhoCadastro
        titulo='Crie seu cadastro'
        subtitulo='Qual a área de interesse?'
      />
      <GrupoRadio
        opcoes={opcoes}
        valor={usuario.interesse}
        onChange={setInteresse}
      />
      <Row>
        <Col lg={6} md={6} sm={6}>
          <Link to='/cadastro' style={{ textDecoration: 'none' }}>
            <Botao variante='secundaria'>
              <img src="../arrow-back.svg" alt="" />
              Anterior
            </Botao>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: 'right' }}>
            <Link to='/cadastro/dados-pessoais'>
              <Botao>
                Próximo
                <img src="../arrow-next.svg" alt="" />
              </Botao>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Interesses;
