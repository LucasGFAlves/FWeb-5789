fetch("./exer3.json")
.then(response=>response.json())
.then(cursos=>{
for (const curso in cursos){
    let newcurso= document.createElement("p");
    newcurso.innerHTML = cursos[curso];
    document.querySelector('h1').appendChild(newcurso);
}
}
);