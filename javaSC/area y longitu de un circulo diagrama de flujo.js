// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio2: hacer un programa para ingresar el radio de un circulo y se
// reporte su área y la longitud de la circunferencia
// area= pi * radio^2
// longitud = 2 * pi * radio
function ejercicio2() {
	var pi;
	var radio = new Number();
	var area = new Number();
	var long = new Number();
	document.write("digite el valor del radio:",'<BR/>');
	radio = Number(prompt());
	area = Math.PI*Math.pow(radio,2);
	long = 2*Math.PI*radio;
	document.write("el area de la circunferencia de:",area,'<BR/>');
	document.write("la longitud es;",area,'<BR/>');
}

