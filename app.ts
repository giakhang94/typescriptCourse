let userInput: unknown;

userInput = 5;
userInput = "max";
let userName: any;

// userName = userInput; //error: unknown is not assignable to a string
userInput = ["1", "2"];
// userInput[0] = 1; // error: userInput is unknow

userInput = 1;
userName = userInput;

let userInput2: unknown;
userInput2 = 2;

// console.log(userInput + userInput2); // Lỗi luôn k cho cộng không cho làm gì hết
