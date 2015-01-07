$.ajax({
	url: 'eduardo_obieta_b.xml',
	dataType: 'xml',
	//success: parseXml,
	success: function(data){
		console.log(data); //imprime los datos en la consola
		$(data).find('hackpact hp').each(function(){
			var numero = $(this).find('hp number').text();
			$('.contenido cont').append(
				$('<cont />',{
					text: numero
				})
			);
		});
	},
	error: function(){
		$('.contenido').text('Failed to get data')
	}
});