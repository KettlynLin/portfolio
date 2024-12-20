window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var rownav = document.getElementById("row-responsiva-nav");

function myFunction() {

  if (window.scrollY > 200) {

    header.classList.add("sticky");
    rownav.classList.add("sticky");

  } else {

    header.classList.remove("sticky");
    rownav.classList.remove("sticky");

  }

}

  AOS.init();


var celular = document.querySelector("#fale_comigo_dados_celular");
celular.addEventListener("input",() => {
  var limparValor = celular.value.replace(/\D/g, "").substring(0,11);

  var numeroFormatador = "";

  if(limparValor.length>0){
    numeroFormatador += "(" + limparValor.slice(0, 2) + ") ";
  }

  if (limparValor.length > 6) {
    numeroFormatador += limparValor.slice(2, 7) + "-" + limparValor.slice(7);
  } else if (limparValor.length > 2) {
    numeroFormatador += limparValor.slice(2);
  }

  celular.value = numeroFormatador;
 
});

