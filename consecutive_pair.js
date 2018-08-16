//first sort the array

function consecutive_pair(){
    let arr = [5,10,7];

    arr.sort(function(a,b){return a-b;})

    for(let i=0;i<arr.length;i++){
        console.log(arr[i]+' : '+arr[i+1]);
    }
}

consecutive_pair();