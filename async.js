console.log('person 1:shows ticket');
console.log('person2:shows ticket');
const promiseWifeBringsTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000);
});
const getPopCorn=promiseWifeBringsTicket.then((t)=>{
    console.log('wife:i have the Tickets');
    console.log('husband:we should go in');
    console.log('wife:no i am hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});
const getButterPopCorn=getPopCorn.then((t)=>{
    console.log('husband:i got some popsorn')
    console.log('husband:we should go in');
    console.log('wife:no i need butter on my popcorn');
    return new Promise((resolve,reject)=>resolve(`${t} butter`));
});



getButterPopCorn.then((t)=>console.log(t));
console.log('person4:shows ticket');
console.log('person5:shows ticket')
