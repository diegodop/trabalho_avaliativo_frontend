const segmentos = [
    {
        id: 1,
        nome: "Celulares e Smartphones"
    },
    {
        id: 2,
        nome: "Informática"
    },
    {
        id: 3,
        nome: "Moda Masculina"
    }
]

const produtos = [
    {
        id: 1,
        nome: "iphone 11 apple (64gb) preto 4g câmera 12mp",
        segmento: 1,
        preco: 3037.38,
        estoque: 10
    },
    {
        id: 2,
        nome: "iphone 12 apple (64gb) branco 5g câmera 12mp",
        segmento: 1,
        preco: 4008.60,
        estoque: 9
    },
    {
        id: 3,
        nome: "iphone 14 pro apple (128gb) preto-espacial 5g câmera tripla 48mp",
        segmento: 1,
        preco: 8549.10,
        estoque: 8
    },
    {
        id: 4,
        nome: "iphone 11 apple (64gb) branco 4g câmera 12mp",
        segmento: 1,
        preco: 3068.07,
        estoque: 7
    },
    {
        id: 5,
        nome: "iphone 14 pro apple (256gb) preto-espacial 5g câmera tripla 48mp",
        segmento: 1,
        preco: 9449.10,
        estoque: 6
    },
    {
        id: 6,
        nome: "iphone 14 apple (256gb) estelar 5g câmera dupla 12mp",
        segmento: 1,
        preco: 7739.10,
        estoque: 5
    },
    {
        id: 7,
        nome: "iphone 14 apple (128gb) estelar 5g câmera dupla 12mp",
        segmento: 1,
        preco: 6839.10,
        estoque: 4
    },
    {
        id: 8,
        nome: "iphone 14 plus apple (128gb) meia noite 5g câmera dupla 12mp",
        segmento: 1,
        preco: 7739.10,
        estoque: 3
    },
    {
        id: 9,
        nome: "iphone 14 pro apple (1tb) prateado 5g câmera tripla 48mp",
        segmento: 1,
        preco: 13049.10,
        estoque: 1
    },
    {
        id: 10,
        nome: "iphone 14 pro max apple (128gb) roxo-profundo 5g câmera tripla 48mp",
        segmento: 1,
        preco: 9659.08,
        estoque: 2
    },
    {
        id: 11,
        nome: "notebook samsung intel core i5 8gb 256gb ssd cinza chumbo",
        segmento: 2,
        preco: 3238.00,
        estoque: 10
    },
    {
        id: 12,
        nome: "notebook samsung intel core i3 4gb 256gb ssd cinza chumbo",
        segmento: 2,
        preco: 2419.99,
        estoque: 9
    },
    {
        id: 13,
        nome: "notebook lenovo ideapad 3i intel celeron 4gb 128gb ssd prata",
        segmento: 2,
        preco: 1799.99,
        estoque: 8
    },
    {
        id: 14,
        nome: "notebook lenovo ideapad 3i intel core i3 4gb 256gb ssd prata",
        segmento: 2,
        preco: 2428.00,
        estoque: 7
    },
    {
        id: 15,
        nome: "notebook samsung intel celeron 4gb 256gb ssd cinza chumbo",
        segmento: 2,
        preco: 1979.00,
        estoque: 6
    },
    {
        id: 16,
        nome: "notebook lenovo ideapad 3i intel core i5 8gb 256gb ssd prata",
        segmento: 2,
        preco: 3149.00,
        estoque: 5
    },
    {
        id: 17,
        nome: "notebook lenovo ideapad 3 amd ryzen 5 8gb 256gb ssd prata",
        segmento: 2,
        preco: 3026.90,
        estoque: 4
    },
    {
        id: 18,
        nome: "notebook compaq 420 intel pentium n3700 4gb 120gb ssd cinza",
        segmento: 2,
        preco: 1509.89,
        estoque: 3
    },
    {
        id: 19,
        nome: "notebook asus intel core i5 8gb 256gb ssd linux cinza",
        segmento: 2,
        preco: 2599.00,
        estoque: 1
    },
    {
        id: 20,
        nome: "notebook dell inspiron intel core i5 8gb 256gb ssd preto",
        segmento: 2,
        preco: 7400.00,
        estoque: 2
    },
    {
        id: 21,
        nome: "casaco masculino ribana swag inverno",
        segmento: 3,
        preco: 39.90,
        estoque: 10
    },
    {
        id: 22,
        nome: "conjunto moletom psg abrigo e calça diversas cores",
        segmento: 3,
        preco: 130.15,
        estoque: 9
    },
    {
        id: 23,
        nome: "camisa penalty logomania",
        segmento: 3,
        preco: 41.49,
        estoque: 8
    },
    {
        id: 24,
        nome: "blusa de frio moletom naruto kakashi",
        segmento: 3,
        preco: 71.91,
        estoque: 7
    },
    {
        id: 25,
        nome: "blusa moletom basquete canguru",
        segmento: 3,
        preco: 70.39,
        estoque: 6
    },
    {
        id: 26,
        nome: "camiseta mestre cervejeiro",
        segmento: 3,
        preco: 15.99,
        estoque: 5
    },
    {
        id: 27,
        nome: "jaqueta masculina jeans azul e preta denim",
        segmento: 3,
        preco: 219.00,
        estoque: 4
    },
    {
        id: 28,
        nome: "blusa moletom lollapalooza dj",
        segmento: 3,
        preco: 71.91,
        estoque: 3
    },
    {
        id: 29,
        nome: "camiseta raglan deal with it óculos - meme",
        segmento: 3,
        preco: 36.90,
        estoque: 1
    },
    {
        id: 30,
        nome: "camiseta masculina friends",
        segmento: 3,
        preco: 42.90,
        estoque: 2
    }
]

