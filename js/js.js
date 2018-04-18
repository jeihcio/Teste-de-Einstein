window.onload = function(){
	(function(){
		var botaoResposta = document.getElementById("vassoura");
		botaoResposta.addEventListener('click', function(){
			var teste = new TesteEinstein(),
				casas = teste.getCasas();

			teste.validarResposta(casas, function(resposta){
				if (resposta) {
					swal("Parabéns", "Você acertou o teste de Einstein!", "success");
				}
				else{
					swal("Errado!", "Você errou o teste de Einstein!", "error");	
				}
			});
		});
	})();
}
