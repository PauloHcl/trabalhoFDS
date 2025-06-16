let botao=document.querySelector("#msg"); /*Puxar botão*/
let textoOriginal=botao.innerHTML /*Armazenar informação orginal */

botao.addEventListener("click", e =>{
    botao.innerHTML = "Melhor uma pedra no caminho, do que duas nos rins. Beba Agua!"; /*Alteração da msg*/
    setTimeout(() => {
        botao.innerHTML = textoOriginal; /*Voltar texto original */
    }, 3000);
});