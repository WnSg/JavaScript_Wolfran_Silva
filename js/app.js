var Calculadora = {

visor: document.getElementById("display"),
valorVisor: "0",
operacion: "",
Valor1: 0,
Valor2: 0,
UltimoValor: 0,
Resultado: 0,
TeclaIgual: false,

init: (function(){
    this.SetFormatoBotones(".tecla")
		this.MetodosTeclasNumericas();
    this.MetodosTeclasOperadores();
}),

// Metodos para personalizar formato y efectos de botones
SetFormatoBotones: function(selector){
		var x = document.querySelectorAll(selector);
		for (var i = 0; i<x.length;i++) {
			x[i].onclick = this.EventoReducirBoton;
			x[i].onmouseleave = this.EventoAumentarBoton;
		};
	},

EventoReducirBoton: function(event){
		Calculadora.ReducirBoton(event.target);
},

EventoAumentarBoton: function(event){
		Calculadora.AumentaBoton(event.target);
},

// formato de teclas
ReducirBoton: function(elemento){
		var x = elemento.id;
		if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto" ) {
			elemento.style.width = "28%";
			elemento.style.height = "62px";
		} else if(x=="mas") {
			elemento.style.width = "88%";
			elemento.style.height = "98%";
		} else {
		elemento.style.width = "21%";
		elemento.style.height = "62px";
		}
},
AumentaBoton: function(elemento){
		var x = elemento.id;
		if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto" ) {
			elemento.style.width = "29%";
			elemento.style.height = "62.91px";
		} else if(x=="mas") {
			elemento.style.width = "90%";
			elemento.style.height = "100%";
		} else {
		elemento.style.width = "22%";
		elemento.style.height = "62.91px";
		}
	},


// Metodos Get Valores de teclas Numericas
MetodosTeclasNumericas: function(){
  document.getElementById('0').addEventListener("click", function(){Calculadora.ClicNumero("0");});
  document.getElementById('1').addEventListener("click", function(){Calculadora.ClicNumero("1");});
  document.getElementById('2').addEventListener("click", function(){Calculadora.ClicNumero("2");});
  document.getElementById('3').addEventListener("click", function(){Calculadora.ClicNumero("3");});
  document.getElementById('4').addEventListener("click", function(){Calculadora.ClicNumero("4");});
  document.getElementById('5').addEventListener("click", function(){Calculadora.ClicNumero("5");});
  document.getElementById('6').addEventListener("click", function(){Calculadora.ClicNumero("6");});
  document.getElementById('7').addEventListener("click", function(){Calculadora.ClicNumero("7");});
  document.getElementById('8').addEventListener("click", function(){Calculadora.ClicNumero("8");});
  document.getElementById('9').addEventListener("click", function(){Calculadora.ClicNumero("9");});
},

ClicNumero: function(valor){
		if (this.valorVisor.length < 8) {

			if (this.valorVisor=="0") {
				this.valorVisor = "";
				this.valorVisor = this.valorVisor + valor;
			} else {
				this.valorVisor = this.valorVisor + valor;
			}
		this.ActualizarVisor();
		}
},

// Metodos Get Teclas operadores
MetodosTeclasOperadores: function(){
  document.getElementById('on').addEventListener("click", function() {Calculadora.LimpiarVisor();});
	document.getElementById('sign').addEventListener("click", function() {Calculadora.CambiarSigno();});
	document.getElementById('punto').addEventListener("click", function() {Calculadora.NumeroDecimal();});
	document.getElementById('igual').addEventListener("click", function() {Calculadora.VerResultado();});
	document.getElementById('raiz').addEventListener("click", function() {Calculadora.ClicOperacion("raiz");});
	document.getElementById('dividido').addEventListener("click", function() {Calculadora.ClicOperacion("/");});
	document.getElementById('por').addEventListener("click", function() {Calculadora.ClicOperacion("*");});
	document.getElementById('menos').addEventListener("click", function() {Calculadora.ClicOperacion("-");});
	document.getElementById('mas').addEventListener("click", function() {Calculadora.ClicOperacion("+");});
},

LimpiarVisor: function() {
    this.valorVisor = "0";
		this.operacion = "";
		this.Valor1 = 0;
		this.Valor2 = 0;
		this.Resultado = 0;
		this.Oper = "";
		this.TeclaIgual = false;
		this.UltimoValor = 0;
		this.ActualizarVisor();
},

CambiarSigno: function(){
		if (this.valorVisor !="0") {
			var aux;
			if (this.valorVisor.charAt(0)=="-") {
				aux = this.valorVisor.slice(1);
			}	else {
				aux = "-" + this.valorVisor;
			}
		this.valorVisor = "";
		this.valorVisor = aux;
		this.ActualizarVisor();
		}
},

NumeroDecimal: function(){
		if (this.valorVisor.indexOf(".")== -1) {
			if (this.valorVisor == ""){
				this.valorVisor = this.valorVisor + "0.";
			} else {
				this.valorVisor = this.valorVisor + ".";
			}
			this.ActualizarVisor();
		}
},

ClicOperacion: function(oper){
		this.Valor1 = parseFloat(this.valorVisor);
		this.valorVisor = "";
		this.operacion = oper;
		this.TeclaIgual = false;
		this.ActualizarVisor();
},

VerResultado: function(){
		if(!this.TeclaIgual){
			this.Valor2 = parseFloat(this.valorVisor);
			this.UltimoValor = this.Valor2;
			this.realizarOperacion(this.Valor1, this.Valor2, this.operacion);

		} else {
			this.realizarOperacion(this.primerValor, this.ultimoValor, this.operacion);
		}

		this.Valor1 = this.Resultado;
		this.valorVisor = "";

		if (this.Resultado.toString().length < 9){
			this.valorVisor = this.Resultado.toString();
		} else {
			this.valorVisor = this.Resultado.toString().slice(0,8) + "...";
		}

		this.TeclaIgual = true;
		this.ActualizarVisor();
},

realizarOperacion: function(Valor1, Valor2, operacion){
		switch(operacion){
			case "+":
				this.Resultado = eval(Valor1 + Valor2);
			break;
			case "-":
				this.Resultado = eval(Valor1 - Valor2);
			break;
			case "*":
				this.Resultado = eval(Valor1 * Valor2);
			break;
			case "/":
				this.Resultado = eval(Valor1 / Valor2);
			break;
			case "raiz":
				this.Resultado = eval(Math.sqrt(Valor1));
		}
	},


ActualizarVisor: function(){
		this.visor.innerHTML = this.valorVisor;
}

};
Calculadora.init();
