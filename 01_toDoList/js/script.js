var novoItem = document.getElementById("input")
var ul = document.getElementById("lista");
var item = document.getElementById("li")
var arr = []
arr = JSON.parse(localStorage.getItem("lista-tarefas"))

function salvaItem() {
    //agora minha variavel é  como se fosse um arrey, uso o push para pegar os novos inputs
    arr.push(novoItem.value);
    console.log(arr)
    // novoItem.value = " "
    novoItem.value = "";
    localStorage.setItem("lista-tarefas", JSON.stringify(arr))
    // salvo o arr no local storagem com o item que foi jogado para dentro
    
}

    function mostraLista() {
    
        ul.innerHTML = "";
        for (i in arr) {
            
            //crio a tag list item
            var li = document.createElement("li");
            //crio um variavel que recebe um node com o valor do meu li
            var itemText = document.createTextNode(arr[i])
            //crio um id para o meu li
            li.setAttribute("id", "li-dinamico")
            // pego meu node com o valor e coloco dentro da li
            li.appendChild(itemText);
            //coloco meu li dentro da ul
            ul.appendChild(li);
            ///    -----------------------  ///
            

            //função que marca o item clicado
            function crossOut() {
                this.classList.toggle("done")

            }
            li.addEventListener("click", crossOut)
            //   -----------------------  ///
            
            //crio um botao de delete
            var deletBtn = document.createElement("button");
            //crio o texto que vai dentro do botão
            deletBtn.appendChild(document.createTextNode("X"));
            //seto os atributos do bot]ao
            deletBtn.setAttribute("onclick", `deletaItem(${i})`)
            //coloco o botão dentro do li
            li.appendChild(deletBtn);
        }

    }

            function deletaItem(li) {
                arr.splice(li, 1)
                mostraLista()
            }
            