function validaBusca(){
    if(document.querySelector('#inputlupa').value==''){
        alert("Não pode deixar o elemento vazio");
        return false;
    }
}

document.querySelector('#form-busca').onsubmit = validaBusca;