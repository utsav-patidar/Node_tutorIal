// console.log("Hello");
// const fs=require('fs')
// fs.writeFileSync("index.html","Hello world")//it is used to create a new file
// console.log("hello",__dirname)//it is used to know current file path
// console.log("hello",__filename)//it is used to know current file name
const http=require('http')
//req and resp not require same name you can use any parameter as name
http.createServer((req,resp)=>{
     resp.write("<h2>Hello world i m utsav</h2>");//it is used to write something on server
     resp.end();// it must always end the resp end
}).listen(4000);// in which port you run your server
console.log("Hello");