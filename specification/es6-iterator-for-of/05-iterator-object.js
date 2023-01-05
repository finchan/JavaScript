let obj = {
    data: ['Hello', 'World'],
    [Symbol.iterator](){
        const self = this
        let index = 0
        return {
            next() {
                if(index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done:  true
                    }
                }
            }
        }
    }
}

for(let i of obj) {
    console.log(i)
}