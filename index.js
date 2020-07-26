function frasePalindromo(frasePalabra){
  //con Regex convierto a minusculas y elimino los espacios con Regex
  frasePalabra = frasePalabra.toLowerCase().replace(/\s/g,"");
  fraseReverzada = frasePalabra.split("").reverse().toString();

  for (let i = 0; i < ((fraseReverzada.length) - 1); i++) {
  fraseReverzada = fraseReverzada.replace(",","");
  };

  if (frasePalabra === fraseReverzada) {
    resultado="Es Palindromo";
  } else {
    resultado="No Es Palindromo";
  }
  console.log(resultado);
}

frasePalindromo('osos');