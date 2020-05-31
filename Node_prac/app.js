//function sayHello(name){
  //  console.log('Hello'+name);
//}

//sayHello('Mosh'); 


//var msg='vihita';
//console.log(global.msg);
//window.msg;
//global.console.log(global.msg);
//console.log(module);


//const logger=require('./logger');
//logger.log('input to the module');

//const path=require('path');
//var pathobj=path.parse(__filename);
//console.log(pathobj.name);


// const fs= require('fs');
// const files=fs.readdirSync('./');
// console.log(files);



//const EventEmitter = require('events');
//const emitter = new EventEmitter();


//emitter.on('Logging',(e)=> {
//    console.log(e);
//});

//emitter.emit('Logging',{data:'event has been logged'});



// const EventEmitter = require('events');
// const Logger =require('./logger');
// const logger= new Logger();

// logger.on('Logging',(e)=> {
//     console.log(e);
// });

// logger.log('message');



const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);
console.log('listening on port 3000....');
