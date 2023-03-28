(function(){
  "use strict"
  const d = document;
  const datosIngresados = [...d.querySelectorAll(".btn-num")];
  const datosVer = d.querySelector(".datos");

  let num = 0, resultado;


  datosIngresados.forEach(e => {

    e.addEventListener("click", el =>{

      if(e.textContent <=9){
        datosVer.value += e.textContent;
        num += e.textContent;

      }

      if(e.textContent == "+" || e.textContent == "-" || e.textContent == "*" || e.textContent == "/" || e.textContent == "%" || e.textContent == "."){
        datosVer.value += e.textContent;
        num += e.textContent;
      }

      if(e.textContent == "="){
        datosVer.value = "";
        resultado = num.slice(1);
        datosVer.value += eval(resultado);
      }

      if(e.textContent == "CE"){
        datosVer.value = "";
        num = 0;
      }

      // if(e.textContent == "borrar"){
      //   datosVer.value = num.replace(/.$/,"");
      // }

    });

  })


 

})();