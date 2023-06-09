
function sumOfNumbs(a) {
    let sums=0
    for (let i = 0; i <= a.length-1; i++) {
      sums+=a[i]
        
    }
return sums;
}
var fun=sumOfNumbs([1,3,4,2,1,4,5,6,7,5,11,9,6,8,10,5])
console.log(fun);

 //i'm anonymous fun
 let x= function (){
    console.log("i'm anonymous fun");
 };
 x();

//anonymous self executing fun
 (function (){
    console.log('heloo im anonymous self executing fun')
 })()
  

 //call back function
 function callBack(num,callMes){
    num++
    console.log(num)
    callMes
 }

callBack(1,callMe())
 function callMe(){
    console.log('im callme callbackfun')
 }


 // call back
 function parentFun(callback){
    console.log('parent fun')
    callback
 }
 parentFun(callbackZ())

 function callbackZ(){
    console.log('im from child call back')
 }


 //arrow funs es6
 var arrowfun=(a)=>(a++)
 console.log(arrowfun(1));


 //direct way
var arr=[1,2,3,4,2]
var evennum=arr.map((e,i)=>{
return e*2
}
)


console.log(evennum);


//another way
function evennumlogic(x){
   return x*2

}
var evennumZ=arr.map(evennumlogic)
console.log(evennumZ);


var sumzall=arr.map((e)=>e*2).filter((e)=>e>=4).sort((a,b)=>b-a).reduce((a,b)=>a+b)


       
