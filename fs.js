const fs = require('fs');

// fs.readFile('./sample.txt', 'utf-8', (err,data)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

// fs.readFile('./sample.jpeg', (err,data)=>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//     console.log(data.length + 'bytes');
//     const text = data.toString('utf-8');
//     console.log(text);
//     var buf = Buffer.from(text, 'utf-8');
//     console.log(buf);
//   }
// })

// 写文件
// const data = 'Hello, Node.js';
// fs.writeFile('./output.txt', data, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok.');
//     }
// });

fs.stat('./sample.txt', function (err, stat) {
  if (err) {
      console.log(err);
  } else {
      // 是否是文件:
      console.log('isFile: ' + stat.isFile());
      // 是否是目录:
      console.log('isDirectory: ' + stat.isDirectory());
      if (stat.isFile()) {
          // 文件大小:
          console.log('size: ' + stat.size);
          // 创建时间, Date对象:
          console.log('birth time: ' + stat.birthtime);
          // 修改时间, Date对象:
          console.log('modified time: ' + stat.mtime);
      }
  }
});