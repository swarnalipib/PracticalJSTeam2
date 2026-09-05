//Example 1 count vowels

function  countVowels(str)
{
    let count=0

    for (let x of str)
    {
        if(x =='a'|| x =='e'|| x =='i'|| x =='o'||x =='u')
        {
            count++;
        }
}
return count;
}

console.log(countVowels("javascript"));
console.log(countVowels("Swarnalipi"));

//Example 2 count a particular characters

function countCharacters(str,search)
{
let count =0;

for(x of str)
{
    if(x == search){
        count++;
    }
}
 return count
}

console.log(countCharacters("Testingjavascript","s"));

//to check duplicate of letters , create object and 

//Example - count words

function countWords(str)
{
let count =1;

for(x of str)
{
    if(x == " "){
        count++;
    }
}
 return count
}

console.log(countWords("Testing javascript"));

//Example - two strings are equal

function compareStrings(str1,str2)
{
    let count1 = 0;
    let count2 = 0;

for(let x of str1)
    count1++;
for(let x of str2)
    count2++; 

if (count1 != count2)
    return false;

for (let i=0; i<count1;i++)
{
    if(str1[i] != str2[i])
        return false;
}

return true
}

console.log(compareStrings("swarna","swarna"));
console.log(compareStrings("swarna","java"));

