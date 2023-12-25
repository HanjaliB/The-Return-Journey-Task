function findCommonElements(arr1,arr2){
    var commonArray=[];
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                commonArray.push(arr1[i]);
                break;
            }
        }
    }
    return commonArray;
}

var array1=[1,2,3,4,5];
var array2=[3,4,5,6,7];
var commonElements=findCommonElements(array1,array2);
console.log(commonElements);