class Queue {

    constructor(x){
        this.size = x || 3
        this.arr = new Array(this.size)
        this.head = 0
        this.tail = 0
    }

    enqueue(node){
        this.arr[this.tail] = node
        this.tail ++
        if ((this.tail == this.arr.length) && (this.head == 0) || (this.head == this.tail)) {
            this.createNewArray()
        }else if ((this.tail == this.arr.length)) {
            this.tail = 0
        }
    }

    dequeue(){
        if (this.head == this.tail) {
            return null
        }
        var node = this.arr[this.head]
        this.head ++
        if ((this.head == this.arr.length)) {
            this.head = 0
        }
        return node
    }

    peek(){
        return this.arr[this.head]
    }

    isEmpty(){
        return this.head == this.tail ? true : false
    }

    createNewArray(){
        this.size = this.size * 2
        var tempArray = new Array(this.size)
        for (let i = 0; i < this.arr.length; i++) {
            const element = this.arr[this.head];
            tempArray[i] = element
            this.head ++
            if (this.head == this.arr.length) {
                this.head = 0
            }
        }
        this.tail = this.arr.length
        this.arr = tempArray
        this.head = 0
    }

}

const util = require('util');

var queue = new Queue()
console.log(util.inspect(queue.isEmpty(),{ showHidden: true, depth: null, colors: true }))
queue.enqueue(56)
queue.enqueue(50)
console.log(util.inspect(queue,{ showHidden: true, depth: null, colors: true }))
queue.enqueue(30)
console.log(util.inspect(queue.dequeue(),{ showHidden: true, depth: null, colors: true }))
console.log(util.inspect(queue.peek(),{ showHidden: true, depth: null, colors: true }))
console.log(util.inspect(queue,{ showHidden: true, depth: null, colors: true }))

queue.enqueue(200)

queue.enqueue(150)
queue.enqueue(250)
console.log(util.inspect(queue,{ showHidden: true, depth: null, colors: true }))
queue.enqueue(350)
console.log(util.inspect(queue,{ showHidden: true, depth: null, colors: true }))
console.log(util.inspect(queue.peek(),{ showHidden: true, depth: null, colors: true }))
