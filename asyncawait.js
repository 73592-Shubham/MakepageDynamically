console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });
  const getColdDrinks=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('colddrinks'),3000)
  });
  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);
   
  console.log(`Husband:Anything else darling`);
	console.log(`Wife: yes i need a cold drinks`);

   let colddrinks=await getColdDrinks;
   console.log(`added ${colddrinks}`);
   console.log(`wife:we are getting late`);
   console.log(`husband:lets go`)


  
  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');
