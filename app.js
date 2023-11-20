//? Exercise 8800

// function exc8800(){
//     let value='Hello, Python!';
//     return value;
// }
// console.log(exc8800());

//? Exercise 8801

// let valueInput=prompt('ededi daxil edin')
//     let value=parseInt(valueInput);
// function exc8801(){
//         value=value+1
//         return value;
// }
// console.log(exc8801());

//? Exercise 8802

// let valueInput=prompt('ededi daxil edin')
//     let value=parseInt(valueInput);
// function exc8802(){
//         value=value-1
//         return value;
// }
// console.log(exc8802());

//? Exercise 8803

// let valueInput=prompt('Lenanin nomresini daxil edin')
// let LenaNum=parseInt(valueInput);
// function exc8803(){
//     let studentNum=LenaNum+1;
//     return studentNum;
// }
// console.log(exc8803());

//? Exercise 8804

// function exc8804(){
//     let x=12;
//     let y=9;
//     let sum=x+y;
//     let result=` ${x} \n \n ${y} \n \n cem : ${sum}`;
//     return result;
// }
// console.log(exc8804());

//? Exercise 8805

// function exc8805(){
//     let x=12;
//     let y=9;
//     let sum=x+y;
//     let result=`verilen ededler: ${x}, ${y}  ---------- cem : ${sum}`;
//     return result;
// }
// console.log(exc8805());

//? Exercise 8806

// function exc8806(){
//     let girlsNum=parseInt(prompt('qizlarin sayini daxil edin'))
//     let boysNum=parseInt(prompt('oglanlarin sayini daxil edin'))
//     let sum=girlsNum+boysNum;
//     return sum;
// }
// console.log(exc8806());

//? Exercise 8807

// function exc8807(){
//     let num=parseInt(prompt('ededi daxil edin'))
//     if (num==0){
//         return 0
//     }
//     else{
//         num= -1*num;
//         return num;
//     }
// }
// console.log(exc8807());

//? Exercise 8808

// function exc8808(){
//     let x=21;
//     let y=9;
//     let z=x-y;
//     let result=` ${x} \n \n ${y} \n \n ferq : ${z}`;
//     return result;
// }
// console.log(exc8808());

//? Exercise 8809

// function exc8809(){
//     let x=12;
//     let y=9;
//     let z=x-y;
//     let result=`verilen ededler: ${x}  ${y}    ----------     ferq : ${z}`;
//     return result;
// }
// console.log(exc8809());

//? Exercise 8810 

// function exc8810(){
//     let a=13, b=9, c=5;
//     sagirdlerinSayi=(a+b)-c;
//     let result= ` ${a}   ${b}   ${c}   ----   Sagirdlerin sayi : ${sagirdlerinSayi}`;
//     return result;
// }
// console.log(exc8810());

//? Exercise 8811

// function exc8811(){
//     let a=parseInt(prompt('1-ci ededi daxil edin'))
//     let b=parseInt(prompt('2-ci ededi daxil edin'))
//     let product=a*b;
//     return product;
// }
// console.log(exc8811());

//? Exercise 8812

// let recWidth=parseInt(prompt('eni daxil edin'))
// let recLength=parseInt(prompt('uzunlugu daxil edin'))
// function exc8812(){
//     let per= 2*(recWidth+recLength);
//     let area= (recWidth*recLength) ;
//     let result=`perimetr : ${per}. Sahe : ${area}`;
//     return  result ;
// }
// console.log(exc8812());

//? Exercise 8813

// let recWidth=parseInt(prompt('eni daxil edin'))
// let recLength=parseInt(prompt('uzunlugu daxil edin'))
// let recHight=parseInt(prompt('hundurluyu daxil edin'))
// function exc8813(){
//     let sahe= 2*(recWidth*recLength+recWidth*recHight+recLength*recHight);
//     let hecm= (recWidth*recLength*recHight) ;
//     let result=`sethin sahesi : ${sahe}. hecm : ${hecm}`;
//     return  result ;
// }
// console.log(exc8813());

//? Exercise 8814

// let squareSide=parseInt(prompt('terefi daxil edin'))
// function exc8814(){
//     let per= 4*squareSide;
//     let area= Math.pow(squareSide,2) ;
//     let result=`perimetr : ${per}. Sahe : ${area}`;
//     return  result ;
// }
// console.log(exc8814());

//? Exercise 8815

// let squareSide=parseInt(prompt('terefi daxil edin'))
// function exc8815(){
//     let sahe= 6*(Math.pow(squareSide,2));
//     let hecm= Math.pow(squareSide,3);
//     let result=`Sethin sahesi : ${sahe}. Hecm : ${hecm}`;
//     return  result ;
// }
// console.log(exc8815());

//? Exercise 8816

// let x=parseInt(prompt('ededi daxil edin'))
// let y=parseInt(prompt('quvveti daxil edin'))
// function exc8816(){
//     let numPow=Math.pow(x,y);
//     return numPow;
// }
// console.log(exc8816());


//? Exercise 8823
// let a='m' 
// let b= 'menim anam'
// function myFunction(a, b) {
//     return b.split( '').length-1
//   }
// console.log(myFunction(a,b));
//? Exercise 8824

// let x=parseInt(prompt('1ci ededi daxil edin'))
// let y=parseInt(prompt('2ci ededi daxil edin'))
// function exc8824(){
//     let middleNum= (x+y)/2;
//     return middleNum;
// }
// console.log(exc8824());

//? Exercise 8825

// function exc8825(){
//     let valueInput=prompt('Ededi daxil edin')
//     let x =parseInt(valueInput);
//     let y=x;
//     y=Math.pow(x,3)-5*Math.pow(x,2) / 7 + 9 * x - 3 / x + 1;
//     return y.toFixed(3);
// }
// console.log(exc8825());