class Node{
    constructor(val){
        this.value=val;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    enqueue(val){
        let newNode=new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }else{
            this.last.next=newNode;
            this.last=newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return undefined;
        let temp=this.first;
        if(this.first===this.last){
            this.last=null;
        }
        this.first=this.first.next;
        this.size--;
        return temp.value;
    }
}
let que=new Queue();
que.enqueue(10);
que.enqueue("ali");
que.enqueue(true);
console.log(que);