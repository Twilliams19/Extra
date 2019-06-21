"use strict"

var i=0

 for (i; i < 81; i++) {
     console.log(i);
 }

  while (i < 80) {i++,
      console.log(i++);
     
  }

  while(i < 101){
      if (i % 2 === 0 && i % 4){
          console.log("fizzbuzz");
      } 
      else if (i % 2 === 0){
          console.log("fizz");
      }
      else if (i % 4 === 0){
          console.log("buzz");
      }
      i++;
  }


