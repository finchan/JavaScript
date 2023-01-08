let clock = function* () {
   while(true) {
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