var text = prompt("Usuário, insira o texto que quer que seja encriptado. Você não pode deixar o campo vazio ou inserir números");
function cipher(){
  var textToAscii = [];
    for (var i = 0; i < text.length; i++){
      textToAscii.push(text.charCodeAt(i));
    }
  var asciiToFormula = [];
    for (var j = 0; j < textToAscii.length; j++){
      asciiToFormula.push((textToAscii[j] - 97 + 7) %26 + 97);
    }

  var formulaToCode = [];
    for (l = 0; l < asciiToFormula.length; l++){
      formulaToCode.push(String.fromCharCode(asciiToFormula[l]));
    }
  return document.getElementsByTagName("p")[0].innerHTML = formulaToCode.toString().split(",").join("");
}
cipher();
var code = prompt("Usuário, insira o texto que quer que seja desencriptado. Você não pode deixar o campo vazio ou inserir números/nCaso não queira encriptar, aperte cancelar");
function decipher(){
  var textToAsciiTwo = [];
    for (var m = 0; m < code.length; m++){
      textToAsciiTwo.push(code.charCodeAt(m));
    }
  var asciiToFormulaTwo = [];
    for (var n = 0; n < textToAsciiTwo.length; n++){
      asciiToFormulaTwo.push((textToAsciiTwo[n] - 97 - 7) %52 + 97);
    }
  var formulaToText = [];
    for (p = 0; p < asciiToFormulaTwo.length; p++){
      formulaToText.push(String.fromCharCode(asciiToFormulaTwo[p]));
}
  return document.getElementsByTagName("p")[1].innerHTML = formulaToText.toString().split(",").join("");
}
decipher();