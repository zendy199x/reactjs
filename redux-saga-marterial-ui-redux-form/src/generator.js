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
