
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
				
				$(contNode).html('<div id=hp'+numero+'><table width="800" border="0"><tr><td>&nbsp;</td><td align="left"><h2>Día '+numero+'</h2><p>invitado '+invitado+'</p></td></tr><tr><td width="150" valign="top"><p><audio controls><source src="'+liga+'" type=audio/mpeg>Your browser does not support the audio element.</audio></td><td width="600"><p>'+codigo+'</p><p>'+liga+'</p></td></tr></table></div></br>');
				
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
