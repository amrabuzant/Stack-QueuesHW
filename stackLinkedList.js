class node {

    constructor (dd){
        this.data = dd
        this.next = null
    }
}
class Stack {

    constructor(){
        this.head = null
        this.length = 0
    }

    push(node){
        if (this.head == null) {
            this.head = node
            this.length = 1
            return
        }else{
            node.next = this.head
            this.head = node
            this.length++
        } 
    }

    pop(){
        var node = this.head
        this.head = this.head.next
        this.length--
        node.next = null
        return node
    }

    peek(){
        var node = this.head
        return node
    }

    isEmpty(){
        return this.length == 0 ? true : false
    }
}

const util = require('util');

var stack = new Stack()
console.log(util.inspect(stack.isEmpty(),{ showHidden: true, depth: null, colors: true }))
stack.push(new node(56))
stack.push(new node(50))
stack.push(new node(30))
console.log(util.inspect(stack,{ showHidden: true, depth: null, colors: true }))
console.log(util.inspect(stack.pop(),{ showHidden: true, depth: null, colors: true }))
console.log(util.inspect(stack.peek(),{ showHidden: true, depth: null, colors: true }))
console.log(util.inspect(stack,{ showHidden: true, depth: null, colors: true }))

stack.push(new node(200))


console.log(util.inspect(stack,{ showHidden: true, depth: null, colors: true }))