function Node(data, left, right){
  this.left = left;
  this.right = right;
  this.data = data;
  this.show = show;
}

function BST(){
  this.root = null;

  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
}

function insert(val){
  var node = new Node(val,null,null);

  if(this.root == null){
    this.root = node;
  }else{
    var current = this.root;
    var parent;
    while(true){
      if(current.data < val){
        parent = current;
        current = current.left;
        if(current == null){
          parent.left = node;
          break;
        }
      }else if(current.data > val){
        parent = current;
        current = current.right;
        if(current == null){
          parent.right = node;
          break;
        }
      }else{
        console.log("inserting existing value!");
      }
    }
  }
}

function inOrder(node){
  if(node!=null){
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
  }
}

function preOrder(node){
  if(node!==null){
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node){
  if(node!==null){
    preOrder(node.left);
    preOrder(node.right);
    console.log(node.show());
  }
}

function show(){
  return this.data;
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
postOrder(nums.root);
