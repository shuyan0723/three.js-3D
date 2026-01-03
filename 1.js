let arr=[1,[2,[3,4]]];
function flatten(arr){
    let result=[];
  arr.forEach((item)=>{
    if(Array.isArray(item)){
        result.push(...flatten(item))
    } else{
        result.push(item)
    }
  })
    return result;
}

console.log(flatten(arr));
