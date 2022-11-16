//selection sort
function selectionSort(data,length){
    for(let i=0;i<length;i++){
        let lowest = i;
        for(let j=i+1;j<length;j++){
            if(data[j]<data[lowest]){
                lowest = j;
            }
        }
        if(lowest != i){
            //swap
            let tempVal = data[i];
            data[i] = data[lowest];
            data[lowest] = tempVal;
        }
    }
    return data;
}
let data = [20,15,16,90,28,17,60,40,80,95,1]
let length = 0;
for(let i in data){
    length++;
}
let sortedArr = selectionSort(data,length);
console.log(sortedArr);
