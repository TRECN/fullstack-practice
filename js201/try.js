/**
 * try{
 * 
 * 
 * }catch(error){
 *  console.log(worn);
 * }finally{
 * 
 * }
 */

try{
    throw "the error"
    console.log("execute this line")//this line is not executed
}catch(error){
    console.log("error is: ",error)
}finally{

}
console.log("show me!!")

const num=10;
try{
    num+=10;
}catch(error){
    console.warn("error is",error);
}finally{
    console.log(num)
}