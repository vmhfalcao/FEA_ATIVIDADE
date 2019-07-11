import '../img/favicon.ico'
import '../img/open-file.png'
//import '../css/fileUpload.css'
import '../css/fileUpload.scss'



function dragDrop() {

    var _this = this;
    this.init = () => {
        _this.configEventos();
    }

    this.configEventos = () => {
        let containerFrame = document.getElementById("box_file");
        containerFrame.addEventListener("dragleave", _this.leave, false);
        containerFrame.addEventListener("dragover", _this.over, false);
        containerFrame.addEventListener("drop", _this.dodrop, false);
        containerFrame.addEventListener("dragenter", _this.enter, false);
    }

   this.dodrop =(event)=> {
        if (event != undefined) {
            var dt = event.dataTransfer;
            var files = dt.files;
            let count = files.length;
            var progressBar = document.getElementById("bar");

            let qtdfiles = `Numero de Arquivos: ${count} \n`;
            document.getElementById("qtdfiles").textContent += qtdfiles;

            if (files.length > 0) {
                document.getElementById("box_file").classList.remove("files--hover");
                var ul = document.getElementById("listfiles");
                ul.classList.add("files--background");
                for (var i = 0; i < files.length; i++) {
                    var value = `<b> Arquivo ${(i + 1)}: </b> ${files[i].name} Tamanho do Arquivo: <b>${_this.calculo(files[i].size / 1000)}</b>`;
                    var list = document.getElementById("listfiles");
                    var li = document.createElement("li");
                    li.classList.add("files__list__item")
                    li.innerHTML = value;
                    list.appendChild(li);
                    progressBar.value += 100 / files.length;
                }
            }
        }
    }

    this.calculo = (valor) => {
        console.log(valor);

        if (valor <= 0.999)
            return valor = `${valor} Bytes`
        else if (valor >= 1 & valor < 1000)
            return valor = `${valor} KB`
        else if (valor >= 1000 & valor < 1000000)
            return valor = `${valor} MB`
        else (valor >= 1000000)
        return valor = `${valor} GB`;
    }

    this.enter = (event) => {
        document.getElementById('listfiles').textContent = '';
        document.getElementById('qtdfiles').textContent = '';
        if (event != undefined) {
            event.stopPropagation();
            event.preventDefault();
        }
    };

    this.over = (event) => {
        document.getElementById("box_file").classList.add("files--hover");
        if (event != undefined) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    this.leave = (event) => {
        document.getElementById("box_file").classList.remove("files--hover");
        if (event != undefined) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    this.drop = (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (event != undefined) {
            _this.dodrop(event);
        }
    }

    
}
var drag = new dragDrop();
drag.init();