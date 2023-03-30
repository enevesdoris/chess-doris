const torre = document.querySelector('.torre');
const tabuleiro = document.querySelector('.coner');

tabuleiro.addEventListener('mouseover', mostrarOpcoesDeMovimento);
tabuleiro.addEventListener('mouseleave', esconderOpcoesDeMovimento);

function mostrarOpcoesDeMovimento(event) {
  if (event.target === torre) {
    const opcoesDeMovimento = document.createElement('div');
    opcoesDeMovimento.className = 'opcoes-de-movimento';

    // código para adicionar opções de movimento a opcoesDeMovimento

    document.body.appendChild(opcoesDeMovimento);

    const torreRect = torre.getBoundingClientRect();
    const tabuleiroRect = tabuleiro.getBoundingClientRect();
    const top = torreRect.top - tabuleiroRect.top + tabuleiro.scrollTop;
    const left = torreRect.left - tabuleiroRect.left + tabuleiro.scrollLeft;

    opcoesDeMovimento.style.top = `${top}px`;
    opcoesDeMovimento.style.left = `${left}px`;
  }
}

function esconderOpcoesDeMovimento() {
  const opcoesDeMovimento = document.querySelector('.opcoes-de-movimento');
  if (opcoesDeMovimento) {
    opcoesDeMovimento.remove();
  }
}
