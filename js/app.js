var Calculadora = {

visor: document.getElementById("display"),
valorVisor: "0",

init: (function(){
    this.SetFormatoBotones(".tecla")
		this.MetodosTeclasNumericas();
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
  document.getElementById('0').addEventListener("click", function(){Calculadora.ingresoNumero("0");});
  document.getElementById('1').addEventListener("click", function(){Calculadora.ingresoNumero("1");});
  document.getElementById('2').addEventListener("click", function(){Calculadora.ingresoNumero("2");});
  document.getElementById('3').addEventListener("click", function(){Calculadora.ingresoNumero("3");});
  document.getElementById('4').addEventListener("click", function(){Calculadora.ingresoNumero("4");});
  document.getElementById('5').addEventListener("click", function(){Calculadora.ingresoNumero("5");});
  document.getElementById('6').addEventListener("click", function(){Calculadora.ingresoNumero("6");});
  document.getElementById('7').addEventListener("click", function(){Calculadora.ingresoNumero("7");});
  document.getElementById('8').addEventListener("click", function(){Calculadora.ingresoNumero("8");});
  document.getElementById('9').addEventListener("click", function(){Calculadora.ingresoNumero("9");});
},



ingresoNumero: function(valor){
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

ActualizarVisor: function(){
		this.visor.innerHTML = this.valorVisor;
}

};
Calculadora.init();
