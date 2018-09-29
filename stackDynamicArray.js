class Stack {

    constructor(){
        this.arr = []
        this.lastIndex = 0
    }

    push(node){
        this.arr[this.lastIndex] = node
        this.lastIndex ++
    }

    pop(){
        var node = this.arr[this.lastIndex - 1]
        this.lastIndex --
        return node
    }

    peek(){
        return this.arr[this.lastIndex - 1]
    }

    isEmpty(){
        return this.lastIndex == 0 ? true : false
    }

}

const util = require('util');

var stack = new Stack()
console.log(util.inspect(stack.isEmpty(),{ showHidden: true, depth: null, colors: true }))
stack.push(56)
stack.push(50)
stack.push(30)
console.log(util.inspect(stack,{ showHidden: true, depth: null, colors: true }))
console.log(util.inspect(stack.pop(),{ showHidden: true, depth: null, colors: true }))
console.log(util.inspect(stack.peek(),{ showHidden: true, depth: null, colors: true }))
console.log(util.inspect(stack,{ showHidden: true, depth: null, colors: true }))

stack.push(200)


console.log(util.inspect(stack,{ showHidden: true, depth: null, colors: true }))
