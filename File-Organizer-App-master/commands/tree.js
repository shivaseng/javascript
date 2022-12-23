const fs=require('fs');
const path=require('path');

function treefunction(dirname){
    console.log("Your Tree Command is Activated "+ dirname +" 👍...\n");
    
    //if user forgot to enter the path.
    if(dirname==undefined){
        console.log("Please🙏 Enter The Directory Name.");
    }else{
        //checking if path given to us exists or not.
        if(fs.existsSync(dirname)){
            TreeHelper(dirname,0);
            console.log('Tree Is Successfully Generated For This Folder 👍');
        }else{
            console.log("Path Does Not Exists😥.");
        }       
    }
}

function TreeHelper(dirPath,indent){
    //checking if dirPath is for folder or file.
    if(fs.statSync(dirPath).isFile()){
        var fileName=path.basename(dirPath);

        var indentation="";

        for(var i=0;i<indent;i++){
            indentation+="----";
        }
        console.log("|"+indentation+fileName+" 📑 ");
    }else{
        var folderName=path.basename(dirPath);
        var indentation="";

        for(var i=0;i<indent;i++){
            indentation+="----";
        }
        console.log("|"+indentation+folderName+" 📂 ");
        
        var list=fs.readdirSync(dirPath);
        for(var x in list){
            var childPath=path.join(dirPath,list[x]);
            TreeHelper(childPath,indent+1);
        }
    }
}

module.exports={
    TreeKey : treefunction
};