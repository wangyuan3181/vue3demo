var fs = require('fs')
let readline = require('readline')

let versionPrefix = '0.0.0.' // 可据自身酌情更改

function fsWrite(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, { 'flag': 'a' },
      function(err) {
        if (err) {
          console.log('写入内容出错')
          reject(err)
        } else {
          console.log('写入内容成功')
          resolve(err)
        }
      })
  })
}

function fsWrite2(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, 'utf-8',
      function(err) {
        if (err) {
          console.log('写入内容出错')
          reject(err)
        } else {
          console.log('写入内容成功')
          resolve(err)
        }
      })
  })
}

let rl = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
})

//设置询问事件
function lcQuestion(title) {
  return new Promise((resolve, reject) => {
    rl.question(title, answer => {
      resolve(`${versionPrefix + answer}`)
    })
  })
}
// 问答
async function createPackage() {
  let packingtime = new Date().toLocaleString()
  var version = await lcQuestion('请您输入版本号？' + versionPrefix)
  let content2 = `{ "version": "${version}" }`
  let content = ` 版本信息: ${version}   打包时间: ${packingtime}\n`
  // await fsWrite2('./pc/static/version.json', content2)
  await fsWrite('./public/version.txt', content)
  this.version = version
  rl.close() // 写完关闭

}

createPackage()


rl.on('close', function() {
  process.exit(0)
})