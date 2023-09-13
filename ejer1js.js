//Ventana emergente al hacer clic en boton
// Usando JQuery y SweetAlert

$("#btn1").on("click", function(){
    //Ventana emergente OK
    Swal.fire("Presionaste el botón");
});

//Llenar las filas de la tabla desde json
$("#btn2").on("click", function(){
    $.getJSON("personas.json", function(datos){
        $.each(datos.personas, function(i, item){
            //console.log(item);
            var fila = "<tr><td>" + item.nombre + "</td><td>" + item.apellido + "</td><td>" + item.edad + "</td></tr>";
            $("#tabla1 tbody").append(fila);
        });
    });
});

//Sumar las edades de la tabla
$("#btn3").on("click", function(){
    var suma = 0;
    $("#tabla1 tbody tr td:nth-child(3)").each(function(){
        suma += parseInt($(this).text());
    });
    Swal.fire("La suma de las edades es: " + suma);
});
