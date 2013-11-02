// eventos
$(function (){
	document.addEventListener("deviceready",function(){
		window.location.href="#registro";
		$('#regEnv').click(function(){	
			var nom = $('#regNom').val();
			var mail = $('#regEmail').val();
			var tel = $('#regTel').val();
			var foto= $('#regFoto').attr('foto');
			if(nom != '' && mail !='' && tel != '' && foto!='' && foto!=undefined){
				enviarDatos(nom, mail, tel, foto);	
			}else{
				navigator.notification.alert('Todos los campos son requeridos',null,'Datos de Registo','Error','Aceptar');
			}
		});
		
		//tOMAR FOTO
		$('#regFoto').click(function (){
			tomarFoto();
		});
	},false);
});



/* function jQuery (selector){
		...
		return obj;
]*/

/*
jQuery (document).ready(function init(){
	var boton = document.getElementById('regEnv');
	boton.addEventListener("click",function(){	
		alert();
	},false);
});
*/

/*$(function (){
	var boton = $('#regEnv');//document.getElementById('regEnv');
	boton.live("click",function(){	
		alert();
	});
});
*/