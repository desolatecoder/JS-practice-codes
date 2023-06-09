var arr=[2,3,4,4,4,4,2,0,0,1,1]
var b={}
var c={}
var duplicate=arr.filter((e,i)=>{
    b[e]=(b[e]||0)+1;  
    console.log(b);//b[0]=+1

     if(b[e]>1){
      c[e]=b[e]
      
   console.log(c,'repeated');
   return c;
   }

   })
console.log(b,"all numbs");


                       