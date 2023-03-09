const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result-sync.text',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
    )


