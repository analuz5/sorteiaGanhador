//array para armazenar os nome
let nomes=[]

function adicionaNome(event){
    event.preventDefault()
    //obtendo os campos da UI
    const nome=document.getElementById('nome')
    const listaNomes=document.getElementById('listaNomes')
    //removendo espaços em branco do campo nome com trim()
    const novoNome=nome.value.trim()
    if(novoNome !==''){//é diferente de vazio o nome?
        nomes.push(novoNome)//adiciona um novo elemento ao array
        console.log(nomes)
        nome.value='' //limpa o campo da UI
        listaNomes.innerHTML+=`<li>${novoNome}</li>`
    }
}



function sorteiaGanhador(event){
    event.preventDefault()
    if (nomes.length>0){//o array tem nomes?
        const randomIndex=Math.floor(Math.random()*nomes.length)
        const ganhador=nomes[randomIndex]
        nomes.splice(randomIndex,1)
        //mostramos o nome do ganhador na UI
        document.getElementById('ganhador').innerText=`Ganhador: ${ganhador}`
        const listaNomes=document.getElementById("listaNomes")
        listaNomes.innerHTML=''//limpa a lista
        for(const nome of nomes){
            listaNomes.innerHTML+=`<li>${nome}</li>`
        }
    }else{
        document.getElementById('ganhador').innerText='Não há nenhum nome para o sorteio'
    }
}