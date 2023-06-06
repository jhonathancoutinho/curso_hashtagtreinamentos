console.log (1);
const result = setTimeout(
    () => write2OnConsoleAndReturnString((message) =>{
        console.log (message);
        console.log (message + ' - menssagem escrita pela segunda vez.');
    }), 2000);

function write2OnConsoleAndReturnString (callbackFunction) {
    console.log(2);
    callbackFunction ('Procedure Completed');

}