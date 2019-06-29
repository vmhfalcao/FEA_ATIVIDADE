 dodrop = (event) => {
    var dt = event.dataTransfer;
    var files = dt.files;
    let count = files.length;
    p = 0
    var progressBar = document.getElementById("bar");

    qtdfiles = `Numero de Arquivos: ${count} \n`;
    document.getElementById("qtdfiles").textContent += qtdfiles;

    if(files.length > 0){
        document.getElementById("box_file").classList.remove("files--hover");
        var ul = document.getElementById("listfiles");
        ul.classList.add("files--background");
        for (var i = 0; i < files.length; i++) {
            var value = `<b> Arquivo ${(i + 1)}: </b> ${files[i].name} Tamanho do Arquivo: <b>${calculo(files[i].size / 1000)}</b>`;
            var list = document.getElementById("listfiles");
            var li = document.createElement("li");
            li.classList.add("files__list__item") 
            li.innerHTML = value ;
            list.appendChild(li);
            progressBar.value += 100 / files.length; 
        }   
    }
}

calculo = (valor) => {
    console.log(valor);

    if (valor <= 0.999)
    return valor = `${valor} Bytes`
    else if (valor >= 1 & valor < 1000)
    return valor = `${valor} KB`
    else if ( valor >=1000 & valor < 1000000)
    return valor = `${valor} MB`
    else (valor >= 1000000)
    return valor = `${valor} GB`;
}


enter =  () => {
    document.getElementById('listfiles').textContent = '';
    document.getElementById('qtdfiles').textContent = '';
    event.stopPropagation();
    event.preventDefault();
};

over = (event) => {
    document.getElementById("box_file").classList.add("files--hover");
    event.stopPropagation();
    event.preventDefault();
}

leaveOver = (event) => {
    document.getElementById("box_file").classList.remove("files--hover");
    event.stopPropagation();
    event.preventDefault();
}

drop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dodrop(event);
}