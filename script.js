//LOOP

//for (начало; условие; шаг) {
    // ... тело цикла ...
//}


// for (let i = 0; i < 10; i++){
//
//     console.log(i)
// }



// Пример цикла for для перебора массива
// let users = ["вася", "pete", "john", "mary"];
//
// for (let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }



//Прерывание цикла

// let users = ["вася", "pete", "john", "mary"];
//
//  for (let i = 0; i < users.length; i++){
//      if (users[i] === "pete") break;
//          console.log(users[i])
//
//
//  }

//Переход к следующей итерации
//
// let users = ["вася", "pete", "john", "mary"];
//
//  for (let i = 0; i < users.length; i++){
//      if (users[i] === "pete") continue;
//          console.log(users[i])
//  }



//for ... of

// let users = ["вася", "pete", "john", "mary"];
//
// for (let user of users){
//     console.log(user)
// }


// Прерывание цикла

 // let users = ["вася", "pete", "john", "mary"];
 //
 // for (let user of users){
 //     if (user === 'john') break;
 //    console.log(user)
 // }


//Переход к следующей итерации

 // let users = ["вася", "pete", "john", "mary"];
 //
 // for (let user of users){
 //     if (user === 'john') continue;
 //    console.log(user)
 // }


//цикл while

// let users = ["вася", "pete", "john", "mary"];
//
// let i = 0;
//
// while (i < users.length){
//     console.log(users[i])
//     i++
// }

//цикл do ... while
// let users = ["вася", "pete", "john", "mary"];
//
// let i = 0;
// do {
//     console.log(users[i])
//     i++
// }
//
// while (i < users.length)

// let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//
// for (let i = 0; i <= nums.length; i++){
//     if (nums[i] % 2 === 0){
//         console.log(nums[i]);
//     }
// }

// let users = ['Mary','John', 'Kanybek','Maisalbek','Sapara','Kapar','Japar','Esenali','Sadyk','Manas'];
// users.sort(function(a, b) {
//     return b.length - a.length;
// })
// console.log(users);

// let users = ['Mary','John', 'Kanybek','Maisalbek','Sapara','Kapar','Japar','Esenali','Sadyk','Manas'];
// let longestWord = 0;
//
// for (let i = 0; i < users.length; i++){
//     if (users[i].length > longestWord){
//         console.log(longestWord = users[i].length)  ;
//     }
//     console.log(longestWord.length)
// }

// let users = ['Mary','John','Kanybek','Maisalbek','Sapara','Kapar','Japar','Esenali','Sadyk','Manas','Vanka'];
// let user2 = []
//
// for (let i = 0; i < users.length; i++){
//    user2 = users.splice(0,1)
//     document.write(`<h3>Удаляю пользователя ${user2}</h3>`);
// }




//PALINDROME


//
// let myArray = [ '12321' ];
// let str = myArray.join().split('');
// let isPalindrome = true;
//
// for (let i = 0; i < str.length; i++){
//     const elements = str[i];
//
//     if (elements !== str [str.length - 1 - i]){
//         isPalindrome = false;
//     }
// }
//
// console.log(isPalindrome)


//tablitsa umnojeniya

// for (let i = 1; i <= 9; i++){
//     for (let j = 1; j <= 10; j++){
//         document.write(`${i} * ${j} = ${(i*j)} <br>`)
//     }
// }
