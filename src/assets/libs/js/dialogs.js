$("button").click(function() {
  swal.fire("Success Message Title", "Well done, you pressed a button", "success")
});


function dialogo() {
    swal.fire("Proximamente", "Proximamente", "success")
}

function infoPerfil(){
	 swal.fire("Trabajemos juntos!", 
	 			"<h4>Te invito a dar un paseo por mi perfil.</h4><p>Si eres un desarrollador y te gustaria colaborar te dejo mi correo y mi cuenta de git para que me contactes.</p>",
	 			"success")
}

function pedido(){
	Swal.mixin({
  input: 'text',
  confirmButtonText: 'Next &rarr;',
  showCancelButton: true,
  progressSteps: ['1', '2', '3']
}).queue([
  {
    title: 'Ingrese su correo',
    text: 'Nos comunicaremos al correo que introduzca.'
  },
  {
    title: 'Ingrese su nombre',
    text: 'Queremos conocer a nuestro cliente!'
  },
  {
    title: 'Especifique su proyecto',
    text: 'Le ofreceremos la solución adecuada a su necesidad'
  }
]).then((result) => {
  if (result.value) {
    Swal.fire({
      title: 'Perfecto!',
      html:
        '<h4>Nos comunicaremos con usted lo mas inmediato con una cotización, gracias por confiar en nostros!</h4>Sus datos: <pre><code>' +
          JSON.stringify(result.value) +
        '</code></pre>',
      confirmButtonText: 'Enviar!'
    })
  }
})
}