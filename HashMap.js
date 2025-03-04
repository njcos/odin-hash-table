class HashMap {
  constructor(loadFactor, capcity) {
    this.loadFactor = loadFactor;
    this.capcity = capcity;
    this.map = new Array(capcity);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.capcity;
  }

  set(key, value) {
    let object = { name: key, value: value, next: null };
    let map = this.map;
    let id = this.hash(key);
    if (map[id] !== undefined) {
      let current = map[id];
      let previous;
      let nextObject = object;
      previous = current;
      current.next = nextObject;
      map[id] = previous;
      console.log(map[id]);
    } else {
      map[id] = object;
    }
    // this.checkCapacity();
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
    let capcity = this.capcity;
    let amountFull = this.checkCapacity();
    if (amountFull >= capcity * load) {
      console.log("filling Up");
    }
  }
}

export { HashMap };
