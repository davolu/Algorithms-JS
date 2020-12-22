insertionSort = (arr) =>{
// loop through the array  
for (i=0; i< arr.length; i++){
//for as long as index n is greater than n+1...
while( arr[i] > arr[i+1]){
//swap items. 
let temp_ = arr[i];
let temp_2 =  arr[i+1];
arr[i] = temp_2;
arr[i+1] = temp_;
//reset.
i=0;
 }
 }
 return arr;
}
let test = [30,20,50,10,40,60];
console.log(insertionSort(test));
