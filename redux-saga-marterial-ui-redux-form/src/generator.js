console.log("Learning generator function");

function* helloGeneratorFunction() {
    //câu lệnh 1
    yield 2020; //dừng tại đây
    //chạy lại
    //câu lệnh 2
    return "Redux Saga"; //Kết thúc tại đây => throw error
}

const resullt = helloGeneratorFunction(); //iterator
console.log("result 1", resullt.next()); //2020 - done: false
console.log("result 2", resullt.next()); //Redux Sage - done: true
console.log("result 3", resullt.next()); //undefined - done: true

//Khi không gán vào biến - tạo iterator mới và hoạt động riêng biệt
// console.log("result 1", helloGeneratorFunction().next()); //2020 - done: false
// console.log("result 2", helloGeneratorFunction().next()); //2020 - done: false
// console.log("result 3", helloGeneratorFunction().next()); //2020 - done: false

console.log("Vòng lặp vô tận");

function* infiniteLoop() {
    while (true) {
        //callback
        yield "Tôi đang lắng nghe...";
    }
}

const iterator = infiniteLoop();

console.log("Infinite 1", iterator.next());
console.log("Infinite 2", iterator.next());
console.log("Infinite 3", iterator.next());

console.log("Generator function: Generator trong generator");
//Xin chào => Generator -  Redux Saga =>  Kết thúc

function* printName() {
    yield "Generator - Redux Saga";
}

function* hello() {
    yield "Xin chào";
    yield* printName();
    yield "Kết thúc";
}

const iteratorGenerator = hello();
console.log("Iterator 1", iteratorGenerator.next());
console.log("Iterator 2", iteratorGenerator.next());
console.log("Iterator 3", iteratorGenerator.next());
