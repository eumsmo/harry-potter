const CLASSE_INFORMACOES = "ativo";
let iconesEl = document.querySelectorAll(".icone");

function mostrar_inf(evt){
	for(let iconeEl of iconesEl){
		let feiticoEl = iconeEl.parentElement;
		feiticoEl.classList.remove(CLASSE_INFORMACOES);
	}
	
	let feiticoEl = evt.currentTarget.parentElement;
	feiticoEl.classList.add(CLASSE_INFORMACOES);
}
for(let iconeEl of iconesEl)
	iconeEl.addEventListener("click",mostrar_inf);


function fechar_inf(evt) {
	/* Se o click aconteceu em uma posição superior da página,
	 * logo foi no botão de fechar
	 */
	 if(evt.pageY < 50){
	 	let informacaoEl = evt.currentTarget,
	 		feiticoEl = informacaoEl.parentElement;

	 	feiticoEl.classList.remove(CLASSE_INFORMACOES);
	 }
}

let informacoesEl = document.querySelectorAll(".informacao");
informacoesEl.forEach(inforcaoEl=>
	inforcaoEl.addEventListener('click',fechar_inf)
);

const TAM_MAX_RESPONSIVO = 700;
let seletores =  document.querySelectorAll('.menu-icone'),
	setaEsquerda = document.querySelector("#seta-esquerda"),
	setaDireita = document.querySelector("#seta-direita"),
	posicaoAtual = 0,
	posicaoMax = seletores.length-1;

// [0, 1, 2, 3, 4, 5, 6]

function definir_pos() {
	console.log(posicaoAtual);
	if(posicaoAtual<0) posicaoAtual=posicaoMax;
	else if(posicaoAtual>posicaoMax) posicaoAtual=0;

	setaEsquerda.href = '#id'+((posicaoAtual-1<0)? posicaoMax : posicaoAtual-1);
	setaDireita.href = '#id'+((posicaoAtual+1>posicaoMax)? 0 : posicaoAtual+1);
}

function mover_inf(arg){
	definir_pos();
	posicaoAtual+=arg;
}	
	
definir_pos();
setaEsquerda.addEventListener("click",e=>mover_inf(-1));
setaDireita.addEventListener("click",e=>mover_inf(1));

