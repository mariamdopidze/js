

// #5
const names = [ 'ana', 'nino','giorgi','lasha','mariam'];
names.push ('lily');
console.log(names);

const lastname = names.pop();
console.log(lastname);

const firstname = names.shift();
console.log(firstname);

names.unshift ('sofi');
console.log (names);


//#1

let days = [ 1, 5, 9, 17, 3, 23, 38, 31, 46, 52, 67, 70, 85, 97];
for (let index=0; index < days.length; index++){console.log(days [index]);}

//#2
let week = [ 3, 6, 7, 11, 25, 31, 46, 2, 27,39];

let item = 0
while (item < week.length ) {console.log (week[item]);
    item++; 
}
//#3
let months = [5, 28, 100, 115, 128, 141, 147];
do {
    console.log(months[index]);
    i++;
} while (index < months.length);