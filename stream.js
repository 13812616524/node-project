const fs = require('fs');

// 打开一个流:
// const rs = fs.createReadStream('./sample.txt', 'utf-8');
// rs.on('data', (chunk) => {
//   console.log('DATA:')
//   console.log(chunk);
// });

// rs.on('end', () => {
//   console.log('END');
// });

// rs.on('error', (err) => {
//   console.log('ERROR: ' + err);
// });

//写入文件
// const ws1 = fs.createWriteStream('./output1.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END.');
// ws1.end();

// const ws2 = fs.createWriteStream('./output2.txt');
// ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
// ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end();

//复制文件
var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);