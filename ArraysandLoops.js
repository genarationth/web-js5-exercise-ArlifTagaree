//Exercise #1
//Part1
const banker = ['Sofia', 'David','Juan'];
console.log(banker);



//Part2
banker.push('Sara', 'Augustin');
console.log(banker);
console.log(banker.shift())
console.log(banker);

//Part3
banker.splice(1,0,'Renata');
console.log(banker);
banker.splice(5,0,'Elena');
console.log(banker);

//Exercise #2

 //วิธีที่ 1
let temp = ''
for (let star = 1; star <= 5; star++) {
    temp += '*' // temp+= หมายความว่า temp = temp + '*'
    console.log(temp);
    
}
//วิธีที่ 2
let temp1 = []
for (let star = 1; star <= 5; star++) {
    temp1.push('*')
    console.log(temp1.join(''));
    
}
//วิธีที่ 3
for (let i = 1; i <= 5; i++) {
    let temp = ''
        for (let j = 1; j <= i; j++) {
            temp += '*'
        }
        console.log(temp);        
    }

//Exercise #3

//#3.1 – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,as long as xValue remains positive.

let xValue = 10;
let x = 0.5;
while (x < xValue) {
    if (xValue > 0) {
        console.log(xValue);
        xValue -= 0.5;
    }
}



//#3.2
let i = 0;

while (i <= 100) {
    if (i % 2 !==0) {
        console.log(i);
    }   
    i++;
}
    

//#3.3

//#3.4