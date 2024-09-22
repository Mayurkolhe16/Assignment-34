const marks=[10,20,150,100,90]

let largest=marks[0]

for(const num of marks)
{
    if(num>largest)
    {
        largest=num
    }
}
console.log(`Largest number is ${largest}`);