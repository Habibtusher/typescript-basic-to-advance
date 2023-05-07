class Counter {
static Counter: number =0

 static increment(): number {
    return (Counter.Counter = Counter.Counter + 1);
  }
 static decrement(): number {
    return (Counter.Counter = Counter.Counter - 1);
  }
}


console.log(Counter.increment());
console.log(Counter.increment());
