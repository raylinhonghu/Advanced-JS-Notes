function Node(element){
  this.element = element;
  this.next = null;
}

function LinkedList(){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.display = display;
}

function find(val){
  var node = this.head;
  while(node!=null){
    if(val == node.element){
      return node;
    }
    node = node.next;
  }
  return null;
}

function findPrevious(num){
  var node = this.head;
  while(node!=null){
    if(node.next!=null && node.next.element!=num){
      node = node.next;
    }
    return node;
  }
}

function insert(val,after){
  var newNode = new Node(val);
  var curNode = this.find(after);
  newNode.next = curNode.next;
  curNode.next = newNode;
}

function remove(val){
  var preNode = this.findPrevious(val);
  var node = this.find(val);
  if(node != null){
    preNode.next = node.next;
  }
}

function display(){
  var node = this.head;
  while(node.next != null){
    console.log(node.next.element);
    node = node.next;
  }
}

var cities = new LinkedList();
cities.insert("aaa","head");
cities.insert("bbb","aaa");
cities.insert("ccc","bbb");
/* cities.display(); */
cities.remove("bbb");
cities.display();
