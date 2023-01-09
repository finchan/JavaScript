let clock = function* () {
    while (true) {
        console.log("Tick")
        yield
        console.log("Tock")
        yield
    }
}
let go = clock()
go.next()
go.next()
go.next()

function* gen() {
    yield 1;
    return 2;
}

let g = gen();
console.log(
    g.next().value,
    g.next().value,
);

function* loadUI() {
    showLoadingScreen()
    yield loadUIDataAsynchronously()
    hideLoadingScreen()
}

let loader = loadUI()
//  加载UI
loader.next()
//  卸载UI

loader.next()

function showLoadingScreen() {
    console.log("SHOW-LOADING-SCREEN")
}

function loadUIDataAsynchronously() {
    console.log("LOAD-UI-DATA-ASYNCHRONOUSLY")
}

function hideLoadingScreen() {
    console.log("HIDE-LOADING-SCREEN")
}

//  Ajax Sample
function* main() {
    let result = yield ajaxRequest("http://some.url")
    console.log(result)
}
function ajaxRequest(url) {
    let response = "Ajax Return Value"
    setTimeout(()=>{
        // Simulate Ajax
        iterator.next(response)
    }, 1000)
}
let iterator = main()
iterator.next()

function* numbers() {
    let file = new FileReader("numbers.txt")
    try{
        while(!file.eof) {
            yield parseInt(file.readLine(), 10)
        }
    }finally {
        file.close()
    }
}