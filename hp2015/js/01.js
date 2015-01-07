
/**************
 *    MAIN    *
 **************/

// Funcion que se ejecuta cuando se ha cargado todo el HTML
$(document).ready(function() {

	// Se pone la fecha en el lugar 
	var fecha = getFecha();
	$("#fecha").html(fecha);

	// Hacemos una peticion via ajax
	$.ajax({
		type: "GET",
		url: "eduardo_obieta.xml",
		dataType: "xml",
		success: function(xml) {

			// Imprime los datos en la consola
			console.log(xml);

			$(xml).find("hackpact hp").each(function() {

				// Creamos la etiqueta cont
				var contNode = document.createElement("cont");
				
				// otras variables
				var numero = $(this).find("number").text();
				var codigo = $(this).find("code").text();
				var liga = $(this).find("link").text();
				var invitado = $(this).find("invite").text();

				// Creamos y configuramos el div
				var divHp = document.createElement("div");
				$(divHp).attr("id", "hp" + numero);

				// Creamos y configuramos la tabla
				var tableHp = document.createElement("table");
				$(tableHp).attr("width", "800");
				$(tableHp).attr("border", "0");

				// Primer renglon
				var firstTr = document.createElement("tr");
				$(firstTr).html("<td>&nbsp;</td><td align='left'><h2>Día " + numero + "</h2><p>Invitado " + invitado + "</p></td>");

				// Agregamos el primer renglon a la tabla
				$(tableHp).append(firstTr);

				// Segundo renglon
				var secTr = document.createElement("tr");
				var tdAudio = document.createElement("td");
				$(tdAudio).attr("width", "150");
				$(tdAudio).attr("valign", "top");
				$(tdAudio).html("<p><audio controls><source src='" + liga + "' type=audio/mpeg>Your browser does not support the audio element.</audio>");
				$(secTr).append(tdAudio);

				var tdCode = document.createElement("td");
				$(tdCode).attr("width", "600");
				$(tdCode).html("<p>" + stylizeCode(codigo) + "</p><p>" + liga + "</p>");
				$(secTr).append(tdCode);

				// Agregamos el segundo renglon a la tabla
				$(tableHp).append(secTr);

				// Agregamos la tabla al div
				$(divHp).append(tableHp)

				// Agregamos el div al cont
				$(contNode).append(divHp);
				
				// Agregamos contNode a contenido
				$(".contenido").append(contNode);
				
			});
		},
		error: function() {
			$('.contenido').text('Failed to get data')
		}
	});

});

function getFecha () {
	var d = new Date();
	var dia = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	return dia[d.getDay()] + ' ' + d.getDate() + ' de ' + mes[d.getMonth()] + ' de ' + d.getFullYear();
}

function stylizeCode (codeStr) {

	// Hacemos una copia del string
	var stylizedCode = codeStr;

	// Convertimos todos los saltos de linea en br
	while(stylizedCode.lastIndexOf("\n") != -1) {
		stylizedCode = stylizedCode.replace("\n", "<br>");
	}

	return stylizedCode;
}
