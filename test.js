const convertCF = () =>{
    var tempC = document.getElementById('inputC').value;
    var sTempC = Number(tempC);
    var resultadoFinal = (sTempC / 5) * 9 + 32;

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
  var resultadofinalF = (sTempF - 32) / 9 * 5 ;


  if(!tempF){
    document.getElementById("resultados").innerHTML = "Por favor insira um valor válido!";
  }else{
    document.getElementById("resultados").innerHTML = "A temperatura em Celsius é de: " + resultadofinalF + "C";
  }
}

const convertFK = () =>{
  var tempF = document.getElementById('inputC').value;
  var sTempF = Number(tempF);
  var resultadofinalFK = (sTempF - 32) / 9 * 5 + 273;
  if(!tempF){
    document.getElementById("resultados").innerHTML = "Por favor insira um valor válido!";
  }else{
    document.getElementById("resultados").innerHTML = "A temperatura em Kelvin é de: " + resultadofinalFK + "K";

  }
}

const convertKC = () =>{
  var tempK = document.getElementById('inputC').value;
  var stempK = Number(tempK);
  var resultadoFinalKC = stempK - 273;
  if(!tempK){
    document.getElementById("resultados").innerHTML = "Por favor insira um valor válido!";
  }else{
    document.getElementById("resultados").innerHTML = "A temperatura em Celsius é de: " + resultadoFinalKC + "C";
  }
}

const convertKF = () =>{
  var tempK = document.getElementById('inputC').value;
  var stempK = Number(tempK);
  var resultado1KF = (stempK - 273) / 5 * 9 + 32;
  if(!tempK){
    document.getElementById("resultados").innerHTML = "Por favor insira um valor válido!";
  }else{
    document.getElementById("resultados").innerHTML = "A temperatura em Celsius é de: " + resultado1KF + "C";
  }
}
const closeTop = () =>{
  var topo = document.getElementById('resultados');
  if(topo.style.display === "none"){
    topo.style.display = "block";
  }else{
    topo.style.display = "none";
  }

}