var carrinho = []
var produtosCarregados = []
var segmentosCarregados = []
var listaDeNumerosAleatorios = []
const qtdItens = 12
var txt = ''

if (localStorage.getItem('segmentos') == null) {
    localStorage.setItem('segmentos', JSON.stringify(segmentos))
}

if (localStorage.getItem('produtos') == null) {
    localStorage.setItem('produtos', JSON.stringify(produtos))
}

if (localStorage.getItem('carrinho') == null) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
}

function getNomeSegmento(id) {
    for (let i = 0; i < segmentosCarregados.length; i++) {
        if (segmentosCarregados[i].id === id) {
            return segmentosCarregados[i].nome
        }
    }
}

function getProduto(id){
    for (let i = 0; i < produtosCarregados.length; i++) {
        if (produtosCarregados[i].id === id) {
            return produtosCarregados[i]
        }
    }
}

function carregarTabela() {

    if (localStorage.getItem('produtos') != null) {
        produtosCarregados = JSON.parse(localStorage.getItem('produtos'))
        segmentosCarregados = JSON.parse(localStorage.getItem('segmentos'))
        gerarNumerosAleatorios(produtosCarregados.length)
        for (let i = 0; i < qtdItens; i++) {
            txt += `<tr>
            <td>${produtosCarregados[listaDeNumerosAleatorios[i]].nome}</td>
            <td>${getNomeSegmento(produtosCarregados[listaDeNumerosAleatorios[i]].segmento)}</td>
            <td>${produtosCarregados[listaDeNumerosAleatorios[i]].preco}</td>
            <td>${produtosCarregados[listaDeNumerosAleatorios[i]].estoque}</td>
            <td><button class="btn btn-warning btn-sm" onclick="removerProdutoDoCarrinhoTabelaInicial('${produtosCarregados[listaDeNumerosAleatorios[i]].id}')"><i class="bi bi-dash-circle-fill"></i></button>
            ${getQtdCarrinho(produtosCarregados[listaDeNumerosAleatorios[i]].id)}
            <button class="btn btn-success btn-sm" onclick="adicionarProdutoAoCarrinhoTabelaInicial(${produtosCarregados[listaDeNumerosAleatorios[i]].id})"><i class="bi bi-plus-circle-fill"></i></i></button></td>
            </tr>`
        }
    } else {
        txt += `<tr>Não há produtos cadastrados</tr>`
    }

    document.getElementsByTagName('tbody')[1].innerHTML = txt

}

