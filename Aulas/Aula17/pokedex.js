const imgchooseyou = document.querySelector('#imgpokemon');
const nomepokemon = document.querySelector('#nomePokemon');
const numeropokemon = document.querySelector('#numeroPokemon')
const botao1 = document.querySelector('#btn1');
const botao2 = document.querySelector('#btn2');
const input  = document.querySelector('#inputName');
const form = document.querySelector('.form-busca');
const tipo1 = document.querySelector('#tipo1');
const tipo2 = document.querySelector('#tipo2');
const imgteste = document.querySelector('#teste')

let idPokemon = 1;

const fetchPokemon = async(pokemon) =>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async(pokemon) => {
    const datapokemon = await fetchPokemon(pokemon);
    idPokemon = datapokemon.id;
    imgchooseyou.src = datapokemon.sprites.front_default;
    nomepokemon.innerHTML = datapokemon.name;
    numeropokemon.innerHTML = datapokemon.id;
    tipo1.innerHTML = datapokemon.types[0].type.name;
    imgteste.src = datapokemon.types[0].type.url;
    if(datapokemon.types.length>1){
        tipo2.innerHTML = datapokemon.types[1].type.name;
    }else
    tipo2.innerHTML ='';
}

botao1.addEventListener("click", () => {
    if(idPokemon>1)
    {
        idPokemon-=1;
        showPokemon(idPokemon);
    }
});

botao2.addEventListener("click", () => {
    idPokemon+=1;
    showPokemon(idPokemon);
});

input.addEventListener("input", () =>{
    idPokemon = toString(input.value);
});

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    showPokemon(input.value.toLowerCase());
})

showPokemon(idPokemon);
