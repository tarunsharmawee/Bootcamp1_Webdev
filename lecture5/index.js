import { rejects } from "assert"
import { promises } from "dns"
import fs from "fs"
import { resolve } from "path"

function fsReadFilePromise(filename, encoding){
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err)
                reject(`are baap re error aa giya`)
            else
                resolve(data)
        })
    })
} 

async function main () {
    let file1Content = await fsReadFilePromise("a.txt", "utf-8")                                                                                                                                       
    let file2Content = await fsReadFilePromise("b.txt", "utf-8")                                                                                                                                       
    let file3Content = await fsReadFilePromise("c.txt", "utf-8")    
    
    console.log(file1Content)
    console.log(file2Content)
    console.log(file3Content)

}

main();

// // ==================================>


// function setTimeoutPromisified(delay){
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, delay)
//    })
// }
// setTimeoutPromisified(1000)
//     .then(()=> {
//         console.log("im a second late mate!")
//     })
 
