function obtenerAleatorio(){
    let numero;
    numero = Math.floor(Math.random() * 100) + 1;
    return numero;
}

function generarAleatorios(){
    let aleatorios = [];
    let cantidad;
    let numero;

    cantidad = recuperarInt("txtCantidad");

    if(isNaN(cantidad) || cantidad < 5 || cantidad > 20){
        mostrarTexto("divError", "Ingrese un numero entre 5 y 20");
        mostrarTexto("divTabla", "");
        return;
    }
    mostrarTexto("divError", "");

    for(let i = 0; i < cantidad; i++){
        console.log(i);
        numero = obtenerAleatorio();
        aleatorios.push(numero);
    }

    mostrarResultados(aleatorios);
}

function mostrarResultados(arregloNumeros){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table>";
    contenidoTabla += "<tr><th>POSICION</th><th>NUMERO</th></tr>";

    for(let i = 0; i < arregloNumeros.length; i++){
        contenidoTabla += "<tr><td>" + i + "</td><td>" + arregloNumeros[i] + "</td></tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}