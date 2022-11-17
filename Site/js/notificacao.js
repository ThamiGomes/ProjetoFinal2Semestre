var auxCheck = 0;

function checked(){

    var id_check = document.getElementById('checkAlunoAviso');

    id_check.classList.add("AvisoCheckChecked");

    auxCheck += 1;

    
    auxResul = auxCheck/2;
    auxString = '';

    if(auxCheck%2==0){
     auxString = 'par';
    }
    if(auxCheck%2==1){
      auxString = 'impar';
    }

    console.log(auxCheck);
}



function noChecked(){
    if (auxString == 'impar'){

        console.log(auxString);

        var id_check = document.getElementById('checkAlunoAviso');

        id_check.classList.remove("AvisoCheckChecked");

        console.log('Working');
    }
 
}

/*Com parâmetros*/
/*Valor ímpar de variável*/