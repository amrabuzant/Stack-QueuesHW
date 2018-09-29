class node {

    constructor (dd){
        this.data = dd
        this.next = null
    }
}
class Queue {

    constructor(){
        this.head = null
        this.end = null
        this.length = 0
    }

    enqueue(node){
        if (this.head == null) {
            this.head = node
            this.end = node
            this.length = 1
            return
        }else{
            this.end.next =  node
            this.end = this.end.next
            this.length++
        } 
    }

    dequeue(){
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

var queue = new Queue()
console.log(util.inspect(queue.isEmpty(),{ showHidden: true, depth: null, colors: true }))
queue.enqueue(new node(56))
queue.enqueue(new node(50))
queue.enqueue(new node(30))
console.log(util.inspect(queue,{ showHidden: true, depth: null, colors: true }))
console.log(util.inspect(queue.dequeue(),{ showHidden: true, depth: null, colors: true }))
console.log(util.inspect(queue.peek(),{ showHidden: true, depth: null, colors: true }))
console.log(util.inspect(queue,{ showHidden: true, depth: null, colors: true }))

queue.enqueue(new node(200))


console.log(util.inspect(queue,{ showHidden: true, depth: null, colors: true }))