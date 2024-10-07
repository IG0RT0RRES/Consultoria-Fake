function MouseHover(e) {
    e.innerHTML = "CONFIRA AGORA !";
}

function MouseOutHover(e) {
    e.innerHTML = "SAIBA MAIS";
}

id = setInterval(frame, 2000);

function frame() {
    let id = null;
    const element = document.getElementById("img-anim");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            // element.style.top = pos + "px";
            element.style.left = pos + "px";
        }
    }
}

function ReceivedCep(conteudo) {
    let obj = JSON.parse(conteudo);
    let t = obj.logradouro + " n°1240" + "/ Bairro - " + obj.bairro + "/ Cidade - " + obj.localidade + " - " + obj.uf;
    document.getElementById("viewcep").innerHTML = t;
}


let cep = '01310930';
const ajax = new XMLHttpRequest();
ajax.open('get', 'https://viacep.com.br/ws/' + cep + '/json/');
ajax.send();
ajax.onload = () => ReceivedCep(ajax.responseText);