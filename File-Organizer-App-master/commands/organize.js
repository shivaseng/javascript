const fs=require('fs');
const path=require('path');
var utilities=require('./utility.js')

var types=utilities.utils.types;

function organizefunction(dirname){
    console.log("Your Organize Command is Activated "+ dirname +" 👍 ...\n");
    
    //1. first i am going to create a organized_directory named folder.
    //2. secondly i am going to make a path that will end up in organize_directory.
    //3. then i will make various folder such as images, pdf, doc, excel, applications
    //4. then i will identify the file in which category it belongs.
    //5. according to that we will transfer it that category folder.

    //checking if path entered is correct or not.
    if(dirname==undefined){
        console.log("Please🙏 Enter The Directory Name.");
    }else{
        if(fs.existsSync(dirname)){
            let dirPath=path.join(dirname,'organized_directory');

            //checking if organized_directory folder is not previously created
            if(!fs.existsSync(dirPath)){
                fs.mkdirSync(dirPath);
            }

            organizeHelper(dirPath,dirname);

            console.log("Your Files are Successfully Organized 👍");
        }else{
            console.log("Path Does Not Exists😥.");
        }       
    }

}

function organizeHelper(dirPath,src){
    //getting all the files list
    var files=fs.readdirSync(src);
        // console.log("heyy",files);

    //interating over each file and moving it to its correct position.
    for(var x in files){
        var filePath=path.join(src,files[x]);

        //checking if it is a file.
        if(fs.lstatSync(filePath).isFile()){      
            //this will bring us the extension of the file.
            var type=getCategory(filePath);
            
            if(type != 'other'){
                sendFile(type,filePath,dirPath);
            }
        }      
    }
} 

function getCategory(filePath){
    var extension=path.extname(filePath);
    extension=extension.toLowerCase();

    //console.log(extension);
    for(filetype in types){
        //traversing in all extensions possible for a particular type.

        for(var index in types[filetype]){
            //checking if type[index]==extension

            if(types[filetype][index]== extension){
                return filetype;
            }
        }
    }
    return "other";
}

function sendFile(type, filePath,dirPath){
    var Typefolder=path.join(dirPath,type);

    //making the type folder if it is not already present.
    if(!fs.existsSync(Typefolder)){
        fs.mkdirSync(Typefolder);
    }

    var FileName=path.basename(filePath);
    var newFilePath=path.join(Typefolder,FileName);
    fs.copyFileSync(filePath,newFilePath);

    //for moving you also need to delete it from the original source folder.
    //fs.unlinkSync(filePath);
}

module.exports={
    OrganizeKey : organizefunction
};