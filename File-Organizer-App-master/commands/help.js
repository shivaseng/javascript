
function helpfunction(){
    console.log("Your Help Command is Activated 👍...\n");
    console.log("Choose The Valid Command For Your Requirement: 👇");
    console.log(`
    fillo help      ==> for using help command
    fillo tree 'directory_path'     ==> for using tree command in a folder
    fillo organize 'directory_path'     ==> for organizing a particular directory
    `)
}

module.exports={
    HelpKey : helpfunction
};