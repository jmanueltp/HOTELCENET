// eventos
$(function (){
	document.addEventListener("deviceready",function(){
		$('#regEnv').click(function(){	
			var nom = $('#regNom').val();
			var mail = $('#regEmail').val();
			var tel = $('#regTel').val();
			
			if(nom != '' && mail !='' && tel != ''){
				navigator.notification.confirm(nom+'\n'+mail+'\n'+tel,
				function (btn){
								switch(btn){
									case 1:
										navigator.notification.beep(2);
										break;
									case 2:
										navigator.notification.vibrate(500);
										break;	
								}
							},'Datos de Registro','Beep,Vibrar,Cancelar');	
			}else{
				navigator.notification.alert('Todos los campos son requeridos',null,'Datos de Registo','Error','Aceptar');
			}
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