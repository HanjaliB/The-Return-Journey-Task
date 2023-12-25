//car object
var car1={
    brand:"Toyota",
    model:"Camry",
    year:2020
};

function mergeCars(carA,carB)
{
    var mergedCar={};
    for(var key in carA){
        if(carA.hasOwnProperty(key))
        mergedCar[key]=carA[key];
    }
    for(var key in carB)
    {
        if(carB.hasOwnProperty(key)){
        mergedCar[key]=carB[key];
    }
    }
    return mergedCar;
}

var car2={
    model:"Corolla",
    color:"Blue"
};

var mergedResult=mergeCars(car1,car2);
console.log(mergedResult);