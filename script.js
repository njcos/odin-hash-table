import { HashMap } from "./HashMap.js";
import { HashSet } from "./HashSet.js";
const test = new HashMap(0.75, 16);
const setTest = new HashSet(0.75, 16);

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("lion", "golden");
test.set("kite", "pink");
test.set("moon", "silver");
test.set("sky", "blue");
test.set("grass", "green");
test.set("favorite color", "green");
test.set("cartoons", "south park");
test.set("favorite number", "233");
test.set("numbers less than 10", "4");
test.set("spouse", "amanda");
test.set("mother", "patricia");
test.set("wife", "amanda");
test.set("child", "lily");
test.set("outside", "grass");
test.set("funny", "lennon");
test.set("foods", "tacos");
test.get("apple");
test.get("spouse");
test.get("cartoons");
test.get("hat");

test.remove("outside");
test.remove("foods");
test.remove("Psych");
test.remove("moon");
test.length();
test.keys();
test.values();
test.entries();
// test.clear();
console.log(test);

setTest.set("apple", "red");
setTest.set("banana", "yellow");
setTest.set("carrot", "orange");
setTest.set("dog", "brown");
setTest.set("elephant", "gray");
setTest.set("frog", "green");
setTest.set("grape", "purple");
setTest.set("hat", "black");
setTest.set("ice cream", "white");
setTest.set("jacket", "blue");
setTest.set("lion", "golden");
setTest.set("kite", "pink");
setTest.set("moon", "silver");
setTest.set("sky", "blue");
setTest.set("grass", "green");
setTest.set("favorite color", "green");
setTest.set("cartoons", "south park");
setTest.set("favorite number", "233");
setTest.set("numbers less than 10", "4");
setTest.set("spouse", "amanda");
setTest.set("mother", "patricia");
setTest.set("wife", "amanda");
setTest.set("child", "lily");
setTest.set("outside", "grass");
setTest.set("funny", "lennon");
setTest.set("foods", "tacos");

console.log(setTest);
