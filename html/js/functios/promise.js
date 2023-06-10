

var promise = new Promise((cart, reject) => {
    orderid=1
    if(orderid==1){
        cart(orderid)
    }else{
        reject("some error api 1")
    }
})

promise.then((orderid) => {
    console.log('call payment api');
	console.log(orderid);

}, (error) => {
console.log(error); })

promise.then((orderid)=>{
    console.log(orderid)
}
,(error)=>{   
    console.log(error);
})












const firstPromise = () => {
    return new Promise((resolve, reject) => {
      // Asynchronous operation
      setTimeout(() => {
        console.log('First promise resolved');
        resolve('First result');
      }, 1000);
    });
  };
  
  const secondPromise = (result) => {
    return new Promise((resolve, reject) => {
      // Asynchronous operation
      setTimeout(() => {
        console.log('Second promise resolved');
        resolve(result + ' - Second result');
      }, 1000);
    });
  };
  
  const thirdPromise = (result) => {
    return new Promise((resolve, reject) => {
      // Asynchronous operation
      setTimeout(() => {
        console.log('Third promise resolved');
        resolve(result + ' - Third result');
      }, 1000);
    });
  };
  
  firstPromise()
    .then(result => secondPromise(result))
    .then(result => thirdPromise(result))
    .then(finalResult => {
      console.log('Final result:', finalResult);
    })
    .catch(error => {
      console.error('Error:', error);
    });


    const cartpromise= new Promise((resolve,reject)=>{
        let order='succe'
        if(order=='success'){
            resolve('succeed')
        }
        else{
            reject('error in success')
        }
    }
    ).then((a)=>{console.log(a)},
    (error)=>{console.log(error);})

const promise=new Promise((resolve,reject)=>{}
 //logic

).then((a)=>(callbackfunction),
(error)=>"console.log(error);")


const promise1 =new Promise((resolve,reject)=> resolve() ,reject()).then((a)=>{callbackfunction},(error)=>console.log('error'))
const promis2=new Promise((resolve,reject)=>{resolve() ,reject()}).then((a)=>{(callbackfunction)},(error)=>console.log(error))



    
  



