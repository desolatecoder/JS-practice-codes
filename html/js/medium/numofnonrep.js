var a=[1,2,3,5,6,1,2,3]
var b={}

for (let i = 0; i < a.length; i++) {
    var count=0;
    for (var j = 0; j <a.length; j++) {
        if (a[j]==a[i]) 
        {
           count++
        }
        
    }
    if (count<=1) {
       b[a[i]]=a[i]
       
        
    }
}     
console.log(Object.keys(b).length)
