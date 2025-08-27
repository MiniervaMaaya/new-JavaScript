// 

const student1Grade = 85;
const studetn2Grade = 92;
const student3Grade = 78;

const grades = [85, 92, 78, 96, 88];
console.log(grades);

console.log("=== ARRAYAS ===");

const friends = ["Michael", "Chamy", "kimchi"];
console.log(friends);

const mixed = ["Dana", 27, true, friends];
console.log(mixed);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[1]); 
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = "chamy";
console.log(friends);

const firstName ="Dana";
const dana = [firstName, "Maaya", 2037 - 1991, "teacher", friends];
console.log(dana);

const calAge = function (birthYear) {
    return 2037 - birthYear;
}
const ages = [calAge(1991), calAge(1984), calAge(2008), calAge(2020)];
console.log(ages);


const friends = ["Mel", "Tofu", "Peter"];

const newlength = friends.push("Jay");
console.log(friends);
console.log(newlength);

friends.unshift("John");
console.log(friends);

const popped = friends.pop();
console.log(popped);

console.log(friends);

const shifted = friends.shift();
console.log(shifted);

console.log(friends);
