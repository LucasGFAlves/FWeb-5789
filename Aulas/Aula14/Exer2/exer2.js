/*função que le o arquivo json*/
fetch("./exer2.json")
.then(response=>response.json())
.then(pessoas=>{
    /*loop que busca todos os dados do arquivo*/
    for(const pessoa in pessoas)
    {
        /*variável que recebe um elemento parágrafo <p>*/
        let newName = document.createElement("p");
        /*salva o nome da pessoa na variável*/
        newName.innerHTML = pessoas[pessoa].nome;
        /*coloca o parágrafo <p> como filho de h1*/
        document.querySelector('h1').appendChild(newName);

        let newIdade = document.createElement("p");
        newIdade.innerHTML = pessoas[pessoa].idade;
        document.querySelector('h1').appendChild(newIdade);

        
    }
    
}
);
