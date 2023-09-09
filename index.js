const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('\nHello World');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


var rect = {
  perimeter: (x,y) => (2*(x+y)),
  area: (x,y) => (x*y)
};

function solveRect(l,b){
  console.log("Solving rectangle with l = " + l + "and b = " + b );
  if(l<=0 || b<=0){
    console.log("Rectangle dimanesion shoule be greater than 0");

  }else{
    console.log("Area of rectangle = "+ rect.area(l,b));
    console.log("Perimeter of rectangle = "+ rect.perimeter(l,b));
  }
}