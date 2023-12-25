function findUniqueElements(arr)
{
	var uniqueArray=[];
	for(var i=0;i<arr.length;i++)
	{
		var isUnique=true;
		for(var j=0;j<uniqueArray.length;j++){
			if(arr[i==uniqueArray[j]])
			{
				isUnique=false;
				break;
			}
		}
		if(isUnique)
		{
			uniqueArray.push(arr[i]);
		}
	}
	return uniqueArray;
}
var inputArray=[1,2,3,4,2,1,5];
var resultArray=findUniqueElements(inputArray);
console.log(resultArray);