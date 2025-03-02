let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    input.value = "";
    atualizarLista();
    limparResultado();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `Amigo secreto: ${amigoSorteado}`;
    resultadoLista.appendChild(li);
    
    amigos = [];
    atualizarLista();
}

function limparResultado() {
    document.getElementById("resultado").innerHTML = "";
}
