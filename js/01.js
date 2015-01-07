
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
		url: "eduardo_obieta_b.xml",
		dataType: "xml",
		success: function(xml) {

			// Imprime los datos en la consola
			console.log(xml);

			$(xml).find("hackpact hp").each(function() {
				var numero = $(this).find("number").text();

				// Creamos la etiqueta cont
				var contNode = document.createElement("cont");
				$(contNode).html(numero);

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
