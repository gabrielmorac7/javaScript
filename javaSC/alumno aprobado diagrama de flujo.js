// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio 2: determine si un alumno aprueba o reprueba un curso, sabiendo que
// aprobara si si promedio de tres calificaciones es mayor o igual a 70
// reprueba caso contrario.(Ddiagrama de flujo)
function sin_titulo() {
	var nota1 = new Number();
	var nota2 = new Number();
	var nota3 = new Number();
	var promedio = new Number();
	document.write("digite las 3 calificaciones",'<BR/>');
	nota1 = Number(prompt());
	nota2 = Number(prompt());
	nota3 = Number(prompt());
	promedio = (nota1+nota2+nota3)/3;
	if (promedio>=70) {
		document.write("el alumno esta aprobado con:",promedio,'<BR/>');
	} else {
		document.write("el alumno esta desaprobado con:",promedio,'<BR/>');
	}
}