function recarregarTabela() {


    var txt = ''
    if (localStorage.getItem('produtos') != null) {
        produtosCarregados = JSON.parse(localStorage.getItem('produtos'))
        segmentosCarregados = JSON.parse(localStorage.getItem('segmentos'))
        for (let i = 0; i < qtdItens; i++) {
            txt += `<tr>
            <td>${produtosCarregados[listaDeNumerosAleatorios[i]].nome}</td>
            <td>${getNomeSegmento(produtosCarregados[listaDeNumerosAleatorios[i]].segmento)}</td>
            <td>${produtosCarregados[listaDeNumerosAleatorios[i]].preco}</td>
            <td>${produtosCarregados[listaDeNumerosAleatorios[i]].estoque}</td>
            <td><button class="btn btn-warning btn-sm" onclick="removerProdutoDoCarrinhoTabelaInicial('${produtosCarregados[listaDeNumerosAleatorios[i]].id}')"><i class="bi bi-dash-circle-fill"></i></button>
            ${getQtdCarrinho(produtosCarregados[listaDeNumerosAleatorios[i]].id)}
            <button class="btn btn-success btn-sm" onclick="adicionarProdutoAoCarrinhoTabelaInicial(${produtosCarregados[listaDeNumerosAleatorios[i]].id})"><i class="bi bi-plus-circle-fill"></i></i></button></td>
            </tr>`
        }
    } else {
        txt += `<tr>Não há produtos cadastrados</tr>`
    }

    document.getElementsByTagName('tbody')[1].innerHTML = txt

}

function adicionarProdutoAoCarrinhoTabelaInicial(idProduto) {

    var encontrado = false
    if (reduzirEstoque(idProduto)) {
        carrinho = JSON.parse(localStorage.getItem('carrinho'))
        for (let i = 0; i < carrinho.length; i++) {
            if (carrinho[i].idProduto == idProduto) {
                carrinho[i].qtd = carrinho[i].qtd + 1
                encontrado = true
            }
        }
        if (!encontrado) {
            var itemCarrinho = {
                idProduto,
                qtd: 1
            }
            carrinho.push(itemCarrinho)
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho))
    } else {
        alert('Produto sem estoque disponível')
    }
    recarregarTabela()
}

function removerProdutoDoCarrinhoTabelaInicial(idProduto) {
    carrinho = JSON.parse(localStorage.getItem('carrinho'))
    console.log(idProduto)
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].idProduto == idProduto) {
            carrinho[i].qtd = carrinho[i].qtd - 1
            aumentarEstoque(idProduto)
            if (carrinho[i].qtd == 0) {
                carrinho.splice(i, 1)
            }
            localStorage.setItem('carrinho', JSON.stringify(carrinho))
            recarregarTabela()
            return
        }
    }

}

function pesquisarNomeProduto(nome) {
    txt = ''

    if (localStorage.getItem('produtos') != null) {
        produtosCarregados = JSON.parse(localStorage.getItem('produtos'))
        segmentosCarregados = JSON.parse(localStorage.getItem('segmentos'))
        for (let i = 0; i < produtosCarregados.length; i++) {
            if (produtosCarregados[i].nome.indexOf(nome) != -1) {
                txt += `<tr>
                <td>${produtosCarregados[i].nome}</td>
                <td>${getNomeSegmento(produtosCarregados[i].segmento)}</td>
                <td>${produtosCarregados[i].preco}</td>
                <td>${produtosCarregados[i].estoque}</td>
                <td><button class="btn btn-warning btn-sm" onclick="removerProdutoAoCarrinhoPesquisa('${produtosCarregados[i].id}','${nome}')"><i class="bi bi-dash-circle-fill"></i></button>
                ${getQtdCarrinho(produtosCarregados[i].id)}
                <button class="btn btn-success btn-sm" onclick="adicionarProdutoAoCarrinhoPesquisa(${produtosCarregados[i].id},'${nome}')"><i class="bi bi-plus-circle-fill"></i></i></button></td>
                </tr>`
            }

        }
    }

    document.getElementsByTagName('tbody')[0].innerHTML = txt

    if (document.getElementById('resultado').style.display == 'none') {
        document.getElementById('resultado').style.display = 'block'
    }
}

