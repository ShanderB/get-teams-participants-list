var html = window.document.getElementsByClassName('item vs-repeat-repeated-element')
var arr = [].slice.call(html);
var listaAlunos = [];
arr.forEach(it => listaAlunos.push(it.getElementsByClassName("ts-user-name")[0].innerText + "\n"))

function download(data, filename, type) {
    var file = new Blob([data], { type: type });
    var a = document.createElement("a")
    url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}

// Function to print
// https://stackoverflow.com/questions/13405129/javascript-create-and-save-file

download(listaAlunos, "listagemAlunos", 'text/plain')