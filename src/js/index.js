const div = document.createElement("div");  // <div></div>

     

function searching(){
    const typeSearching = document.getElementById("type-searching").value;
    alert(typeSearching)
    div.textContent = `Nombre: ${Andesita.name}; Tipo: ${Andesita.type}; Descripcion: ${Andesita.description} `; 
    app.insertAdjacentElement("afterend", div);
}

const Andesita = {
    name: 'Andesita',
    type: 'ignous',
    description: 'Roca volcánica, de grano fino. Se forma en bordes convergentes de placas litosféricas.'
}