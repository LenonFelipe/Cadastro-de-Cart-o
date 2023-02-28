//Função para validar o campo do nome para aparecer o nome no cartão, não fique em branco ou tenha caracteres demais

function nameInCard(){
    let nome = document.getElementById("campo1");
    let nameInCard = document.getElementById("nomeCard");
    let naoPodeBranco = document.getElementById("empty1");
    let regex = /\d/;

    if(nome.value.length == 0 ){
        naoPodeBranco.style.opacity = "100%";
        naoPodeBranco.innerText = "Não pode ficar em branco"
        nome.style.background = "hsla(0, 85%, 49%, 0.303)";
        nameInCard.innerText = "Mary Jane Watson";
    }
    else if(nome.value.length > 30){
        naoPodeBranco.style.opacity = "100%";
        naoPodeBranco.innerText = "Nome muito grande"
        nome.style.background = "hsla(0, 85%, 49%, 0.303)";
        nameInCard.innerText = "Mary Jane Watson";
    }
    else if(nome.value.match(regex)){
        naoPodeBranco.style.opacity = "100%";
        naoPodeBranco.innerText = "Apenas letras"
        nome.style.background = "hsla(0, 85%, 49%, 0.303)";
        nameInCard.innerText = "Mary Jane Watson";
    }else{
        naoPodeBranco.style.opacity = "0%";
        nome.style.background = "rgb(208, 208, 208)";
        nameInCard.innerText = nome.value;
    };
};


//Função para validar o campo do número para não ficar em branco, não haver letras, aparecer no cartão e nem haver caracteres demais


function numbersInCard(){
    let numeros = document.getElementById("campo2");       
    let numInCard = document.getElementById("numCart");
    let apenasNum = document.getElementById("vazio1");
    let invalido = /^\D/;

    if(numeros.value.length == 0){
        apenasNum.style.opacity = "100%";
        numeros.style.background = "hsla(0, 85%, 49%, 0.303)";
        numInCard.innerText = "0000 0000 0000 0000";
        apenasNum.innerText = "Não pode estar em branco";
    }
    else if(numeros.value.length > 19){
        apenasNum.style.opacity = "100%";
        numeros.style.background = "hsla(0, 85%, 49%, 0.303)";
        numInCard.innerText = "0000 0000 0000 0000";
        apenasNum.innerText = "Número muito grande";
    }
    else if(numeros.value.match(invalido)){
        apenasNum.style.opacity = "100%";
        numeros.style.background = "hsla(0, 85%, 49%, 0.303)";
        numInCard.innerText = "0000 0000 0000 0000";
        apenasNum.innerText = "Apenas números";
    }
    else{
        apenasNum.style.opacity = "0%";
        numeros.style.background = "rgb(208, 208, 208)";
        numInCard.innerText = numeros.value;
    };
};

//Função para validar o campo da data para não ficar em branco, não haver letras, aparecer no cartão e nem haver caracteres demais

function validarMes(){
  let data = document.getElementById("dataCart");
  let mes = document.getElementById("mes");
  let invalido = document.getElementById("vazio2");
  let regex = /\D/;


  if(mes.value.length == 0){
    invalido.style.opacity = "100%";
    invalido.innerText = "Não pode estar em branco";
    data.innerText = "00";
    mes.style.background = "hsla(0, 85%, 49%, 0.303)";
  } 
  else if(mes.value.length > 2){
    invalido.style.opacity = "100%";
    invalido.innerText = "Apenas 2 números";
    data.innerText = "00";
    mes.style.background = "hsla(0, 85%, 49%, 0.303)";
  }
  else if(mes.value.length == 1){
    invalido.style.opacity = "100%";
    invalido.innerText = "Apenas 2 números";
    data.innerText = "00";
    mes.style.background = "hsla(0, 85%, 49%, 0.303)";
  }
  else if(mes.value.match(regex)){
    invalido.style.opacity = "100%";
    invalido.innerText = "Apenas números";
    data.innerText = "00";
    mes.style.background = "hsla(0, 85%, 49%, 0.303)";
  }
  else if(mes.value > 12){
    invalido.style.opacity = "100%";
    invalido.innerText = "Apenas meses válidos";
    data.innerText = "00";
    mes.style.background = "hsla(0, 85%, 49%, 0.303)";
  }
  else {
    data.innerText = mes.value;
    invalido.style.opacity = "0%";
    mes.style.background = "rgb(208, 208, 208)";
  } 
};

function validarAno(){
    let data = document.getElementById("dataCart2");
    let ano = document.getElementById("ano");
    let invalido = document.getElementById("vazio2");
    let regex = /\D/;

    if(ano.value.length == 0){
        invalido.style.opacity = "100%";
        invalido.innerText = "Não pode estar em branco";
        data.innerText = "00";
        ano.style.background = "hsla(0, 85%, 49%, 0.303)";
      } 
      else if(ano.value.length > 4){
        invalido.style.opacity = "100%";
        invalido.innerText = "Apenas 4 números";
        data.innerText = "00";
        ano.style.background = "hsla(0, 85%, 49%, 0.303)";
      }
      else if(ano.value.match(regex)){
        invalido.style.opacity = "100%";
        invalido.innerText = "Apenas números";
        data.innerText = "00";
        ano.style.background = "hsla(0, 85%, 49%, 0.303)";
      }  
      else if(ano.value < 2023 || ano.value > 2033){
        invalido.style.opacity = "100%";
        invalido.innerText = "Ponha uma data válida";
        data.innerText = "00";
        ano.style.background = "hsla(0, 85%, 49%, 0.303)";
      }  
      else {
        data.innerText = ano.value;
        invalido.style.opacity = "0%";
        ano.style.background = "rgb(208, 208, 208)";
      }   
};

function validarCVV(){
    let codigo = document.getElementById("cvc1");
    let cvv = document.getElementById("cvc2");
    let invalido = document.getElementById("vazio3");
    let regex = /^\d{3}$/;

    if(cvv.value.length === 0){
        invalido.innerText = "Não pode estar em branco";
        codigo.innerText = "000";
        invalido.style.opacity = "100%";
        cvv.style.background = "hsla(0, 85%, 49%, 0.303)";
      } else if (!regex.test(cvv.value)) {
        invalido.innerText = "Apenas 3 números";
        codigo.innerText = "000";
        invalido.style.opacity = "100%";
        cvv.style.background = "hsla(0, 85%, 49%, 0.303)";
      } else {
        codigo.innerText = cvv.value;
        invalido.style.opacity = "0%";
        cvv.style.background = "rgb(208, 208, 208)";
      }   
};
