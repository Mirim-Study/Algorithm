process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let str = "";
    
    for(let i=0; i<b; i++){
        for(let j=0; j<a; j++){
            str += "*";
        }
        str += "\n";
    }
    console.log(str);
});
