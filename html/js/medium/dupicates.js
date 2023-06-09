var a=[1,2,3,5,6,1,2,3,11,12,13,5,2]
var b={}

for (let i = 0; i <= a.length; i++) {
    var count=0;
    for (var j = 0; j <= a.length; j++) {
        if (a[j]==a[i]) 
        {
           count++
        }
        
    }
    if (count>=2) {
       b[a[i]]=a[i]
       
        // b.push(a[i])
    }
}     
console.log(Object.values(b))
