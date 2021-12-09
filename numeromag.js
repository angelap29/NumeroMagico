var max = 1000;
var min = 1;
var cont = 10;
var numero = Math.random() * (max - min);
numero = parseInt(numero);
var Cronometro;
var Nombre;
const rank = [];
var resultado;
var aciertos;
var tiempo = 0;

swal("Escribe Tu Nombre Porfavor (MAX 10 LETRAS)", {
  content: "input",
}).then((value) => {
  Nombre = value;
  horain = time;
});

function texto(x) {
  dato = document.getElementById("numero").value;
  if (dato == numero) {
    swal({
      title: "FELICIDADES!",
      text: "HAS ACERTADO EL NUMERO",
      icon: "info",
    });
    resultado = "GANASTE";
    almacenar();
  } else if (dato < numero) {
    cont = cont - 1;
    document.getElementById("Texto").innerHTML =
      Nombre + "<br/> EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO";
    
    document.getElementById("intentos").innerHTML = "Intentos " + cont;
  } else if (dato > numero) {
    cont = cont - 1;
    document.getElementById("Texto").innerHTML =
      Nombre + "<br/> EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO";
    document.getElementById("intentos").innerHTML = "Intentos " + cont;
  }
  document.getElementById("numero").value = "";
  if (cont == 0) {
    swal({
      title: "HAS PERDIDO!",
      text: "TE HAS QUEDADO SIN INTENTOS",
      icon: "info",
    });
    document.getElementById("numero").value = "";
    resultado = "PERDISTE";
    almacenar();
  }
}
function Reiniciar(event) {
  max = 1000;
  min = 1;
  cont = 10;
  numero = Math.random() * (max - min);
  numero = parseInt(numero);
  document.getElementById("intentos").innerHTML = "Intentos 10";
  document.getElementById("Texto").innerHTML = "";
  tiempo = 0;
  swal("Escribe Tu Nombre Porfavor (MAX 10 LETRAS)", {
    content: "input",
  }).then((value) => {
    Nombre = value;
  });
}

function Time() {
  let time = new Date();
  document.getElementById("Tiempo").innerHTML =
    time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds();
  tiempo++;
}
setInterval(() => {
  Time();
}, 1000);

function solonumeros(x) {
  key = x.keycode || x.which;
  teclado = String.fromCharCode(key);
  numeros = "0123456789";
  especiales = "8-37-38-46";
  teclado_especial = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      teclado_especial = true;
    }
  }
  if (numeros.indexOf(teclado) == -1 && !teclado_especial) {
    return false;
  }
}
function almacenar() {
  aciertos = 10 - cont;
  var jugador = {
    nombre: Nombre,
    tiempo: tiempo,
    acierto: aciertos,
    estado: resultado,
  };
  rank.push(jugador);
}
function Ranking() {
  var rangos = " NOMBRE /" + " TIEMPO /" + " ACIERTOS /" + " RESULTADOS" + "\n ";
  for (var i of rank) {
    rangos =
      rangos +
      i.nombre +
      " ------- " +
      i.tiempo +
      "S -------- " +
      i.acierto +
      " ---------" +
      i.estado +
      " \n";
  }
  swal({
    title: "RANKING",
    text: rangos,
    icon: "info",
  });
}
