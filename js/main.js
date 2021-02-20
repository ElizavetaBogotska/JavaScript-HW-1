//1
var counter = (function () {
    var count = 0;
    return function (num) {
        count = num !== undefined ? num : count;
        return count++;
    }
} ());
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter(100)); // 100
console.log(counter()); // 101
console.log(counter(500)); // 500
console.log(counter()); // 501
console.log(counter(0)); // 0
console.log(counter()); // 1
//2
var counting = (function () {
    var count = 0;
    return {
        value(num) {
            count = num !== undefined ? num : count;
            return count;
        },
        increment() {
            count++;
        },
        decrement() {
            count--;
        }
    }
} ());
console.log(counting.value()); // 0
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value()); // 3
counting.decrement();
counting.decrement();
console.log(counting.value()); // 1
console.log(counting.value(100)); // 100
counting.decrement();
console.log(counting.value()); // 99
console.log(counting.value(200)); // 200
counting.increment();
console.log(counting.value()); // 201
//3
let myPrint = (a, b, res) => `${a}^${b}=${res}`;
let myPow = (a, b, callback) => {
    let pow = (x,n) => {
        if (n !== 1) return x *= pow(x, n-1);
    return x;
    }
    return callback(a, b, pow(a, b));
}
console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8
//4-5-6
function fullInfo() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
  }
  
  let yearNow = new Date().getFullYear();
  let car = {
    engine: 1.5,
    model: 'Logan',
    name: 'Dacia',
    year: 1997,
    info: fullInfo,
    get used() {
      return this.year !== yearNow ? 'used' : 'new';
    },
    set used(value) {
      if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
  };
  let car2 = {
    engine: 2,
    model: 'Matis',
    name: 'Daewoo',
    year: 2004,
    info: fullInfo,
    get used() {
      return yearNow - this.year ? 'new' : 'used';
    },
    set used(value) {
      if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
  };
console.log(car.info());
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(car2.info());
car.used = 'used';
console.log(car2.info());
//7
let list = [12, 23, 100, 34, 56, 9, 233];
let myMax = (arg) => Math.max.apply(Math, arg);
console.log(myMax(list)); // 233
//8
function myMul(a, b) {
    return a * b;
}
let myDouble = myMul.bind(null, 2);
let myTriple = myMul.bind(null, 3);
console.log(myDouble(3)); // = myMul(2, 3) = 6
console.log(myDouble(4)); // = myMul(2, 4) = 8
console.log(myDouble(5)); // = myMul(2, 5) = 10
console.log(myTriple(3)); // = myMul(3, 3) = 9
console.log(myTriple(4)); // = myMul(3, 4) = 12
console.log(myTriple(5)); // = myMul(3, 5) = 15
//9
let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];
let myUniq = (arr) => {
    let set = new Set();
    arr.forEach( (val) => {
        set.add(val)
    });
    return set;
}
console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));