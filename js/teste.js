var TesteEinstein = function(){
	this._cores = {
		amarela: {
			valor: "amarela",
			descricao: ""
		},

		azul: {
			valor: "azul",
			descricao: ""
		},

		vermelha: {
			valor: "vermelha",
			descricao: ""
		},

		verde: {
			valor: "verde",
			descricao: ""
		},

		branca: {
			valor: "branca"
			descricao: ""
		},

	},

	this._pessoa = {
		grifinoria: {
			valor: "grifinoria",
			descricao: ""
		},

		corvinal: {
			valor: "corvinal",
			descricao: ""
		},

		trouxa: {
			valor: "trouxa",
			descricao: ""
		},

		lufa: {
			valor: "lufa-lufa",
			descricao: ""
		},

		sonserina: {
			valor: "sonserina",
			descricao: ""
		}	
	},

	this._bebida = {
		agua: {
			valor: "agua",
			descricao: ""
		},

		hidromel: {
			valor: "hidromel",
			descricao: ""
		},

		cafe: {
			valor: "cafe",
			descricao: ""
		},

		cerveja: {
			valor: "cerveja",
			descricao: ""
		},

		suco: {
			valor: "suco"
			descricao: ""
		},

	},

	this._doce = {
		feijoes: {
			valor: "feijoes",
			descricao: ""
		},

		sapos: {
			valor: "sapos",
			descricao: ""
		},

		sorvete: {
			valor: "sorvete",
			descricao: ""
		},

		fio: {
			valor: "fio",
			descricao: ""
		},

		varinha: {
			valor: "varinha"
			descricao: ""
		},
	
	},

	this._animal = {
		amasso: {
			valor: "amasso",
			descricao: ""
		},

		corujas: {
			valor: "corujas",
			descricao: ""
		},

		peixes: {
			valor: "peixes",
			descricao: ""
		},

		fenix: {
			valor: "fenix",
			descricao: ""
		},

		crupe: {
			valor: "crupe"
			descricao: ""
		},
	
	}
}

TesteEinstein.prototype._respostaCertas = function(){
	return casas = {
		1: {
			cor: this._cores.amarela.valor,
			pessoa: this._pessoa.grifinoria,
			bebida: this._bebida.agua,
			doce: this._doce.feijoes,
			animal: this._animal.amasso
		},

		2: {
			cor: this._cores.azul,
			pessoa: this._pessoa.corvinal,
			bebida: this._bebida.hidromel,
			doce: this._doce.sapos,
			animal: this._animal.corujas 
		},

		3: {
			cor: this._cores.vermelha,
			pessoa: this._pessoa.trouxa,
			bebida: this._bebida.cafe,
			doce: this._doce.sorvete,
			animal: this._animal.peixes 
		},

		4: {
			cor: this._cores.verde,
			pessoa: this._pessoa.lufa,
			bebida: this._bebida.cerveja,
			doce: this._doce.fio,
			animal: this._animal.fenix 
		},

		5: {
			cor: this._cores.branca,
			pessoa: this._pessoa.sonserina,
			bebida: this._bebida.suco,
			doce: this._doce.varinha,
			animal: this._animal.crupe
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