//Tachar li's para marcar tarea relizada.
$("ul").on("click","li",function(){
    $(this).toggleClass("completado")
})

//Borrar elementos de la lista.
$("ul").on("click","span",function(event) {
    $(this).parent().fadeOut(500, function(){
    $(this).remove();
    });
    event.stopPropagation();
  });

// Agregar el contenido del input a la lista
$("input[type='text']").keypress(function(event){
//filtrar para que sólo se active cuando aprietan Enter
    if(event.key == "Enter") {
      $("ul").append("<li><span><i class='fas fa-trash-alt' aria-hidden='true'></i></span> "+ $(this).val() + "</li>");
// se borra el contenido del input
      $(this).val("");
      event.stopPropagation();
    }
  });


$(".fa-arrows-alt-v*").click(function(){
    $("ul").slideToggle()
   })