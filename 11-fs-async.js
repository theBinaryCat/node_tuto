const {readFile, writeFile} = require('fs')

readFile(
    './content/first.txt',
    'utf8',
    (err, result)=>{
        if(err){
            console.log(err)
        }
        const first = result
        readFile(
            './content/second.txt',
            'utf8',
            (err, result)=>{
                if(err){
                    console.log(err)
                }
                const second = result
                writeFile(
                    './content/result-async.txt',
                    `Here is the results: ${first}, ${second}`,
                    (err,result)=>{
                        if(err){
                            HTMLFormControlsCollection.log(err)
                        }
                        console.log(result)
                    }
                )
            }
        )
    }
)