(function(){
  "use strict"
  const d = document;
  const numeros = [...d.querySelectorAll(".btn-num")];
  const dato = d.querySelector(".datos");
  
  let suma = 0, mult = 1, div = 0, rest = 0;
  let num=0, resultado;


  numeros.forEach(e => {

    e.addEventListener("click", el =>{
      if(e.textContent == "CE"){
        dato.value = "";
        num = 0;
      }
      if(e.textContent == "borrar"){
      }

      if(e.textContent >= 0 && e.textContent <= 9){
        dato.value += e.textContent;
        num += e.textContent;

      }
      
      if(e.textContent == "+"){
        dato.value += e.textContent;
        suma += Number(num);
        resultado = suma;
      }
      

      if(e.textContent == "="){
        dato.value = "";
        dato.value = resultado;
      }
      console.log(num);
      console.log(resultado);
    });

  })

})();