function dodrop(event) {
    var dt = event.dataTransfer;
    var files = dt.files;
    var count = files.length;
    p = 0
    var progressBar = document.getElementById("bar");

    qtdfiles = "Numero de Arquivos: " + count + "\n";
    document.getElementById("qtdfiles").textContent += qtdfiles;

    if(files.length > 0){
        document.getElementById("box_file").classList.remove("files--hover");
        var ul = document.getElementById("listfiles");
        ul.classList.add("files--background");
        for (var i = 0; i < files.length; i++) {
            var value = "<b> Arquivo " + (i + 1)  + ": </b>" + files[i].name + " - Tamanho do Arquivo: " + files[i].size;
            var list = document.getElementById("listfiles");
            var li = document.createElement("li");
            li.classList.add("files__list__item") 
            li.innerHTML = value ;
            list.appendChild(li);
            progressBar.value += 100 / files.length; 
        }   
    }
}


function enter() {
    document.getElementById('listfiles').textContent = '';
    document.getElementById('qtdfiles').textContent = '';
    event.stopPropagation();
    event.preventDefault();
}

function over(event) {
    document.getElementById("box_file").classList.add("files--hover");
    event.stopPropagation();
    event.preventDefault();
}

function leaveOver(event){
    document.getElementById("box_file").classList.remove("files--hover");
    event.stopPropagation();
    event.preventDefault();
}

function drop(event) {
    event.stopPropagation();
    event.preventDefault();
    dodrop(event);
}