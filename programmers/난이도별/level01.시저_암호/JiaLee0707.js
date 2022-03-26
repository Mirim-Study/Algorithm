function solution(s, n) {
    return s.split('').map((r) => {
        if (r === ' ') return r;

        let upperCaseASCII  = (r.toUpperCase()).charCodeAt();
        if (upperCaseASCII + n > 'Z'.charCodeAt()) r = r.charCodeAt() + n - 26;
        else r = r.charCodeAt() + n;

        return String.fromCharCode(r);
    }).join('');
}
