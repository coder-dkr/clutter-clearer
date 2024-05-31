import fs from 'fs/promises'
import fsorg from 'fs'
import path from 'path'

const basepath = "/your dirname/"

let files = await fs.readdir(basepath)
console.log(files)

for (const item of files) {
    let ext =  item.split(".")[(item.split(".").length) - 1]
    
    if(ext != "js" && ext != "json" && (item.split(".").length > 1)){
        console.log(ext)

        if(fsorg.existsSync(ext)){
            fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
        }



    }
    
}