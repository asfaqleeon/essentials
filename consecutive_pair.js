//first sort the array

function consecutive_pair(){
    let arr = [5,10,7];

    arr.sort(function(a,b){return a-b;})

    let n = arr.length;

    for(let i=0;i<n-1;i++){
        console.log(arr[i]+' : '+arr[i+1]);
    }
}

consecutive_pair();