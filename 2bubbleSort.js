function bubbleSort(data,sizeOfarray){
    for(let i = 0;i<sizeOfarray;i++){
        for(let j=0;j<sizeOfarray-i;j++){
            if(data[j]>data[j+1]){
                var temp = data[j];
                data[j] = data[j+1];//10,5,5,1,60
                data[j+1] = temp;//10,5,30
            }
        }
    }
}
function arraySize(arr){
    let sizeOfarray = 0;
    for(let i in arr){
        sizeOfarray++;
    }
    return sizeOfarray;

}
let mydata = [10,30,5,1,6,80,90,11];//7
let sizeOfarray = arraySize(mydata);
console.log("Original Array: ");
console.log(mydata);
let sortedArray = bubbleSort(data,sizeOfarray);
console.log("Our sorted Array: ");
console.log(sortedArray);
