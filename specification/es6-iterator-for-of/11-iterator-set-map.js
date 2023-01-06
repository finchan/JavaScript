let engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"])
console.log(engines.size)
for(let v of engines) {
    console.log(v)
}

let es6 = new Map()
es6.set("edition", 6)
es6.set("committe", "TC39")
es6.set("standard", "ECMA-262")
for(let pair of es6){
    console.log("KEY: ", pair[0], " VALUE: ", pair[1])
}
for(let [key,value] of es6) {
    console.log("KEY: ", key, " VALUE: ", value)
}
