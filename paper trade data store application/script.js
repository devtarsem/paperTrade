const inputs = document.querySelectorAll('.input')

const submit = document.querySelector('.submit')
const AdjElement = document.querySelector('.trades')
const printBtn = document.querySelector('.print')
const trade_table = document.querySelector('.trade-table')
const parent = document.querySelector('.trade-cover')
const body = document.querySelector('body')
let alltrades = []

submit.addEventListener('click', (el)=>{
    el.preventDefault()
    const tradeValue = []
    inputs.forEach(e=>{
        console.log(e.value)
        tradeValue.push(e.value)
    })
    alltrades.push([tradeValue])
    alltrades.forEach(val=>{
        console.log(val[0])
        if(val[0][3].toLowerCase()=='buy'){
            if(Number(val[0][4])<Number(val[0][5])){
                val[0][12] = '+' + (Number(val[0][5]) - Number(val[0][4]))*(Number(val[0][9].split('-')[0].split(' ')[0])* parseInt(Number(val[0][9].split('-')[1])))
            }else if(Number(val[0][4])>Number(val[0][5])){
                val[0][12] = '-'+(Number(val[0][4]) - Number(val[0][5]))*(Number(val[0][9].split('-')[0].split(' ')[0])* parseInt(Number(val[0][9].split('-')[1])))
            }
        }else if(val[0][3].toLowerCase()=='sell'){
            if(Number(val[0][4])<Number(val[0][5])){
                val[0][12] = '-' + (Number(val[0][5]) - Number(val[0][4]))*(Number(val[0][9].split('-')[0].split(' ')[0])* parseInt(Number(val[0][9].split('-')[1])))
            }else if(Number(val[0][4])>Number(val[0][5])){
                val[0][12] = '+'+(Number(val[0][4]) - Number(val[0][5]))*(Number(val[0][9].split('-')[0].split(' ')[0])* parseInt(Number(val[0][9].split('-')[1])))
            }
        }
        
        const html = `
            <div class="trades pad16 grid grid-2-col gap08">
                <p class="add">Derivative : <span>${val[0][1]}</span></p>
                <p class="add">Stock name : <span>${val[0][1]}</span></p>
                <p class="add">Direction of val : <span>${val[0][2]}</span></p>
                <p class="add">Buy/Sell : <span>${val[0][3]}</span></p>
                <p class="add">Entry : <span>${val[0][4]}</span></p>
                <p class="add">Exit : <span>${val[0][5]}</span></p>
                <p class="add">Stoploss : <span>${val[0][6]}</span></p>
                <p class="add">Target : <span>${val[0][7]}</span></p>
                <p class="add">Risk/Reward : <span>${val[0][8]}</span></p>
                <p class="add">Position size : <span>${val[0][9]}</span></p>
                <p class="add">Time of entry : <span>${val[0][10]}</span></p>
                <p class="add">Time of exit : <span>${val[0][11]}</span></p>
                <p class="add">P/L : <span>${val[0][12]}</span></p>
            </div>
        
        `
        AdjElement.insertAdjacentHTML('beforebegin', html)
        alltrades = []
    })

})

printBtn.addEventListener('click', el=>{
    el.preventDefault()
    trade_table.style.display = 'none'
    body.style.backgroundColor = '#f7f7f7'
    body.style.backgroundImage = 'none'

    window.print()
    trade_table.style.display = 'grid'
    body.style.backgroundColor = 'none'
    body.style.backgroundImage = 'linear-gradient(to left, #ee0979, #ff6a00)'


})