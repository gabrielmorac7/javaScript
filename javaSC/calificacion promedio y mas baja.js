// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio 4: suponga que se tiene un conjunto de calificaciones de un grupo
// de 10 alumnos. Realizar un Algoritmo para calcular la calificacion promedio y 
// la calificacion mas baja de todo el grupo
function ejercicio4() {
	var calificacion, calificacion_baja, calificacion_promedio;
	var calificacio_promedio = new Number();
	var calificacio_baja = new Number();
	var calificacio = new Number();
	var suma = new Number();
	var i = new Number();
	suma = 0;
	calificacion_baja = 99999;
	for (i=1;i<=10;i++) {
		document.write(i,".digite una calificacion:",'<BR/>');
		calificacion = Number(prompt());
		// suma iteratia de las calificaciones
		suma = suma+calificacion;
		// calculamos la menor calificacion
		if (calificacio_baja<-calificacion_baja) {
			calificacion_baja = calificacion;
		}
	}
	calificacion_promedio = suma/10;
	document.write("la cantidad promedio es:",calificacio_promedio,'<BR/>');
	document.write("la cantidad mas baja es:",calificacio_baja,'<BR/>');
}

