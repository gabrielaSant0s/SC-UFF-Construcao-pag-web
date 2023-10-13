// ----------- Questão 1 ----------

function abrir_janela_miniMe(){
    window.open("janela_minime.html","_blank","width=400, height=415");
}

function abrir_janela_genioSPlus(){
    window.open("janela_geniosplus.html","_blank","width=400, height=415");
}

function abrir_janela_inissia(){
    window.open("janela_inissia.html","_blank","width=400, height=415");
}

function abrir_janela_lov(){
    window.open("janela_lov.html","_blank","width=400, height=415");
}

function fechar_janela(){
    window.close();
}

// ----------- Questão 2 ----------

function alterar_tipo_capsulas(tipo_capsula) {
    var array_capsulas;
    switch (tipo_capsula)  {
        case "expresso":
            array_capsulas = ["Expresso", "../Imagens/CapDolceGusto_10_Espresso.jpg", "10", "18,00"];
            break
        case "intenso":
            array_capsulas = ["Intenso", "../Imagens/CapDolceGusto_10_Intenso.jpg", "10", "19,00"];
            break
        case "forza-vibrante":
            array_capsulas = ["Forza/Vibrante", "../Imagens/CapTresCoracoes_30_ForzaVibrante.jpg", "30", "44,00"];
            break
        case "tres-coracoes":
            array_capsulas = ["Três Cor. Intenso", "../Imagens/CapTresCoracoesNespreso_10_Intenso.jpg", "10", "20,00"];
            break
        case "lor-forza":
            array_capsulas = ["Lor Forza", "../Imagens/CapLorNespreso_10_Forza.jpg", "10", "21,00"];
            break
    }
    alterar_descricao_capsulas(array_capsulas)
}

function alterar_descricao_capsulas(array_capsulas){
    var titulo = array_capsulas[0];
    var href_imagem = array_capsulas[1];
    var qtd = array_capsulas[2];
    var preco = array_capsulas[3];

    document.getElementById("tipDes").innerHTML = titulo;
    document.getElementById("imgDes").src = href_imagem;
    document.querySelector(".qtdDes").innerHTML = `QTD: ${qtd}`;
    document.querySelector(".prcDes").innerHTML = `Preço: R$ <a>${preco}</a>`;

    console.log(href_imagem);
}

// ----------- Questão 3 ----------

var add_qtd_maq = 0 
function adicionar_qtd_maq(){
    if (add_qtd_maq < 5) {
        document.getElementById('idQtdMaquina').value = ++add_qtd_maq;
    }
}

var add_qtd_cap = 0 
function adicionar_qtd_cap(){
    if (add_qtd_cap < 30) {
        document.getElementById('idQtdCapsula').value = ++add_qtd_cap;
    }
}