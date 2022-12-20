// Function to check prime number
/*function p() {
			
    var prime = true;
    
    // Getting the value form text
    // field using DOM
    n = document.myform.n.value;
    n = parseInt(n) //remove any floats
    for(i = 2; i <= n; i++)
        if (n % i == 0) {
            prime = false;
            break;
        }
        
        // Check and display alert message
    if (prime == true)
        alert(n + " is prime");
    else
        alert(n + " is not prime");
}


function isPrime(num){
    if(num < 2){
        return false
    }
    //modulus %
    for(let i=2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true
};

const sumOfPrimes = (num = 10) =>{
    let primeNumber = num;
    let sum = 0;
    while (primeNumber >=2){
        if(isPrime(primeNumber)===true){
            sum+=primeNumber;
        }
        primeNumber--;
    }
    return sum;
}

console.log(sumOfPrimes(5));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  

 function lcm (n1, n2){
    //find the gcd of the two numbers
    let min = Math.min(n1, n2);
    while(min >= 2){
        if(n1%min === 0 && n2%min === 0){
            return (n1*n2)/min;
        }
        min--
    }
    return n1*n2;
 }

 let arr = [2, 5]
 let x = Number(arr[0]);
 console.log(x);

 var lowEnd = 1;
var highEnd = 25;
var arr = [];
while(lowEnd <= highEnd){
   arr.push(lowEnd++);
}
 console.log(lcm(15, 18));
 
 function smallestCommons(arr) {
   const big = Math.max(...arr);
   const small = Math.min(...arr);

   let scm = big;
   while(true){
    let isScm = true;
    for(let i = small; i <= big; i++){
        if (isScm % i !== 0){
            isScm = false;
            break;
        }
    }
    if(isScm){
        return scm;
    }else{
        scm++
    }
   }
  }
  
  console.log(smallestCommons([1,5]));*/


  