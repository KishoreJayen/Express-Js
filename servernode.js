const http = require('http');
const PORT = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('krish.txt', 'utf8', (err, krishData) => {
    if (err) {
      console.error(err);
    }
    
    fs.readFile('start.txt', 'utf8', (err, startData) => {
      if (err) {
        console.error(err);
      }
      res.write(krishData);
      res.write(startData);
      res.end();
    });
  });
});

server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is running on port ' + PORT);
  }
});










