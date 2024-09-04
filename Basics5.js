//Working with Strings & its Methods
var userName = "Sachin";
console.log(userName);
console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.charAt(0));
console.log(userName.indexOf("i"));
console.log(userName.lastIndexOf("i"));
console.log(userName.slice(2, 4));
console.log(userName.substring(2, 4));
console.log(userName.split("i"));

let splitUserName = userName.split("i");
console.log(splitUserName.length);

//Finding the difference between two dates
let date = '23';
let nextDate = '30';
let diff = parseInt(nextDate) - parseInt(date); //or date - nextdate;
console.log(diff);
//Convert String to Number
diff.toString();
console.log(diff);

//Concatenation of Strings
let welcomeMsg = userName + " Welcome to System";
console.log(welcomeMsg);

let val = welcomeMsg.indexOf("Welcome");
console.log(val);

//Write a program to find count of occurrences
let count = 0;
let str = "Welcome to System";
for (let i = 0; i < str.length; i++) {
    if (str[i] == "o") {
        count++;
    }
}
console.log(count);




