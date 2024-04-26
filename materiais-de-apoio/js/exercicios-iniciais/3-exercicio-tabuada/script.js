function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value) //converter string para numero
        let c = 1
        tab.innerHTML = '' //limpar campo
        while(c <= 10){
            let item = document.createElement('option') //criando dinamicamente options
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }
}