// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Khang",
  age: 29,
  hobbies: ["sports", "cooking", 12],
};

let favoriteActivities: string[];
favoriteActivities = ["sports"];

for (const hobby of person.hobbies) {
  console.log(hobby);
  //   console.log(hooby.map()) !!! Error
}
