function cubeNumber(number) {
    return Math.pow(number , 3);
}

function sortMaker(arr){
    if(arr[1] < 0 || arr[0] < 0){
        return "Invalid Input";
    }
    else if(arr[0] === arr[1]){
        return "equal";
    }
    else if(arr[1] >=0 && arr[0] >=0){
        if(arr[1]>arr[0]){
            [arr[0],arr[1]] = [arr[1],arr[0]]
        }
        return arr;
    }      
}
function findAddress(obj) {
    if(!obj.street && !obj.house && !obj.society)
        return "__,__,__";
    else if(!obj.street && !obj.house && obj.society)
        return "__,__,"+obj.society;
    else if(obj.street && !obj.house && !obj.society)
        return obj.street+",__,__";
    else if(!obj.street && obj.house && !obj.society)
        return ",__,"+obj.house+",__";
    else if(!obj.street)
        return "__,"+obj.house+","+obj.society; 
    else if(!obj.house)
        return obj.street+",__,"+obj.society;
    else if(!obj.society)
        return obj.street+","+obj.house+",__";
    else
        return obj.street+","+obj.house+","+obj.society;
}
// console.log(findAddress({
//     street: 10,
//     house: "15A",
//     society: "Earth Perfect"
// }));
function canPay(changeArray, totalDue) {
    if(changeArray.length == 0)
        return "Invalid input!";
    let sum=0;
    for(i=0;i<changeArray.length;i++){
        sum+=changeArray[i];
    }
    if(sum >= totalDue)
    return true;
    else if(sum < totalDue)
    return false;
}
function matchFinder(string1, string2) {
    if(typeof string1 !='string' || typeof string2 !='string'){
        return "Invalid Input! Please enter string."
    }
    else if(string1.includes(string2))
        return true;
    else
        return false;
    
}
