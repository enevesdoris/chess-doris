const torres = document.querySelectorAll('.torre'); // sao 4 torres (all)
const tabuleiro = document.querySelector('.coner'); // tabuleiro só tem um

Array.from(torres).forEach(torre => {  //usei o forEach como Loop para acessar as torres. 'foreach' = condiçaõ que se repete percorrendo uma Lista até que receba uma informação 'False'. 
  torre.addEventListener('mouseover', mostrarOpcoesDeMovimento); //chama minha função
  torre.addEventListener('mouseleave', esconderOpcoesDeMovimento); //chama minha outra função
});

function mostrarOpcoesDeMovimento(event) { 
  if (event.target.className === 'torre') { //verifica se a movimentação é da torre
    const linha = event.target.parentElement.parentElement; //a 'linha' vai acessar o o avô do target, para chegar no elemento da linha
    Array.from(linha.children).forEach(element => { //nos filhos da linha cria o loop da variavel element
      if (element.children.length > 0) { //condicao de seguranca para que se há alguma obstrução, não marca como uma opção de movimento
        return;
      }
      element.className = 'opcoes-de-movimento'; //classname adicionando a estilização na coluna que pode ser movimentada
    });
    const position = 
    Array.from(linha.children).indexOf(event.target.parentElement); //identificando a coluna exata onde a peça está posicionada para marcar a mesma coluna na vertical

    const linhas = 
    document.querySelectorAll('tr');    //crio uma variável selecionando todas as linhas (tr)
    Array.from(linhas).forEach(linha => { //faz um loop para acessar linha por linha
      const colunas = linha.children; //pego todas as colunas daquela linha
      Array.from(colunas).forEach((coluna, index) => { //pra que eu entre na coluna e saiba qual a posição dela, e comparo com a variǘel de cima para saber se é a mesma ou não
        if (index != position || coluna.className == 'position'){ //se a posição da coulna for diferente da peça ou se já tiver uma peça posicionada, nao estilizo
          return;
        }
        coluna.className = 'opcoes-de-movimento'; //adicionando uma estilização pra coluna
      });
      
    })

   
  }
}

function esconderOpcoesDeMovimento() { //quando tira o mouse ele remove a classe com a estilização
  const opcoesDeMovimento = document.querySelectorAll('.opcoes-de-movimento');
  Array.from(opcoesDeMovimento).forEach(element => {
    element.className = '';
  });
  
}
