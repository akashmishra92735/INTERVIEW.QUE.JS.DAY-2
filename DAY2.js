                      

                      //DAY-2 JAVASCRIPT INTERVIEW QUESTOONS
// Q.1 What are objects in javascript? 
//Answers...
//An object is collections of keys values and pairs.
//In javascript Array is alos object.
//In javascript object is a container and we add in this value which is -
//-key value pairs formate.

// Q.2 What are function?
//Function is a block of code and in js we use function three ways.
//Function is reusable.
//(i)Regular function
     function greet() {
    console.log("Hello Akash Regular function");
    }
    greet();

//(ii)Arrow function
        let p=(name)=>{
        console.log("Arrow function "+ name);
        };
        p("Akash");
//(iii)Function Expression
   let ak = function() {
  console.log("Hello from expression");
};
ak();

//Q.3 What is an event loop and call stack.
//Answers...
//Event loop--->
//It is infinite loop.And it is monitrate to that what time stack is free.
//Call stack-->
/* It is a datastructure which is track to that who all function ,when all ,which all 
call in sequence.Who function call in last that is completed and firstly out of stack.
*/

//Q.4 Difference between undefined vs not defined vs NaN.
//Answers...
//Undefined...
//Undefined means a variables can be declare but no value assigned.
let c;
console.log(c);
//Not defined...
//Reference error occured when we try to access the variable that has never 
//-been declared.
console.log(d);
// NaN....
// It means the value is not a number.And we expected to be a number.
let k="abc"/4;
console.log(k);

// Q.5 What are arrow functions?
//Answers...
//Arrow function is short form of function in javascript
const add=(x,y)=>{
        return x+y;
}
console.log(add);

// Q.6 What is the for-in loop in JavaScript? Give its syntax.
//Answers....
// for in loop is used to go through each property(key) of an object one by one.
//Syntax...
for(let key in object){
        //object[key]
}

// Q.7 Explain Local Scope, Block Scope, Functional Scope and 
// Scope Chain in javascript.
//Answers...
//Local Scope...
// A variable declared inside a function can only access that variable-
// -that function.
//Block scope...
// It is used in only block where it is declared.if we declared in {} any varible
//-that is used in only this block.
//Functional Scope..
//In this we can access any where that we declare variable any where does not
//-matter.

// Q.8 What is difference between null and undefined and where to use what?
//Answers...
//Undefined..
// We declare variable but we do not assign value then the error will show
//undefined.
//(i)Variable is declared but not assignment.
//(ii)Function has no return.
//Null...
//We use null when we want to manualy clear or empty value.
//(i)We want a reset value.
//(ii)Missing HTML input.

// Q.9 Write code to explain map and filter in arrays.
//Answers...
//map...
//Map is used we we want to create a new array then we used map method in js
// on the basis of before array.
let arr=[34,45,67,4];
let arr1=arr.map();
console.log(arr1);

//filter..
//filter is used when we want to access some data of array in new array then we
// we used to filter method in javascript.
let fil=[4,5,6,3];
let fil2=fil.filter(5,6);
console.log(fil2);

// Q.10 Given an array of 0's and 1's find out number of 0's.
//Answers...
let ar=[1,0,1,0,1,0,1,0,0,1];
let count=0;
for(let i=0;i<ar.length;i++)
{
   if(ar[i]===0)
      count++;
}
console.log(count);

// Q.11 Given an array of 0's and 1's find out number of 0's.
//Answers..
let array=[22,23,4,5,6,7,];
let even=0;
let odd=0;
for(let i=0;i<array.length;i++)
{
        if(array[i]%2===0)
        {
                even++;
        }
        else{
                odd++;
        }
}
console.log(even);
console.log(odd);

// Q.12 Given a string find out number of vowels.
let str="Akash";
let b="AEIOUaeiou";
let count1=0;
for(let i=0;i<str.length;i++)
{
        if(b.includes(str[i]))
        {
                count1++;
        }
}
console.log(count);

