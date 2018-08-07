function reverse(d){
    var pow=0;
    var arr = [];
    while(true){
        if(d<=1) break;
        //console.log(Math.floor(d%10));
        arr.push(Math.floor(d%10));
        d=d/10;
        pow++;
    }
    
    //console.log(Math.pow(10,3));
    
    
    let size=pow;
    pow=pow-1;
    let sum=0;
    for(i=0;i<size;i++){
        let temp =Math.pow(10,pow)*arr[i];
        sum+=temp;
        pow--;
    }
    
    console.log(sum);
    return sum;
}
