

console.log('****************1.a Print odd numbers in an array****************')
let arry = [1,2,10,21,13,50,15,4,31,7];
let odd =[];
arry.forEach((val) =>{
  if(val%2 == 1){
    odd.push(val);
  }
});
console.log(odd)


console.log('****************1.b Convert all the strings to title caps in a string array****************')

var str = "Convert all the strings to title caps in a string array";
var newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);


console.log('****************1.c Sum of all numbers in an array****************')

var numbers = [1,2,8,6,5,7,9,11,13,26,24,25];
var sum = 0;
numbers.forEach((i)=>{
    sum = sum + i;
});
console.log(sum);


console.log('****************1.d Return all the prime numbers in an array****************')

var numArray = [1,2,8,6,5,7,9,11,13,26,24,25];

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);



console.log('****************1.e Return all the palindromes in an array****************')


var arr = ['carecar', 1344, 12321, 'did', 'cannot'];
var isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      } else {
         return false;
      }
   }
   return true;
};
var findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));


console.log('****************1.f Return median of two sorted arrays of the same size****************');


function getMedian(ar1, ar2, n)
{
	var i = 0; 
	var j = 0; 
	var count;
	var m1 = -1, m2 = -1;

	
	for (count = 0; count <= n; count++)
	{
		
		if (i == n)
		{
			m1 = m2;
			m2 = ar2[0];
			break;
		}
		else if (j == n)
		{
			m1 = m2;
			m2 = ar1[0];
			break;
		}
		
		if (ar1[i] <= ar2[j])
		{
			m1 = m2; 
			m2 = ar1[i];
			i++;
		}
		else
		{
			m1 = m2; 
			m2 = ar2[j];
			j++;
		}
	}

	return (m1 + m2)/2;
}
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2){
  console.log(getMedian(ar1, ar2, n1));
	
}

else{
  console.log('given array is not equal');
}


console.log('****************1.g Remove duplicates from an array****************')

var a = ["Dhamo", "Dhamo", "Karthi",1,2,1,5,6,8,5,4]
uniqueArray = a.filter(function(item, pos) {
    return a.indexOf(item) == pos;
})
console.log(uniqueArray)



console.log('****************1.h Rotate an array by k times****************')

// K = no of time to rotate, a= array, n= length of array
function RightRotate(a, n, k)
{
	k = k % n;

	for (let i = 0; i < n; i++) {
		if (i < k) {
			let ans1 = [];
			let ans = a[n + i - k] + " ";
			console.log(ans);
		}
		else {
			let ans = (a[i - k]) + " " ;
			console.log(ans);
		}
	};
}
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
RightRotate(Array, N, K);


console.log('****************2.a Print odd numbers in an array****************')

var a = [1,2,8,6,5,7,9,11,13,26,24,25];
oddNumbers = [];
a.forEach((i) =>{
        if(i%2 != 0){
        oddNumbers.push(i);      
    }   
});
console.log(oddNumbers) 



console.log('****************2.b Convert all the strings to title caps in a string array****************')

var str = "Convert all the strings to title caps in a string array";
var newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);


console.log('****************2.c Sum of all numbers in an array****************')

var numbers = [1,2,8,6,5,7,9,11,13,26,24,25];
var sum = 0;
numbers.forEach((i)=>{
    sum = sum + i;
});
console.log(sum);


console.log('****************2.d Return all the prime numbers in an array****************')

var numArray = [1,2,8,6,5,7,9,11,13,26,24,25];
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);



console.log('****************2.e Return all the palindromes in an array****************')

var arr = ['carecar', 1344, 12321, 'did', 'cannot'];
var isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      } else {
         return false;
      }
   }
   return true;
};
var findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));



console.log('****************3.a Print odd numbers in an array****************')
let Arry = [1,2,10,21,13,50,15,4,31,7];
let Odd =[];
arry.forEach((val) =>{
  if(val%2 == 1){
    Odd.push(val);
  }
});
console.log(odd)


console.log('****************3.b Convert all the strings to title caps in a string array****************')

var str = "Convert all the strings to title caps in a string array";
var newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);


console.log('****************3.c Sum of all numbers in an array****************')

var numbers = [1,2,8,6,5,7,9,11,13,26,24,25];
var sum = 0;
numbers.forEach((i)=>{
    sum = sum + i;
});
console.log(sum);


console.log('****************3.d Return all the prime numbers in an array****************')

var numArray = [1,2,8,6,5,7,9,11,13,26,24,25];

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);



console.log('****************3.e Return all the palindromes in an array****************')


var arr = ['carecar', 1344, 12321, 'did', 'cannot'];
var isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      } else {
         return false;
      }
   }
   return true;
};
var findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));