function frasePalindromo() {
  let frasePalabra = document.getElementById("palabra").value;

  if (!frasePalabra.length) {
    swal({
      text: "Ingresa una palabra o frase",
      title: "Ups!",
      icon: "error",
    });
  } else if (frasePalabra.length < 3) {
    swal({
      text: "Ingresa una palabra o frase de 3 o mas caracteres",
      title: "Ups!",
      icon: "error",
    });
  } else {
    fraseSinAcentos = getCadenaSinAcentos(
      frasePalabra.toLowerCase().replace(/\s/g, "")
    );
    fraseReverzada = fraseSinAcentos.split("").reverse().toString();

    for (let i = 0; i < fraseReverzada.length - 1; i++) {
      fraseReverzada = fraseReverzada.replace(",", "");
    }

    if (fraseSinAcentos === fraseReverzada) {
      swal({
        text: `${frasePalabra}`,
        title: "Es palindromo",
        icon: "success",
        button: "ok",
      });
    } else {
      swal({
        text: "Intentalo nuevamente",
        title: "No es palindromo",
        icon: "error",
        button: "ok",
      });
    }
  }
}

function getCadenaSinAcentos(cadena) {
  // Quitamos acentos.
  cadena = cadena.replace(/á/gi, "a");
  cadena = cadena.replace(/é/gi, "e");
  cadena = cadena.replace(/í/gi, "i");
  cadena = cadena.replace(/ó/gi, "o");
  cadena = cadena.replace(/ú/gi, "u");
  return cadena;
}

//frasePalindromo("oso");
