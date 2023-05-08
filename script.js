const menuList = document.getElementById("menu-list")
menuList.style.maxHeight = "0px"

function ShowMenu(){
    if(menuList.style.maxHeight =="0px"){
    menuList.style.maxHeight = "120px"
}  else{
    menuList.style.maxHeight = "0px"
}}

let imagens = ["./assets/CG Titan-Cinza.png", "./assets/CG Titan-Prata.png", "./assets/CG Titan-Vermelha.png"];
let indexAtual = 0;

function trocarImagem() {
    indexAtual++;
    if (indexAtual >= imagens.length) {
        indexAtual = 0;
    }
    document.getElementById("imagem").src = imagens[indexAtual];
}