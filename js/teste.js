var TesteEinstein = function(){
}

TesteEinstein.prototype._respostaCertas = function(){
	return casas = {
				1: {
					cor: 'amarela',
					pessoa: 'grifinoria',
					bebida: 'agua',
					doce: 'feijoes',
					animal: 'amasso' 
				},

				2: {
					cor: 'azul',
					pessoa: 'corvinal',
					bebida: 'hidromel',
					doce: 'sapos',
					animal: 'corujas' 
				},

				3: {
					cor: 'vermelha',
					pessoa: 'trouxa',
					bebida: 'cafe',
					doce: 'sorvete',
					animal: 'peixes' 
				},

				4: {
					cor: 'verde',
					pessoa: 'lufa-lufa',
					bebida: 'cerveja',
					doce: 'fio',
					animal: 'fenix' 
				},

				5: {
					cor: 'branca',
					pessoa: 'sonserina',
					bebida: 'suco',
					doce: 'varinha',
					animal: 'crupe' 
				}
			}
}

TesteEinstein.prototype.getCasas = function(){
	var casa1 = document.getElementById('casa1'),
		casa2 = document.getElementById('casa2'),
		casa3 = document.getElementById('casa3'),
		casa4 = document.getElementById('casa4'),
		casa5 = document.getElementById('casa5');

	return casas = {
				1: {
					cor: casa1.getElementsByTagName("select")[0].value,
					pessoa: casa1.getElementsByTagName("select")[1].value,
					bebida: casa1.getElementsByTagName("select")[2].value,
					doce: casa1.getElementsByTagName("select")[3].value,
					animal: casa1.getElementsByTagName("select")[4].value 
				},

				2: {
					cor: casa2.getElementsByTagName("select")[0].value,
					pessoa: casa2.getElementsByTagName("select")[1].value,
					bebida: casa2.getElementsByTagName("select")[2].value,
					doce: casa2.getElementsByTagName("select")[3].value,
					animal: casa2.getElementsByTagName("select")[4].value 
				},

				3: {
					cor: casa3.getElementsByTagName("select")[0].value,
					pessoa: casa3.getElementsByTagName("select")[1].value,
					bebida: casa3.getElementsByTagName("select")[2].value,
					doce: casa3.getElementsByTagName("select")[3].value,
					animal: casa3.getElementsByTagName("select")[4].value 
				},

				4: {
					cor: casa4.getElementsByTagName("select")[0].value,
					pessoa: casa4.getElementsByTagName("select")[1].value,
					bebida: casa4.getElementsByTagName("select")[2].value,
					doce: casa4.getElementsByTagName("select")[3].value,
					animal: casa4.getElementsByTagName("select")[4].value 
				},

				5: {
					cor: casa5.getElementsByTagName("select")[0].value,
					pessoa: casa5.getElementsByTagName("select")[1].value,
					bebida: casa5.getElementsByTagName("select")[2].value,
					doce: casa5.getElementsByTagName("select")[3].value,
					animal: casa5.getElementsByTagName("select")[4].value 
				}
			}
}

TesteEinstein.prototype.validarResposta = function(casas,fn){
	var casas = casas || {},
		respostaCertas = {},
		resposta = false;

	respostaCertas = this._respostaCertas();

	(function(){
		for (var i = 1; i <= 5; i++) {
			if (casas[i].cor != respostaCertas[i].cor) return false; 
			if (casas[i].pessoa != respostaCertas[i].pessoa) return false;
			if (casas[i].bebida != respostaCertas[i].bebida) return false;
			if (casas[i].doce != respostaCertas[i].doce) return false;
			if (casas[i].animal != respostaCertas[i].animal) return false;
		}

		resposta = true;
	})();

	fn(resposta);
}