function solution(arr)
{
    return arr.filter((el,idx)=> el !== arr[idx-1]); 
}
