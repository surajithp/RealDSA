class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      this.root = this._insertRecursively(this.root, value);
    }
  
    _insertRecursively(current, value) {
      if (current === null) {
        return new Node(value);
      }
  
      if (value < current.data) {
        current.left = this._insertRecursively(current.left, value);
      } 
      else if (value > current.data) {
        current.right = this._insertRecursively(current.right, value);
      } 
      else {
        return current; 
      }
  
      return current;
    }
  
    // -----------------------------
    // INORDER (Left → Root → Right)
    // -----------------------------
    inorder() {
      const result = [];
      this._inorderRecursive(this.root, result);
      return result;
    }
  
    _inorderRecursive(node, result) {
      if (node === null) return;
      this._inorderRecursive(node.left, result);
      result.push(node.data);
      this._inorderRecursive(node.right, result);
    }
  
    // -----------------------------
    // PREORDER (Root → Left → Right)
    // -----------------------------
    preorder() {
      const result = [];
      this._preorderRecursive(this.root, result);
      return result;
    }
  
    _preorderRecursive(node, result) {
      if (node === null) return;
      result.push(node.data);             // Root
      this._preorderRecursive(node.left, result);  // Left
      this._preorderRecursive(node.right, result); // Right
    }
  
    // --------------------------------
    // POSTORDER (Left → Right → Root)
    // --------------------------------
    postorder() {
      const result = [];
      this._postorderRecursive(this.root, result);
      return result;
    }
  
    _postorderRecursive(node, result) {
      if (node === null) return;
      this._postorderRecursive(node.left, result);   // Left
      this._postorderRecursive(node.right, result);  // Right
      result.push(node.data);                        // Root
    }
  }
  
  const bstArray = [10, 5, 15, 2, 7, 12, 20];
  const tree = new BST();
  for (let value of bstArray) tree.insert(value);
  
  console.log("INORDER   :", tree.inorder());
  console.log("PREORDER  :", tree.preorder());
  console.log("POSTORDER :", tree.postorder());
  