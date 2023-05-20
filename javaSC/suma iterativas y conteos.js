// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function ejercicio7() {
	var i = new Number();
	var npares = new Number();
	var nimpares = new Number();
	var ncantidad = new Number();
	var n = new Number();
	var contenedor_pares = new Number();
	var contenedor_impares = new Number();
	var contador_par = new Number();
	var contador_impar = new Number();
	document.write("Digite la cantidad que quiere ingresar",'<BR/>');
	ncantidad = Number(prompt());
	contador_impar = 0;
	contador_par = 0;
	contenedor_impares = 0;
	contenedor_pares = 0;
	i = 1;
	while (i<=ncantidad) {
		document.write(i,". Digite un numero",'<BR/>');
		n = Number(prompt());
		i = i+1;
		if (n%2==0) {
			contador_par = contador_par+1;
			contenedor_pares = contenedor_pares+n;
		} else {
			contenedor_impares = contenedor_impares+n;
			contador_impar = contador_impar+1;
		}
	}
	document.write("La suma de los numeros pares es:",contenedor_pares,'<BR/>');
	document.write("La cantidad de numeros pares son:",contador_par,'<BR/>');
	document.write("El promedio de numeros impares es:",(contenedor_impares/contador_impar),'<BR/>');
}

