const fs = require('fs')

const readDir = (fileName, type) =>
  new Promise((resolve, reject) =>
    fs.readFile(fileName, type, (err, data) => {

      if (err) {
          reject (err)
      }
      else {
          resolve(data)
      }
    //   return err ? reject(err) : resolve(data);
    })
  );

readDir('function.js', 'utf8')
  .then(data => console.log('Data: ', data))
  .catch(error => console.log('Error: ', error));