function recarregarPesquisaNomeProduto(nome) {
    txt = ''

    if (localStorage.getItem('produtos') != null) {
        produtosCarregados = JSON.parse(localStorage.getItem('produtos'))
        segmentosCarregados = JSON.parse(localStorage.getItem('segmentos'))
        for (let i = 0; i < produtosCarregados.length; i++) {
            if (produtosCarregados[i].nome.indexOf(nome) != -1) {
                txt += `<tr>
                <td>${produtosCarregados[i].nome}</td>
                <td>${getNomeSegmento(produtosCarregados[i].segmento)}</td>
                <td>${produtosCarregados[i].preco}</td>
                <td>${produtosCarregados[i].estoque}</td>
                <td><button class="btn btn-warning btn-sm" onclick="removerProdutoAoCarrinhoPesquisa('${produtosCarregados[i].id}','${nome}')"><i class="bi bi-dash-circle-fill"></i></button>
                ${getQtdCarrinho(produtosCarregados[i].id)}
                <button class="btn btn-success btn-sm" onclick="adicionarProdutoAoCarrinhoPesquisa(${produtosCarregados[i].id},'${nome}')"><i class="bi bi-plus-circle-fill"></i></i></button></td>
                </tr>`
            }

        }
    }

    document.getElementsByTagName('tbody')[0].innerHTML = txt

    if (document.getElementById('resultado').style.display == 'none') {
        document.getElementById('resultado').style.display = 'block'
    }
}

function adicionarProdutoAoCarrinhoPesquisa(idProduto,nome) {

    var encontrado = false
    if (reduzirEstoque(idProduto)) {
        carrinho = JSON.parse(localStorage.getItem('carrinho'))
        for (let i = 0; i < carrinho.length; i++) {
            if (carrinho[i].idProduto == idProduto) {
                carrinho[i].qtd = carrinho[i].qtd + 1
                encontrado = true
            }
        }
        if (!encontrado) {
            var itemCarrinho = {
                idProduto,
                qtd: 1
            }
            carrinho.push(itemCarrinho)
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho))
    } else {
        alert('Produto sem estoque disponível')
    }
    recarregarPesquisaNomeProduto(nome)
}

function removerProdutoAoCarrinhoPesquisa(idProduto,nome) {
    carrinho = JSON.parse(localStorage.getItem('carrinho'))
    console.log(idProduto)
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].idProduto == idProduto) {
            carrinho[i].qtd = carrinho[i].qtd - 1
            aumentarEstoque(idProduto)
            if (carrinho[i].qtd == 0) {
                carrinho.splice(i, 1)
            }
            localStorage.setItem('carrinho', JSON.stringify(carrinho))
            recarregarPesquisaNomeProduto(nome)
            return
        }
    }

}

function gerarNumerosAleatorios(qtdTotal) {
    for (let i = 0; i < qtdTotal; i++) {
        listaDeNumerosAleatorios[i] = i;
    }

    let numeroAleatorio;
    let temp;
    for (let i = listaDeNumerosAleatorios.length; i;) {
        numeroAleatorio = Math.random() * i-- | 0;
        temp = listaDeNumerosAleatorios[numeroAleatorio];
        listaDeNumerosAleatorios[numeroAleatorio] = listaDeNumerosAleatorios[i];
        listaDeNumerosAleatorios[i] = temp;
    }
    console.log(listaDeNumerosAleatorios)

}

function carregarSegmentosSelect() {
    if (localStorage.getItem('segmentos') != null)
        segmentosCarregados = JSON.parse(localStorage.getItem('segmentos'))

    let selSegmento = document.getElementById('segmentos');

    segmentosCarregados.forEach(function (item) {
        selSegmento.innerHTML += "<option value=" + item.id + ">" + item.nome + "</option>"
    });
}

