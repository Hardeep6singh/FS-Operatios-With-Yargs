const readline=require('readline');
const r1 = readline.createInterface({input : process.stdin,
                         output : process.stdout});
const fs=require('fs');

r1.on('line',(chunk)=>{
let data=chunk.trim();

fs.exists(`${data}.txt`,(exists)=>{
    if (exists) {
        r1.setPrompt('File already present please give new name \n');
        r1.prompt();
        process.exit();
    }else {
        fs.writeFile( `${data}.txt`, 'You are awesome', function (err) {
            if(err) throw err;
            r1.close();
        });    
        fs.appendFile('Filenames.txt',`${data}.txt\n`,function(err){
                if(err) throw err;   
        });
    }
    
});
});