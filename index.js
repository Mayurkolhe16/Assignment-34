/*const marks=[10,20,150,100,90]

let largest=marks[0]

for(const num of marks)
{
    if(num>largest)
    {
        largest=num
    }
}
console.log(`Largest number is ${largest}`);*/

/*const numbers=[2,7,10,13,14,17]

let sum=0;
for(let i=0; i<numbers.length; i++)
{
    if(numbers[i]%2==1)
    {
        sum=sum+numbers[i]
    }
}
console.log(`Sum: ${sum}`)*/

const students=[
    "Mayur",
    "Amol",
    "Shubham",
    "Rohit",
    "Omkar"
]

for(let i=0; i<students.length; i++)
for(const stud of students)
{
    console.log(`Hello ${stud}`);
}