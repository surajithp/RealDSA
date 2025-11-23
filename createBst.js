const bstArray = [10, 5, 15, 2, 7, 12, 20]

class Node {
    constructor(item) {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}

let root = null

bstArray.forEach((item, index)=>{
    if(index === 0){
        root = new Node(item)
    } else{
        if(root.data > item){
            if(root.left){
                if(root.left.data > item){
                    root.left.left = new Node(item)
                }else{
                    root.left.right = new Node(item)
                }
            }else{
                root.left = new Node(item)
            }
        }else{
            if(root.right){
                if(root.right.data > item){
                    root.right.left = new Node(item)
                }else{
                    root.right.right = new Node(item)
                }
            }else{
                root.right = new Node(item)
            }
        }
    }
})

console.log("====root",root)