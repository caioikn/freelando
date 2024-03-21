import styled from '@emotion/styled';
import { useState } from 'react';

const LabelEstilizada = styled.label`
  position: absolute;
  width: 148px;
`;

const BotaoEstilizado = styled.button`
  align-items: center;
  background-color: ${props => props.theme.cores.branco};
  border: 1px solid;
  border-color: ${props => props.theme.cores.neutras.a};
  border-radius: 16px;
  border-bottom-left-radius: ${props => props.estaAberta ? '0' : '16px'};
  border-bottom-right-radius: ${props => props.estaAberta ? '0' : '16px'};
  cursor: pointer;
  display: flex;
  font-family: ${props => props.theme.fontFamily};
  font-size: 14px;
  height: 40px;
  justify-content: space-between;
  line-height: 17px;
  margin-top: ${props => props.theme.espacamentos.xs};
  padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
  width: 100%;
`;

const ListaSuspensaEstilizada = styled.ul`
  background-color: ${props => props.theme.cores.branco};
  border: 1px solid;  
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-color: ${props => props.theme.cores.neutras.a};
  border-top: none;
  height: 139px;
  list-style: none;
  margin: 0;
  overflow-y: scroll;
  padding: 0;
  position: relative;
  scrollbar-width: thin;
  text-align: center;
  z-index: 1;
`;

const ListaItemSuspensaEstlizada = styled.li` 
  border-bottom: 1px solid;
  border-color: ${props => props.theme.cores.neutras.b};
  color: ${props => props.focoAtivo ? props.theme.cores.focus : 'inherit'};
  cursor: pointer;
  margin: 0 auto;
  padding: ${props => props.theme.espacamentos.xs} 0;
  width: 80%;

  &:hover {
    color: ${props => props.theme.cores.focus};
  }
`;

export const ListaSuspensa = ({ titulo, opcoes, valor, onChange }) => {
  const [estaAberta, alternarVisibilidade] = useState(false);
  const [opcaoFocada, setOpcaoFocada] = useState(null);

  const manipularTeclaDoTeclado = (evento) => {
    alternarVisibilidade(true);

    switch (evento.key) {
      case 'ArrowDown':
        evento.preventDefault();

        setOpcaoFocada(focoAntigo => {
          if (focoAntigo == null) {
            return 0;
          }

          if (focoAntigo === opcoes.length - 1) {
            return focoAntigo;
          }

          return focoAntigo += 1;
        });
        break;
      case 'ArrowUp':
        evento.preventDefault();

        setOpcaoFocada(focoAntigo => {
          if (!focoAntigo) {
            return 0;
          }

          return focoAntigo -= 1;
        });
        break;
      case 'Enter':
        evento.preventDefault();
        setOpcaoFocada(0);
        alternarVisibilidade(false);
        onChange(opcoes[opcaoFocada]);
        break;
      case 'Tab':
        setOpcaoFocada(null);
        alternarVisibilidade(false);
        break;
      case 'Escape':
        evento.preventDefault();
        setOpcaoFocada(null);
        alternarVisibilidade(false);
        break;
      default:
        break;
    }
  };

  return (
    <LabelEstilizada>
      {titulo}
      <BotaoEstilizado
        estaAberta={estaAberta}
        onClick={() => alternarVisibilidade(!estaAberta)}
        onKeyDown={manipularTeclaDoTeclado}
        type='button'
      >
        <div>
          {valor ? valor.text : 'Selecione'}
        </div>
        <div>
          <span>{estaAberta ? '▲' : '▼'}</span>
        </div>
      </BotaoEstilizado>

      {estaAberta &&
        <ListaSuspensaEstilizada>
          {opcoes.map((opcao, index) => (
            <ListaItemSuspensaEstlizada
              key={opcao.value}
              focoAtivo={index === opcaoFocada}
              onClick={() => onChange(opcao)}
            >
              {opcao.text}
            </ListaItemSuspensaEstlizada>
          ))}
        </ListaSuspensaEstilizada>
      }
    </LabelEstilizada>
  );
};
