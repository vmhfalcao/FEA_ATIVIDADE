function dodrop(event) {
    var dt = event.dataTransfer;
    var files = dt.files;
    var count = files.length;
    p = 0
    var progressBar = document.getElementById("bar");

    qtdfiles = "Numero de Arquivos: " + count + "\n";
    document.getElementById("qtdfiles").textContent += qtdfiles;


    for (var i = 0; i < files.length; i++) {
        listfiles = " File " + i + ": " + files[i].name + " - Tamanho do Arquivo: " + files[i].size + "\n";
        document.getElementById("listfiles").textContent += listfiles;
        progressBar.value = i; 

    }


}


function enter() {
    document.getElementById('listfiles').textContent = '';
    document.getElementById('qtdfiles').textContent = '';
    event.stopPropagation();
    event.preventDefault();
}

function over(event) {
    event.stopPropagation();
    event.preventDefault();
}

function drop(event) {
    event.stopPropagation();
    event.preventDefault();
    dodrop(event);
}