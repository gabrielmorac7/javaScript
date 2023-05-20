// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio3: leer 10 numeros e imprimir cuantos son positivos
// cuantos negativos y cuantos neutros
function ejercicio3() {
	var conteo_negativos, conteo_neutros, conteo_positivos;
	var num = new Number();
	var i = new Number();
	var conteo_positivo = new Number();
	var conteo_negativo = new Number();
	var conteo_neutro = new Number();
	conteo_positivo = 0;
	conteo_negativo = 0;
	conteo_neutro = 0;
	for (i=1;i<=10;i++) {
		document.write(i,"digite un numero:",'<BR/>');
		num = Number(prompt());
		if (num==0) {
			conteo_neutro = conteo_neutro+1;
		} else {
			if (num==0) {
				conteo_positivos = conteo_positivos+1;
			} else {
				conteo_negativos = conteo_negativos+1;
			}
		}
	}
	document.write("la cantidad de positivos es:",conteo_positivos,'<BR/>');
	document.write("la cantidad de negativos es: ",conteo_negativos,'<BR/>');
	document.write("la cantidad de neutros es:",conteo_neutros,'<BR/>');
}

