/**
 * try{
 * 
 * 
 * }catch(error){
 *  console.log(worn);
 * }
 */

try{
    throw "the error"
    console.log("execute this line")//this line is not executed
}catch(error){
    console.log("error is: ",error)
}
console.log("show me!!")