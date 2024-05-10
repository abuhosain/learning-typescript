"use strict";
{
    // static
    class Counter {
        static increment() {
            return (Counter.count = Counter.count + 1);
        }
        static decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0;
    // const instance1 = new Counter();
    console.log(Counter.increment()); // 1 -> different memory
    // 1 -> different memory
    // const instance2 = new Counter();
    console.log(Counter.increment()); // 1  --> different memory
    // 1  --> different memory
    // const instance3 = new Counter();
    console.log(Counter.increment());
    //
}