function carregarProdutosSegmento() {

    var segmento = document.getElementById('segmentos').value

    var txt = ''

    if (segmento != "") {
        if (localStorage.getItem('produtos') != null) {
            produtosCarregados = JSON.parse(localStorage.getItem('produtos'))
            segmentosCarregados = JSON.parse(localStorage.getItem('segmentos'))
            for (let i = 0; i < produtosCarregados.length; i++) {
                if (produtosCarregados[i].segmento == segmento) {
                    txt += `<tr>
                    <td>${produtosCarregados[i].nome}</td>
                    <td>${getNomeSegmento(produtosCarregados[i].segmento)}</td>
                    <td>${produtosCarregados[i].preco}</td>
                    <td>${produtosCarregados[i].estoque}</td>
                    <td><button class="btn btn-warning btn-sm" onclick="removerProdutoDoCarrinhoLista('${produtosCarregados[i].id}')"><i class="bi bi-dash-circle-fill"></i></button>
                    ${getQtdCarrinho(produtosCarregados[i].id)}
                    <button class="btn btn-success btn-sm" onclick="adicionarProdutoAoCarrinhoLista(${produtosCarregados[i].id})"><i class="bi bi-plus-circle-fill"></i></i></button></td>
                    </tr>`
                }

            }
        }

        document.getElementsByTagName('tbody')[0].innerHTML = txt
        if (document.getElementById('resultado').style.display == 'none') {
            document.getElementById('resultado').style.display = 'block'
        }

    } else {
        document.getElementById('resultado').style.display = 'none'
    }
}

function recarregarProdutosSegmento() {

    var segmento = document.getElementById('segmentos').value

    var txt = ''

    if (segmento != "") {
        if (localStorage.getItem('produtos') != null) {
            produtosCarregados = JSON.parse(localStorage.getItem('produtos'))
            segmentosCarregados = JSON.parse(localStorage.getItem('segmentos'))
            for (let i = 0; i < produtosCarregados.length; i++) {
                if (produtosCarregados[i].segmento == segmento) {
                    txt += `<tr>
                    <td>${produtosCarregados[i].nome}</td>
                    <td>${getNomeSegmento(produtosCarregados[i].segmento)}</td>
                    <td>${produtosCarregados[i].preco}</td>
                    <td>${produtosCarregados[i].estoque}</td>
                    <td><button class="btn btn-warning btn-sm" onclick="removerProdutoDoCarrinhoLista('${produtosCarregados[i].id}')"><i class="bi bi-dash-circle-fill"></i></button>
                    ${getQtdCarrinho(produtosCarregados[i].id)}
                    <button class="btn btn-success btn-sm" onclick="adicionarProdutoAoCarrinhoLista(${produtosCarregados[i].id})"><i class="bi bi-plus-circle-fill"></i></i></button></td>
                    </tr>`
                }

            }
        }

        document.getElementsByTagName('tbody')[0].innerHTML = txt
        if (document.getElementById('resultado').style.display == 'none') {
            document.getElementById('resultado').style.display = 'block'
        }

    } else {
        document.getElementById('resultado').style.display = 'none'
    }
}

function adicionarProdutoAoCarrinhoLista(idProduto) {

    var encontrado = false
    if (reduzirEstoque(idProduto)) {
        carrinho = JSON.parse(localStorage.getItem('carrinho'))
        for (let i = 0; i < carrinho.length; i++) {
            if (carrinho[i].idProduto == idProduto) {
                carrinho[i].qtd = carrinho[i].qtd + 1
                encontrado = true
            }
        }
        if (!encontrado) {
            var itemCarrinho = {
                idProduto,
                qtd: 1
            }
            carrinho.push(itemCarrinho)
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho))
    } else {
        alert('Produto sem estoque disponível')
    }
    recarregarProdutosSegmento()
}

function removerProdutoDoCarrinhoLista(idProduto) {
    carrinho = JSON.parse(localStorage.getItem('carrinho'))
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].idProduto == idProduto) {
            carrinho[i].qtd = carrinho[i].qtd - 1
            aumentarEstoque(idProduto)
            if (carrinho[i].qtd == 0) {
                carrinho.splice(i, 1)
            }
            localStorage.setItem('carrinho', JSON.stringify(carrinho))
            recarregarProdutosSegmento()
            return
        }
    }
    
}

