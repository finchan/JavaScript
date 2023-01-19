async function getStockSymbol(name) {
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("$")
        }, 3000)
    })
}

async function getStockPrice(symbol) {
    await new Promise((resolve, reject) =>{
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
    await getStockSymbol(name)
    console.log('step 1')
    await getStockPrice('$')
    console.log('step 2')
    return Promise.resolve("OK")
}

getStockPriceByName('USD').then((result)=>{
    console.log(result)
})