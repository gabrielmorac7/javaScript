// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// proceso 5: una tienda ofrece un descuento del 15% sobre el total de la 
// compra y un cliente desea saber cuanto debera pagar finalmente por su compra:
function ejercicio5() {
	var precio = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("digite el precio a pagar:",'<BR/>');
	precio = Number(prompt());
	descuento = precio*0.15;
	precio_final = precio-descuento;
	document.write("el proceso a pagar es de:",precio_final,'<BR/>');
}

