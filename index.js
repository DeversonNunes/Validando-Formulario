const container=document.querySelector('.container')

const classeBotao=document.getElementById('classe-botao')
const campos=document.querySelectorAll('.required')
const spans=document.querySelectorAll('.spans-required')

campos.forEach(input=>{
    input.addEventListener('change',()=>{
        if (input.value !='') {
            input.classList.add('azul')
        }
        else{
            input.classList.remove('azul')
        }
    })
})
container.addEventListener('click', (event)=>{
   
    event.preventDefault();
    nameValidate();
    emailValidate();
    senhaValidate();
    comparePassord();
    celularValidate();
    enviaMensagemValidate()
})

function setError(index) {
  campos[index].style.border = '2px solid green'
  spans[index].style.display = 'block';

}

function removeErro(index) {
    
  campos[index].style.border= ''
  spans[index].style.display= 'none';
}

function nameValidate() {
    if (campos[0].value.length <3) {
        setError(0);
    }
    else{
        removeErro(0);
    }
}

function emailValidate() {
    if (campos[1].value.length <3) {
        setError(1);
    }
    else{
        removeErro(1);
    }
}
    function senhaValidate() {
        if (campos[2].value.length <8) {
            setError(2);
        }
        else{
            removeErro(2);
            comparePassord()
        }
    }
    function comparePassord() {
     if (campos[2].value == campos[3].value && campos[3].value.length >=8) {
        removeErro(3);
     }   
     else{
        setError(3);
     }
    }

    function celularValidate() {
        if (campos[4].value.length <11) {
            setError(4);
        }
        else{
            removeErro(4);
        }
    }
        function enviaMensagemValidate() {
         if (campos[5].value.length <3) {
            setError(5);
         }   
         else   {
            removeErro(5);
         }
        }



