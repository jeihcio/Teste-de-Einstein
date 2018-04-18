var TesteEinstein = function(){
	this._cores = {
		amarela: {
			valor: "amarela",
			descricao: "Amarela"
		},

		azul: {
			valor: "azul",
			descricao: "Azul"
		},

		vermelha: {
			valor: "vermelha",
			descricao: "Vermelha"
		},

		verde: {
			valor: "verde",
			descricao: "Verde"
		},

		branca: {
			valor: "branca",
			descricao: "Branca"
		},

	},

	this._pessoa = {
		grifinoria: {
			valor: "grifinoria",
			descricao: "Grifinória"
		},

		corvinal: {
			valor: "corvinal",
			descricao: "Corvinal"
		},

		trouxa: {
			valor: "trouxa",
			descricao: "Trouxa"
		},

		lufa: {
			valor: "lufa-lufa",
			descricao: "Lufa-Lufa"
		},

		sonserina: {
			valor: "sonserina",
			descricao: "Sonserina"
		}	
	},

	this._bebida = {
		agua: {
			valor: "agua",
			descricao: "Água de Gilly"
		},

		hidromel: {
			valor: "hidromel",
			descricao: "Hidromel"
		},

		cafe: {
			valor: "cafe",
			descricao: "Café"
		},

		cerveja: {
			valor: "cerveja",
			descricao: "Cerveja Amanteigada"
		},

		suco: {
			valor: "suco",
			descricao: "Suco de Abóbora"
		},

	},

	this._doce = {
		feijoes: {
			valor: "feijoes",
			descricao: "Feijões Mágicos"
		},

		sapos: {
			valor: "sapos",
			descricao: "Sapos de Chocolate"
		},

		sorvete: {
			valor: "sorvete",
			descricao: "Sorvete"
		},

		fio: {
			valor: "fio",
			descricao: "Fio Dental de Menta"
		},

		varinha: {
			valor: "varinha",
			descricao: "Varinha de Alcaçuz"
		},
	
	},

	this._animal = {
		amasso: {
			valor: "amasso",
			descricao: "Amasso"
		},

		corujas: {
			valor: "corujas",
			descricao: "Corujas"
		},

		peixes: {
			valor: "peixes",
			descricao: "Peixes"
		},

		fenix: {
			valor: "fenix",
			descricao: "Fênix"
		},

		crupe: {
			valor: "crupe",
			descricao: "Crupe"
		},
	
	}
}

TesteEinstein.prototype._respostaCertas = function(){
	return casas = {
		1: {
			cor: this._cores.amarela.valor,
			pessoa: this._pessoa.grifinoria.valor,
			bebida: this._bebida.agua.valor,
			doce: this._doce.feijoes.valor,
			animal: this._animal.amasso.valor
		},

		2: {
			cor: this._cores.azul.valor,
			pessoa: this._pessoa.corvinal.valor,
			bebida: this._bebida.hidromel.valor,
			doce: this._doce.sapos.valor,
			animal: this._animal.corujas.valor 
		},

		3: {
			cor: this._cores.vermelha.valor,
			pessoa: this._pessoa.trouxa.valor,
			bebida: this._bebida.cafe.valor,
			doce: this._doce.sorvete.valor,
			animal: this._animal.peixes.valor 
		},

		4: {
			cor: this._cores.verde.valor,
			pessoa: this._pessoa.lufa.valor,
			bebida: this._bebida.cerveja.valor,
			doce: this._doce.fio.valor,
			animal: this._animal.fenix.valor 
		},

		5: {
			cor: this._cores.branca.valor,
			pessoa: this._pessoa.sonserina.valor,
			bebida: this._bebida.suco.valor,
			doce: this._doce.varinha.valor,
			animal: this._animal.crupe.valor
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

TesteEinstein.prototype._gerarCasas = function(){
	var elementoRaiz = document.createElement("div"),
	    legendas = document.createElement("div"),
	    numeroCasas = 5,
	    numeroOpcoes = 5
	    campos = {};

	elementoRaiz.classList.add("casas-container");

	for (var numeroCasa = 1; numeroCasa <= numeroCasas; numeroCasa++) {
		var casa = document.createElement("div"),
		    titulo = document.createElement("h4"),
		    casasContainer = document.createElement("div");

		// casa
		casa.setAttribute("id", "casa"+numeroCasa);

		// h4 com o numero da casa
		titulo.textContent = "casa "+numeroCasa;
		casa.appendChild(titulo);

		// div com as opcoes
		casasContainer.classList.add("casas-container-inner");
		
		// opcoes
		campos = [
			this._cores,
			this._pessoa,
			this._bebida,
			this._doce,
			this._animal
		];

		for (var camposSelecao = 0; camposSelecao < campos.length; camposSelecao++) {
			
			var inputSelecao = document.createElement("select"),
			    inputOpcao = document.createElement("option");

			// opcao em branco
			inputSelecao.appendChild(inputOpcao);

			// opcoes do array de campos
			for (var prop in campos[camposSelecao]) {
				inputOpcao = document.createElement("option");
				inputOpcao.setAttribute("value", campos[camposSelecao][prop].valor);
				inputOpcao.innerHTML = campos[camposSelecao][prop].descricao;
				inputSelecao.appendChild(inputOpcao);
			}

			// adicionar o campo de select na div interna de casa
			casasContainer.appendChild(inputSelecao);
		}

		// adicionar a casa "interna" na div principal
		casa.appendChild(casasContainer);

		// div raiz
		elementoRaiz.appendChild(casa);
	}

	return elementoRaiz;
}

TesteEinstein.prototype._gerarLegenda = function(){
	var elementoRaiz = document.createElement("div"),
		titulo = document.createElement("h4"),
		lista = document.createElement("ul"),		
		itensLista = [];

	itensLista = [
		"Cores das Casas",
		"Pessoas",
		"Bebidas",
		"Doces",
		"Animais de Estimação"
	];

	titulo.textContent = "Legenda";
	for (var itens = 0; itens < itensLista.length; itens++) {
		var itemLi = document.createElement("li");
		itemLi.innerHTML = itensLista[itens];
		lista.appendChild(itemLi);
	}

	elementoRaiz.setAttribute("id","legenda");
	elementoRaiz.appendChild(titulo);
	elementoRaiz.appendChild(lista);
	
	return elementoRaiz;
}

TesteEinstein.prototype.gerarTeste = function(id){		
	var elemento = document.getElementById(id),
	    casas = this._gerarCasas(),
	    legendas = this._gerarLegenda();

	elemento.
		appendChild(casas).
		appendChild(legendas);
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