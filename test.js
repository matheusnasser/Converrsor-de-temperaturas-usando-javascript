const convertCF = () =>{
    var tempC = document.getElementById('inputC').value;
    var sTempC = Number(tempC);
    var resultado1 = (sTempC / 5) * 9;
    var resultadoFinal = resultado1 + 32;

     if(!tempC){
       var resultadoIv = document.getElementById("resultados").innerHTML = "Por favor insira um valor válido!";
  } 
  else{
    var resultados = document.getElementById("resultados").innerHTML = "A temperatura em fahreinheit é de: " + resultadoFinal + "F";
  }
}


const convertCK = () =>{
  var tempC = document.getElementById('inputC').value;
  var sTempc = Number(tempC);
  var resultadoK = sTempc + 273;
  if(!tempC){
    document.getElementById("resultados").innerHTML = "Por favor insira um valor válido!";
  }
  else{
    document.getElementById("resultados").innerHTML = "A temperatura em kelvin é de: " + resultadoK + "K";
  }
  
}

const convertFC = () =>{
  var tempF = document.getElementById('inputC').value;
  var sTempF = Number(tempF);
  var resultado1F = (sTempF - 32) / 9;
  var resultadofinalF = resultado1F * 5;

  if(!tempF){
    document.getElementById("resultados").innerHTML = "Por favor insira um valor válido!";
  }else{
    document.getElementById("resultados").innerHTML = "A temperatura em Celsius é de: " + resultadofinalF + "C";
  }
}

const convertFK = () =>{
  var tempF = document.getElementById('inputC').value;
  var sTempF = Number(tempF);
  var resultado1FK = (sTempF - 32) / 9;
  var resultado2FK = resultado1FK * 5;
  var resultadofinal = resultado2FK + 273;

  if(!tempF){
    document.getElementById("resultados").innerHTML = "Por favor insira um valor válido!";
  }else{
    document.getElementById("resultados").innerHTML = "A temperatura em Kelvin é de: " + resultadofinal + "K";
  }
}