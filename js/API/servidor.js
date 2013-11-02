// Servidor
function enviarDatos(nom, mail, tel){
	$.ajax({
	  type: "POST",
	  url: "http://igitsoft.com/pgtest.php",
	  data: "nom="+nom+"&email="+mail+"&telefono="+tel
	}).done(function( msg ) {
	   if (msg==1){
		   //Respuesta Satisfactoria del servidor
		   navigator.notification.confirm(nom+'\n'+mail+'\n'+tel,
				function (btn){
								switch(btn){
									case 1:
										navigator.notification.beep(2);
										break;
									case 2:
										navigator.notification.vibrate(500);
										break;	
								}},'Datos de Registro','Beep,Vibrar,Cancelar');
	   }else{
	   		navigator.notification.alert("Hubo un error en el registro", null,"Error", "Aceptar" );
	   }
 	 });
}


//data: { nombre: nom, email:mail, telefono:tel}