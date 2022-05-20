# javascript数据结构

## 1、栈	Stack

```javascript
// 栈
function Stack() {
  let arr = []; // 私有
  // this.arr = []; =>公有的
  // 入栈
  this.push = function (ele) {
    return arr.push(ele);
  };
  // 出栈
  this.pop = function () {
    return arr.pop();
  };
  // 查看栈顶元素
  this.peek = function () {
    return arr[arr.length - 1];
  };
  //查看整个数组
  this.get = function () {
    return arr;
  };
  //检查栈是否为空
  this.isEmpty = function () {
    return arr.length === 0;
  };
  // 清空栈
  this.clear = function () {
    arr = [];
  };
  // 获取栈的大小
  this.size = function () {
    return arr.length;
  };
}
```

## 2、队列	Queue

```javascript
// 队列
function Queue() {
  let queue = [];
  // 入队
  this.enqueue = function (element) {
    queue.push(element);
  };
  // 出队
  this.dequeue = function () {
    return queue.shift();
  };
  // 查看队列头
  this.front = function () {
    return queue[0];
  };
  // 检查队列是否为空
  this.isEmpty = function () {
    return queue.length === 0;
  };
  // 检查队列大小
  this.size = function () {
    return queue.length;
  };
}
```

## 3、链表

```javascript
// 3、链表
function LinkList() {
  // 链表头
  let head = null;
  // 链表长度
  let length = 0;
  // 辅助类：节点
  function Node(element) {
    this.element = element;
    this.next = null;
  }
  // 添加节点
  this.append = function (element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };
  // 查看链表头
  this.getHead = function () {
    return head;
  };
  // 链表某一个位置插入节点
  this.insert = function (position, element) {
    // 越界
    if (position > -1 && position < length) {
      let node = new Node(element);
      if (position === 0) {
        let current = head;
        head = node;
        head.next = current;
      } else {
        let index = 0;
        let current = head;
        let previous = null;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = node;
        node.next = current;
      }
      length++;
    }
  };
  // 移除链表某个位置的节点
  this.removeAt = function (position) {
    // 越界
    if (position > -1 && position < length) {
      if (position === 0) {
        let current = head;
        head = current.next;
      } else {
        let index = 0;
        let previous = null;
        var current = head;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        // 将上一项的next 指向 current的下一项next
        previous.next = current.next;
      }
      length--;
      // 返回移除后的结果
      return head;
    }
    return null;
  };
  // 查找节点索引
  this.indexOf = function (element) {
    let current = head;
    let index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };
  // 删除指定元素
  this.remove = function (element) {
    return this.removeAt(this.indexOf(element));
  };
  // 检查链表长度是否为0
  this.isEmpty = function () {
    return length === 0;
  };
  // 返回链表长度
  this.size = function () {
    return length;
  };
}
```

## 4、集合

```javascript
// 4、集合
function _Set() {
  // 没有this表示公有属性 最好是用this,表示实例对象自己的私有属性,否则实例对象是共享一份数据的
  this.items = {};
  // (1)检查元素是否存在与集合中
  this.has = function (value) {
    // 检查集合它本身而不是一直寻找它的原型对象
    return this.items.hasOwnProperty(value);
  };
  // (2)添加元素
  this.add = function (value) {
    return !this.has(value) ? (this.items[value] = value) : false;
  };
  // (3)删除元素
  this.remove = function (value) {
    return this.has(value) ? delete this.items[value] : false;
  };
  // (4)获取集合
  this.getItems = function () {
    return this.items;
  };
  // (5)清空集合
  this.clear = function () {
    this.items = {};
  };
  // (6)集合长度
  this.size = function () {
    return Object.keys(this.items).length;
  };
  // (7)提取集合的所有值
  this.values = function () {
    let values = [];
    for (let i in this.items) {
      if (this.items.hasOwnProperty(i)) {
        values.push(this.items[i]);
      }
    }
    return values;
  };
  // (8)并集
  this.union = function (otherSet) {
    // 定义一个新的集合
    let resultSet = new _Set();

    // 将第一个集合的值提取出来 添加到结果结合中
    let arr = this.values();
    for (let i = 0; i < arr.length; i++) {
      resultSet.add(arr[i]);
    }
    // 在将另一个集合的值提取出来 添加到结果集合中
    arr = otherSet.values();
    for (let j = 0; j < arr.length; j++) {
      resultSet.add(arr[j]);
    }
    // 返回并集结果
    return resultSet;
  };
  // (9)交集
  this.intersection = function (otherSet) {
    // 定义空的结果集合
    let resultSet = new _Set();
    // 获取第一个集合的元素
    let arr = this.values();
    for (let i = 0; i < arr.length; i++) {
      if (otherSet.has(arr[i])) {
        resultSet.add(arr[i]);
      }
    }
    return resultSet;
  };
  // (10)差集
  this.difference = function (otherSet) {
    // 定义一个空的结果集合
    let resultSet = new _Set();
    // 将集合A中的元素提取出来进行比较
    let arr = this.values();
    for (let i = 0; i < arr.length; i++) {
      if (!otherSet.has(arr[i])) {
        resultSet.add(arr[i]);
      }
    }
    // 返回差集结果
    return resultSet;
  };
}
```

|       *Set 方法*        |     *WeakSet 方法*      |
| :---------------------: | :---------------------: |
|     *add  添加元素*     |          *add*          |
|  *clear  清除全部元素*  |     *add  添加元素*     |
|      *delete 删除*      |    *delete 删除元素*    |
|  *entries  获得迭代器*  | *has  检查元素是否存在* |
|   *forEach  遍历方法*   |                         |
| *has  检查元素是否存在* |                         |
|   *size 获取集合大小*   |                         |
|   *values 获取全部值*   |                         |

## 5、字典

```javascript
// 5、字典
function Dictionary() {
  // this表示实例对象的  如果不用this，属于公有的，那么每个实例对象操作的都是同一个属性数据
  this.items = {};
  // 1、检查键名是否存在
  this.has = function (key) {
    return key in this.items;
  };
  // 2、添加键-值
  this.add = function (key, value) {
    this.items[key] = value;
  };
  // 3、删除值
  this.delete = function (key) {
    return this.has(key) ? delete this.items[key] : false;
  };
  // 4、获取单个值
  this.getItems = function (key) {
    return this.has(key) ? this.items[key] : undefined;
  };
  // 5、查看字典
  this.catch = function () {
    return this.items;
  };
  // 6、返回字典所有值
  this.values = () => {
    let valuesArr = [];
    for (let i in this.items) {
      if (this.has(i)) {
        valuesArr.push(this.items[i]);
      }
    }
    return valuesArr;
  };
  // 7、获取全部键名
  this.getKeys = () => {
    return Object.keys(this.items);
  };
}
```

















































