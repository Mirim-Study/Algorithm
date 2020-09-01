process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let line = "*";
    
    for(let i = 1; i < a; i++) {
            line += "*";
    }
    
    for(let j = 0; j < b; j++) {
        console.log(line);
    }
});
