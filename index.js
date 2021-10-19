let nome = prompt("Digite seu nome:") || "";
let sobrenome = prompt("Digite seu sobrenome:") || "";

let nomeCompleto = `Nome Completo:${nome}${sobrenome}`;
let nomeCatalogo = `Nome de Catálogo:${sobrenome.toUpperCase()}, ${nome}`;

alert(nomeCompleto);
alert(nomeCatalogo);

