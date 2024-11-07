let objetos='';
fetch("./exer1.json")
.then(response=>response.json())
.then(dados=>{
    for(const dado in dados)
    {
        objetos+= " "+dados[dado];
    }
    document.querySelector('h1').innerHTML = objetos;
}
);

