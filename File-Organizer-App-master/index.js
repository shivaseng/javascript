#!/usr/bin/env node

var inputArr=process.argv.slice(2);

const fs=require('fs');
const path=require('path');

const helpObj=require('./commands/help');
const treeObj=require('./commands/tree');
const organizeObj=require('./commands/organize');

// console.log(inputArr);

//options that are possible :-
//fillo help
//fillo tree 'directory_path'
//fillo organize 'directory_path'

var command=inputArr[0];


switch(command){
    case 'help':{
        helpObj.HelpKey();
        break;
    }
    case 'tree':{
        var dirPath=inputArr[1];
        //when Path contains spaces in folder name. 
        for(var i=2;i<inputArr.length;i++){
            dirPath+=" "+inputArr[i];
        }
        console.log(dirPath);
        treeObj.TreeKey(dirPath);
        break;
    }case 'organize':{
        var dirPath=inputArr[1];
        //when Path contains spaces in folder name. 
        for(var i=2;i<inputArr.length;i++){
            dirPath+=" "+inputArr[i];
        }
        organizeObj.OrganizeKey(dirPath);
        break;
    }
    default:{
        console.log("🙏 Please Input A Valid Command");
        console.log("Type 'fillo help' For Going To Help Menu 😊")
    }
}




