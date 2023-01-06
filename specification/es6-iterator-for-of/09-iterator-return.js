function readLineSync(file) {
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    return {done: false}
                },
                return() {
//   比如关闭文件之类的代码file.close
                    console.log(file)
                    return {done: true}
                }
            }
        }
    }
}

//  情况1 - break
for (let line of readLineSync("E:\\Practice\\JavaScript\\JavaScript\\specification\\es6-iterator-for-of\\09-iterator-return.js")) {
    console.log(line)
    break
}

//  情况2 - throw Error
for (let line of readLineSync("E:\\Practice\\JavaScript\\JavaScript\\specification\\es6-iterator-for-of\\09-iterator-return.js")) {
    console.log(line)
    throw new Error()
}