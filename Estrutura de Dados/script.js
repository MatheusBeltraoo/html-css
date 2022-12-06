const nome = document.querySelector('#nome')
const div_resultado = document.querySelector('#resultado')
let array = []

function teclar(e){
    if (e.keyCode == 13){
        adicionar()
    }
}

function adicionar(){
    if (nome.value.length <= 20 && nome.value !== ''){
        let numeracao = 1
        div_resultado.innerHTML = ''
    
        array.push(nome.value)
        array.forEach((value, index)=>{
            div_resultado.innerHTML += `${numeracao}° - ${value} <br> <br>`
            numeracao += 1
        })
    }
}


function removerPrimeiro(){
    let numeracao = 1
    div_resultado.innerHTML = ''

    array.shift()
    array.forEach((value, index)=>{
        div_resultado.innerHTML += `${numeracao}° - ${value} <br> <br>`
        numeracao += 1
    })
}

function removerUltimo(){
    let numeracao = 1
    div_resultado.innerHTML = ''

    array.pop()
    array.forEach((value, index)=>{
        div_resultado.innerHTML += `${numeracao}° - ${value} <br> <br>`
        numeracao += 1
    })
}

function removerNome(){
    let nome_especifico = document.querySelector('#nome_especifico')
    nome_a_ser_removido = ''
    if (nome_especifico.value !== ''){
        array.forEach((value, index)=>{
            if (value === nome_especifico.value){
                nome_a_ser_removido = nome_especifico.value
            }
        })
        console.log(nome_a_ser_removido)
        if(nome_a_ser_removido != ''){
            let numeracao = 1
            div_resultado.innerHTML = ''
            let nome_a_ser_removido = ''
            array.splice(array.indexOf(nome_a_ser_removido), 1)
        
            array.forEach((value, index)=>{
                div_resultado.innerHTML += `${numeracao}° - ${value} <br> <br>`
                numeracao += 1
            })
        }
    }
}