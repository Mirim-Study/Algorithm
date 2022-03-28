function solution(numbers) {
    return 45 - numbers.reduce( (prev, curr) => prev + curr );
}
