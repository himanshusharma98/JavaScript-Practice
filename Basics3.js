var marks = Array(6);
var marks = new Array(10, 20, 35, 40, 50, 100);
var marks = [10, 20, 35, 40, 50, 100];
subMarks = marks.slice(2, 4);
console.log(subMarks);

console.log(marks[3]);
marks[4] = 45;
console.log(marks);
console.log(marks.length);
marks.push(70);
console.log(marks);
marks.pop();
marks.unshift(54);
console.log(marks);
console.log(marks.indexOf(50));
console.log(marks.includes(105));

var sum = 0
for (let i = 0; i < marks.length; i++) {
    //console.log(marks[i]);
    sum = sum + marks[i];
}
console.log(sum);

//reduce,filter,map
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);
//Using Filter method to get even numbers- Part-1
var scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var evenScores = [];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i]);

    }
}
console.log(evenScores);

//Using Filter method to get even numbers- Part-2
var getEvenScores = scores.filter((score) => score % 2 == 0);
console.log(getEvenScores);

//Using the map method
let mappedArray = scores.map(scores => scores * 3);
console.log(mappedArray);
//Sum of mapped array
let mappedSum = mappedArray.reduce((sum, val) => sum + val, 0);
console.log(mappedSum);

//Using Filter/Map/Reduce together
let scores1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 105];
let finalResult = scores1
    .filter((score) => score % 2 == 0)
    .map((score) => score * 3)
    .reduce((sum, val) => sum + val, 0);
console.log(finalResult);