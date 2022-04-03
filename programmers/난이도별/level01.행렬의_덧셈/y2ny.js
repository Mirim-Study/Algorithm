function solution(arr1, arr2) {
    return arr1.flatMap((e, index1) => [e.flatMap((ee, index2) => [ee + arr2[index1][index2]])]);
}
