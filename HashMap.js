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
      hashCode;
    }
    return hashCode % this.capcity;
  }

  set(key, value) {
    let object = { name: key, value: value, next: null };
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
    let mapCapcity = this.capcity;
    let amountFull = this.checkCapacity();
    let currentMap = this.map;

    if (amountFull >= mapCapcity * load) {
      mapCapcity = mapCapcity * 2;
      let tempArray = new Array(mapCapcity);
      this.capcity = mapCapcity;
      for (let i = 0; i < currentMap.length; i++) {
        tempArray[i] = currentMap[i];
        this.map = tempArray;
      }
    }
  }
  get(key) {
    let search = key;
    let map = this.map;
    let location = this.map;
    let result;
    for (let i = 0; i < map.length; i++) {
      if (map[i] !== undefined) {
        location = map[i];
        while (location !== null) {
          if (location.name === search) {
            result = location.value;
            break;
          } else {
            location = location.next;
          }
        }
      }
    }
    console.log(result);
  }
  has(key) {
    let search = key;
    let map = this.map;
    let location = this.map;
    let result = false;
    for (let i = 0; i < map.length; i++) {
      if (map[i] !== undefined) {
        location = map[i];
        while (location !== null) {
          if (location.name === search) {
            result = true;
            break;
          } else {
            location = location.next;
          }
        }
      }
    }
    console.log(result);
  }
  //   remove(key) {
  //     let search = key;
  //     let map = this.map;
  //     let id = this.hash(key);
  //     let location = this.map[id];
  //     let previous;
  //     let result = false;
  //     console.log(location);
  //     // for (let i = 0; i < map.length; i++) {
  //     //   if (map[i] !== undefined) {
  //     //     location = map[i];
  //     //     while (location !== null) {
  //     //       if (location.name === search) {
  //     //         if (location.next === null) {
  //     //           previous.next = null;
  //     //         }

  //     //         console.log(previous[index]);
  //     //         result = true;
  //     //         previous.next = location.next;
  //     //         break;
  //     //       } else {
  //     //         previous = location;
  //     //         location = location.next;
  //     //       }
  //     //     }
  //     //   }
  //     // }
  //     // console.log(result);
  //   }
}
export { HashMap };
