function create0rder( carz,funz){
    var orderid=carz.orderid
funz(orderid,function proceddpayment(orderid){})
    }
    var cart={orderid:1,produtname:'sunscreen'}
    
    create0rder(cart,function(id,proceddpayment){
        console.log(id);
        console.log('orderid'); proceddpayment(id) })


    //callbackhell
    // callBackhell(result,function(result,prod){
    //        prod(result1,function(result1,prod1){
    //             prod1(result2,function(result2,prod2){
    //             console.log('allcalled');
    //         })
    //     })
    // })
    