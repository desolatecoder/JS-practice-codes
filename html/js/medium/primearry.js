var a=[1,2,3,4,5,6,7,8,9,10];

for(let i=0;i<=a.length;i++){
    let count=0;
    for (let j = 1; j<=a.length; j++){
      if (a[i]%j==0) {
        count++;
        
      }
        }
        if (count==2) {
            console.log(a[i]+" is prime number")
            
        }

}