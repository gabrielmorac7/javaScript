// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// un alumno desea saber cual sera su calificacion final en la matria de
// algoritmo. Dicha calificacion se compone de los siguiente porcentaje:
// 55 MOD  del promedio de sus tres calificaciones parciales.
// 30 MOD  de la calificacion del examen final 
// 15 MOD  de la calificacion de un trabajo final.
function ejercicio6() {
	var nota_final;
	var parcial1 = new Number();
	var parcial2 = new Number();
	var parcial3 = new Number();
	var promediop = new Number();
	var notasparcial = new Number();
	var examen_final = new Number();
	var notaexamen = new Number();
	var notatrabajo = new Number();
	var notafinaltrabajo = new Number();
	var notafinal = new Number();
	document.write("digite las 3 notas de los parciales",'<BR/>');
	parcial1 = Number(prompt());
	parcial2 = Number(prompt());
	parcial3 = Number(prompt());
	promediop = (parcial1+parcial2+parcial3)/3;
	notasparcial = promediop*0.55;
	document.write("digite la nota del examen final:",'<BR/>');
	examen_final = Number(prompt());
	notaexamen = examen_final*0.3;
	document.write("digite la nota del trabajo final:",'<BR/>');
	notatrabajo = Number(prompt());
	notafinaltrabajo = notatrabajo*0.15;
	nota_final = notasparcial+notaexamen+notafinaltrabajo;
	document.write("la calificacion final es:",notafinal,'<BR/>');
}

