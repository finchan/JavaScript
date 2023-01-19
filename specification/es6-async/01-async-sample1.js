function getStockSymbol(name) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("$")
        }, 3000)
    })
}

function getStockPrice(symbol) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(symbol === '$') {
                resolve(6.5)
            } else {
                resolve(5)
            }
        }, 6000)
    })
}

async function getStockPriceByName(name) {
    const symbol = await getStockSymbol(name)
    console.log('step 1')
    const stockPrice = await getStockPrice(symbol)
    console.log('step 2')
    return stockPrice
}

getStockPriceByName('USD').then((result)=>{
    console.log(result)
})