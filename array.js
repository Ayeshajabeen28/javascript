

// const filters scores.filter((score) => {
//     return score >20;
// });

// console.log(scores);

// const users =[
//     {name : 'ayesha' , premium:true},
//     {name : 'jabeen' , premium:false},
//     {name : 'nagma' , premium:false},
//     {name : 'salman' , premium:true},
//     {name : 'amaan' , premium:true},

// ];

// const premiumUsers = users.filter(user =>{
//     return  user.premium;
// });

// console.log(premiumUsers);



// map method


// const salaprices = prices.map((price) =>return price /2;);
// console.log(salaprices);


// cz
// const salesproducts = productconst prices = [10, 30, 15, 25, 50, 40, 5];s.map((product) => {
//     if(product.price >30){
//         return{name:product.name,price:product.price/2}

//     }else{
//         return product;
//     }
// });

// console.log(salesproducts);



//reduce method

// const scores = [10, 30, 60, 40, 50, 90, 40, 70];

// const result = scores.reduce((acc,curr) =>{
//     if(curr >50){
//         acc++;

//     }
//     return acc;

// },0);

// console.log(result);
// const scores = [
//     {player:'mario',score:50},
//     {player:'ayesha',score:30},
//     {player:'nagma',score:70},
//     {player:'amaan',score:60},
//     {player:'mario',score:50},
//     {player:'yesha',score:30},
//     {player:'',score:70},
//     {player:'amaan',score:60},
//     {player:'mario',score:50},
//     {player:'ayesha',score:30},
//     {player:'nagma',score:70},
//     {player:'amaan',score:60}, 
//     {player:'mario',score:50},
//     {player:'yesha',score:30},
//     {player:'nagma',score:70},
//     {player:'amaan',score:60},
// ];

// const mariototal = scores.reduce((acc,curr) =>{
//     if(curr.player==='mario'){
//         acc+=curr.score;
//     }
//     return acc
// },0);
// console.log(mariototal);


//e