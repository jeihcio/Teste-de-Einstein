var botaoResposta = function(teste) {
	var botaoResposta = document.getElementById("vassoura");	

	botaoResposta.addEventListener('click', function(){
		var casas = teste.getCasas();

		teste.validarResposta(casas, function(resposta){
			if (resposta) {
				swal("Parabéns", "Você acertou o teste de Einstein!", "success");
			}
			else{
				swal("Errado!", "Você errou o teste de Einstein!", "error");	
			}
		});
	});
};

window.onload = function(){
	(function(){
		var teste = new TesteEinstein();
		botaoResposta(teste);

		teste.gerarTeste("resposta");
	})();
}