function adicionarProdutoAoCarrinho(idProduto) {

    var encontrado = false
    if (reduzirEstoque(idProduto)) {
        carrinho = JSON.parse(localStorage.getItem('carrinho'))
        for (let i = 0; i < carrinho.length; i++) {
            if (carrinho[i].idProduto == idProduto) {
                carrinho[i].qtd = carrinho[i].qtd + 1
                encontrado = true
            }
        }
        if (!encontrado) {
            var itemCarrinho = {
                idProduto,
                qtd: 1
            }
            carrinho.push(itemCarrinho)
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho))
        window.location.reload()
    }
}

function removerProdutoDoCarrinho(idProduto) {
    carrinho = JSON.parse(localStorage.getItem('carrinho'))
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].idProduto == idProduto) {
            carrinho[i].qtd = carrinho[i].qtd - 1
            aumentarEstoque(idProduto)
            if (carrinho[i].qtd == 0) {
                carrinho.splice(i, 1)
            }
            localStorage.setItem('carrinho', JSON.stringify(carrinho))
            window.location.reload()
            return
        }
    }
    
}

function getQtdCarrinho(idProduto){
    var qtd = 0
    carrinho = JSON.parse(localStorage.getItem('carrinho'))

    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].idProduto == idProduto) {
            qtd = carrinho[i].qtd
            return qtd
        }
    }

    return qtd

}



function reduzirEstoque(idProduto) {
    produtosCarregados = JSON.parse(localStorage.getItem('produtos'))
    for (let i = 0; i < produtosCarregados.length; i++) {
        if (produtosCarregados[i].id == idProduto) {
            if (produtosCarregados[i].estoque != 0) {
                produtosCarregados[i].estoque = produtosCarregados[i].estoque - 1
                localStorage.setItem('produtos', JSON.stringify(produtosCarregados))
                return true
            } else {
                return false
            }
        }
    }

}

function aumentarEstoque(idProduto) {

    produtosCarregados = JSON.parse(localStorage.getItem('produtos'))
    for (let i = 0; i < produtosCarregados.length; i++) {
        if (produtosCarregados[i].id == idProduto) {
            produtosCarregados[i].estoque = produtosCarregados[i].estoque + 1
            localStorage.setItem('produtos', JSON.stringify(produtosCarregados))
            return
        }
    }

}

function carregarCarrinho() {

    var prod = ''
    var txt = ''
    var total = 0
    if (localStorage.getItem('carrinho') != null) {
        carrinho = JSON.parse(localStorage.getItem('carrinho'))
        produtosCarregados = JSON.parse(localStorage.getItem('produtos'))
        segmentosCarregados = JSON.parse(localStorage.getItem('segmentos'))
        for (let i = 0; i < carrinho.length; i++) {
            prod = getProduto(carrinho[i].idProduto)
            total = total + (prod.preco * carrinho[i].qtd)
            txt += `<tr>
            <td>${prod.nome}</td>
            <td>${getNomeSegmento(prod.segmento)}</td>
            <td>${prod.preco}</td>
            <td>${prod.estoque}</td>
            <td><button class="btn btn-warning btn-sm" onclick="removerProdutoDoCarrinho('${carrinho[i].idProduto}')"><i class="bi bi-dash-circle-fill"></i></button>
            ${carrinho[i].qtd}
            <button class="btn btn-success btn-sm" onclick="adicionarProdutoAoCarrinho(${carrinho[i].idProduto})"><i class="bi bi-plus-circle-fill"></i></i></button></td>
            </tr>`
        }
    } else {
        txt += `<tr>Não há produtos no carrinho</tr>`
    }

    document.getElementsByTagName('tbody')[0].innerHTML = txt
    document.getElementsByTagName('p')[0]. innerHTML = "Valor Total: R$ " + total.toFixed(2)

}

function exibirCarrinho(){

}