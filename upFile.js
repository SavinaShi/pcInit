const OSS = require("ali-oss");
const fs = require("fs");
let client = new OSS({
  accessKeyId: "LTAI4GAKdoHQPPwy5jRKCCoU",
  accessKeySecret: "aJF0sKoVGasyG78p2ZOyDg9k1bSEMS",
  bucket: "starrai",
  region: "oss-cn-hangzhou",
  endpoint: 'oss-cn-shanghai.aliyuncs.com'
});

const fileName = "./dist/images/";
const files = fs.readdirSync(fileName);

async function put(a, b) {
  try {
    await client.put(a, b);
  } catch (e) {
    // console.log(e);
  }
}
console.log(files, 'files')
files.forEach(item => {
  put(`living/images/${item}`, `${fileName}${item}`);
})

