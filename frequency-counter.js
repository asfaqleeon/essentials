var arr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];

var map = {}

for(let i=0;i<arr.length;i++){
    if(map[arr[i]] == undefined){
        map[arr[i]] = 1;
    } else {
        let temp = map[arr[i]];
        map[arr[i]] = temp+1;
    }
    
}

//console.log(map);
let keys = Object.keys(map);

for(let i=0;i<keys.length;i++){
    console.log(keys[i]+' : '+map[keys[i]]);
}

