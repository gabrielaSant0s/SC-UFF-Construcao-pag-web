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

// ----------- Questão 4 ----------

function multiplicacao(val1, val2) {
    return parseInt(val1) * parseInt(val2);
}

var add_qtd_maq = 0;
var valor_maquina = 0;
function adicionar_qtd_maq(){
    if (add_qtd_maq < 5) {
        document.getElementById('idQtdMaquina').value = ++add_qtd_maq;
    }
    valor_maquina = document.getElementById('selMaquina').value;
    var multiplicacao_maq = multiplicacao(valor_maquina, add_qtd_maq);
    document.getElementById('idValUnitario').value = multiplicacao_maq;
}

function add_um_qtd_maq(valor){
    add_qtd_maq = valor;
    adicionar_qtd_maq()
    document.getElementById('selCapsula').value = "-----";
}

var add_qtd_cap = 0;
var valor_capsula = 0;
function adicionar_qtd_cap(){
    if (add_qtd_cap < 30) {
        document.getElementById('idQtdCapsula').value = ++add_qtd_cap;
    }
    valor_capsula = document.getElementById('selCapsula').value;
    var multiplicacao_cap = multiplicacao(valor_capsula,add_qtd_cap);
    document.getElementById('idValUnitario').value = multiplicacao_cap;
}

function add_um_qtd_cap(valor){
    add_qtd_cap = valor;
    adicionar_qtd_cap();
    document.getElementById('selMaquina').value = "-----";
}

// ----------- Questão 5 ----------

var add_valor_total = 0;

function adicionar_a_lista_compras_maquinas(){
    var elemento_maquina = document.getElementById('selMaquina');
    var nome_maquina = elemento_maquina.options[elemento_maquina.selectedIndex].text
    var total = document.getElementById('idValUnitario').value;
    
    if (nome_maquina === "-----"){
        alert("Nenhum produto selecionado !")
        document.getElementById('idQtdMaquina').value = "";
        return
    }

    let textarea = document.querySelector(".boxPedidos");
    let texto = `${nome_maquina} (${add_qtd_maq}) R$ ${total},00\n`;
    textarea.value += texto;

    document.getElementById('selMaquina').value = "-----";
    document.getElementById('idQtdMaquina').value = 1;
    document.getElementById('idValUnitario').value = 1;
    add_qtd_maq = 0;

    valor_total(total);
}

function adicionar_a_lista_compras_capsulas(){
    var elemento_capsula = document.getElementById('selCapsula');
    var nome_capsula = elemento_capsula.options[elemento_capsula.selectedIndex].text
    var total = document.getElementById('idValUnitario').value;
    
    if (nome_capsula === "-----"){
        alert("Nenhum produto selecionado !")
        document.getElementById('idQtdCapsula').value = "";
        return
    }
    
    let textarea = document.querySelector(".boxPedidos");
    let texto = `${nome_capsula} (${add_qtd_cap}) R$ ${total},00\n`;
    textarea.value += texto;

    document.getElementById('selCapsula').value = "-----";
    document.getElementById('idQtdCapsula').value = 1;
    document.getElementById('idValUnitario').value = 1;
    add_qtd_cap = 0;

    valor_total(total);
}

function valor_total(valor){
    add_valor_total += parseInt(valor);
    document.getElementById("idValTotal").value = add_valor_total;
}

function limpar_valor_total(){
    add_valor_total = 0;
    document.getElementById('idValUnitario').value = 0;
}