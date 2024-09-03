const flag = true;

if (!flag) {
    console.log("Condition is fullfilled");
}
else {
    console.log("Condition is not fullfilled");
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
do {
    i++;
}
while (i < 10); {
    console.log(i);
}

for (let k = 1; k < 10; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        console.log(k);
    }
}
let required = true;
while (required); {
    console.log(required);
    required = false;
}
