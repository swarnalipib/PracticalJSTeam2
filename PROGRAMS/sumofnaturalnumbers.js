function findSum(n)
{
    let sum=0;
    for(i=1;i<=n;i++)
        sum=sum+i;
    return sum;
}
console.log(findSum(3));//6
console.log(findSum(10));//55