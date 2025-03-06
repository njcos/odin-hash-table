class HashSet {
  constructor(loadFactor, capcity) {
    this.loadFactor = loadFactor;
    this.capcity = capcity;
    this.map = new Array(capcity);
  }

  hash(key) {
    let hashCode = 2;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode;
    }
    return hashCode % this.capcity;
  }

  set(key, value) {
    let object = { name: key, next: null };
    let map = this.map;
    let id = this.hash(key);
    let current = map[id];
    let previous;
    let nextObject = object;
    if (map[id] !== undefined) {
      while (current !== null) {
        previous = current;
        current = current.next;
      }
      current = nextObject;
      previous.next = current;
    } else {
      map[id] = object;
    }
    this.expandMap();
  }
  checkCapacity() {
    let originalArray = this.map;
    let amountFull = 0;
    for (let i = 0; i < originalArray.length; i++) {
      if (typeof originalArray[i] === "object") {
        amountFull++;
      }
    }
    return amountFull;
  }

  expandMap() {
    let load = this.loadFactor;
    let mapCapcity = this.capcity;
    let amountFull = this.checkCapacity();
    let currentMap = this.map;
    let tempArray = new Array(mapCapcity);
    let currentNode;
    let previousNode;
    if (amountFull >= mapCapcity * load) {
      mapCapcity = mapCapcity * 2;
      this.capcity = mapCapcity;
      for (let i = 0; i < currentMap.length; i++) {
        tempArray[i] = currentMap[i];
        if (currentMap[i] !== undefined) {
          this.map[i] = undefined;
          currentNode = tempArray[i];
          while (currentNode !== null) {
            this.set(currentNode.name, currentNode.value);
            previousNode = currentNode;
            currentNode = currentNode.next;
          }
          //   this.set(tempArray[i].name, tempArray[i].value);
        }
      }
    }
  }

  get(key) {
    let search = this.hash(key);
    let location = this.map[search];
    let result;
    while (location !== null) {
      if (location.name === key) {
        result = location.value;
        break;
      } else {
        location = location.next;
      }
    }
    console.log(result);
    return result;
  }

  has(key) {
    let search = this.hash(key);
    let location = this.map[search];
    let result = false;
    while (location !== null) {
      if (location.name === key) {
        result = true;
        break;
      } else {
        location = location.next;
      }
    }
    console.log(result);
    return result;
  }

  remove(key) {
    let search = key;
    let id = this.hash(key);
    let location = this.map[id];
    let current = location;
    let previous;
    let result = "No item found";
    if (location.name === search) {
      this.map[id] = undefined;
      console.log(location);
      result = "Item removed";
    } else {
      while (current.name !== search && current.next !== null) {
        previous = current;
        current = current.next;
      }
      if (current.name === search) {
        previous.next = null;
        result = "Item removed";
      }
    }
    console.log(result);
    return result;
  }

  clear() {
    this.capcity = 16;
    this.map = new Array(this.capcity);
  }

  length() {
    let map = this.map;
    let current = map;
    let previous;
    let length = 0;
    for (let i = 0; i < map.length; i++) {
      if (map[i] !== undefined) {
        current = map[i];
        while (current !== null) {
          previous = current;
          current = current.next;
          length++;
        }
      }
    }
    console.log(length);
  }
  keys() {
    let map = this.map;
    let current = map;
    let previous;
    let keys = [];
    for (let i = 0; i < map.length; i++) {
      if (map[i] !== undefined) {
        current = map[i];
        while (current !== null) {
          keys.push(current.name);
          previous = current;
          current = current.next;
        }
      }
    }
    console.log(keys);
  }
}
export { HashSet };
