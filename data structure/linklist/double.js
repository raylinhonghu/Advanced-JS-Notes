function Node(element){
  this.element = element;
  this.next = null;
  this.prev = null;
}

function LinkedList(){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.display = display;
  this.findLast = findLast;
  this.dispReverse = dispReverse;
}

function findLast(){
  var node = this.head;
  while(node.next!=null){
    node = node.next;
  }
  return node;
}

function dispReverse(){
  var node = this.findLast();
  while(node.prev!=this.head){
    console.log(node.element);
    node = node.prev;
  }
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
  var pos = find(after);
  newNode.next = pos.next;
  newNode.prev = newNode;
  pos.next = newNode;
}

function remove(val){
  var node = this.find(val);
  node.prev = node.next;
  node.next = node.prev;
  node.prev = null;
  node.next = null;
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
