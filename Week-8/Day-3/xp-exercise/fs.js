// ReadFile
const fs = require ('fs')

fs.readFile('file.txt','utf8',(err,data)=>{

console.log(data)

});

let string="here a new string"

//writeFile

fs.writeFile('write.txt',string, function (err) {
    if (err){
        console.log(err);
    }
    else{
        console.log('File succesfully writed');
    }
});
//appendFile


let newstring= " here is another string"


fs.appendFile('write.txt', newstring,  function (err) {
    if (err) {
        console.error(err)
        return
    } else {
      console.log(" succesfully done")
    }
});

// test file to delete
const test='here is a test file to delete'

fs.writeFile('test.txt',test, function (err) {
    if (err){
        console.log(err);
    }
    else{
        console.log('File succesfully writed');
    }
});



fs.unlink('test.txt', function (err) {
    console.log('write operation complete.');
});
