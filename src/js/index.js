document.body.onload = addElement;
const Andesita = {
    name: 'Andesita',
    type: 'ignous',
    description: 'Roca volcánica, de grano fino. Se forma en bordes convergentes de placas litosféricas.'
}

const Anortosita = {
    name: 'Anortosita',
    type: 'ignous',
    description: 'Roca plutónica de carácter básico, que está formada casi exclusivamente por plagioclasas y que también se encuentra en la superficie lunar.'
}

const Anfibolita = {
    name: 'Anfibolita',
    type: 'metamorphics',
    description: 'Carbón de color negro y brillante, con un contenido mayor al 95 % de carbono.'
}

const Antracita = {
    name: 'Antracita',
    type: 'sedimentary',
    description: 'Carbón de color negro y brillante, con un contenido mayor al 95 % de carbono.'
}

const ignous = [Andesita, Anortosita];
const metamorphics = [Anfibolita];
const sedimentary = [Antracita];

function addElement(name, type, description) {
  // crea un nuevo div
  // y añade contenido
    if(type !== undefined){
        var newDiv = document.createElement("div");
        newDiv.className = 'rocks';
        //   var newContent = document.createTextNode(`Nombre: ${Andesita.name}; Tipo: ${Andesita.type}; Descripcion: ${Andesita.description} `);
        var newContent = document.createTextNode(`Nombre: ${name}; Tipo: ${type}; Descripcion: ${description} `);  
        newDiv.appendChild(newContent); //añade texto al div creado.

        // añade el elemento creado y su contenido al DOM
        var currentDiv = document.getElementById("rockss");
        document.body.insertBefore(newDiv, currentDiv);
    }

}

function searching(){
    const typeSearching = document.getElementById("type-searching").value;
    alert(typeSearching)
    if(typeSearching==="ignous"){
        for(i=0;i<ignous.length;i++){
            addElement(ignous[i].name, ignous[i].type, ignous[i].description);
        }
    }
    else if(typeSearching==="metamorphic"){
        for(i=0;i<metamorphics.length;i++){
            addElement(metamorphics[i].name, metamorphics[i].type, metamorphics[i].description);
        }
    }
    else if(typeSearching==="sedimentary"){ //sedimentary
        for(i=0;i<sedimentary.length;i++){
            addElement(sedimentary[i].name, sedimentary[i].type,sedimentary[i].description);
        }
    }
}

