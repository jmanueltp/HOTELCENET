// Servidor
function enviarDatos(nom, mail, tel, foto){
	$.ajax({
	  type: "POST",
	  url: "http://igitsoft.com/pgtest.php",
	  data: "nom="+nom+"&email="+mail+"&telefono="+tel
	}).done(function( msg ) {
	   if (msg==1){
		   //Respuesta Satisfactoria del servidor
			
			subirFoto(foto);
	   }else{
	   		navigator.notification.alert("Hubo un error en el registro", null,"Error", "Aceptar" );
	   }
 	 });
}


//data: { nombre: nom, email:mail, telefono:tel}