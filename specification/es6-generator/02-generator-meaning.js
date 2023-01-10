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

function step(value,callback){
    let m = value
    console.log(m)
    let t = "KKK"
    callback(t)
}
step("MMM", function(k){
    console.log(k)
})

function* longRunningTask(value1) {
    try{
        let value2 = yield step1(value1)
        let value3 = yield step2(value2)
        let value4 = yield step3(value3)
        let value5 = yield step4(value4)
    } catch(e){
        //  Handle any error from step1 through step4
    }
}
//  左手导右手，让你玩个溜
function scheduler(task) {
    let taskObj = task.next(task.value)
    console.log(taskObj)
    if(!taskObj.done) {
        task.value = taskObj.value
        scheduler(task)
    }
}
scheduler(longRunningTask(1))

function step1(value) {
    console.log("step1",value)
    return value +1 ;
}
function step2(value) {
    console.log("step2",value)
    return value +2 ;
}
function step3(value) {
    console.log("step3",value)
    return value +3 ;
}
function step4(value) {
    console.log("step4",value)
    return value +4 ;
}
