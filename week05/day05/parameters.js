//  "http://localhost:3000/add?num1=5&num2=3"

function parameters(url){
    var readKeys;
    var readValues;
    var keyStart, keyEnd;
    var valueStart , valueEnd;
    var valuesArray = [];
    var keysArray = [];
    var parametersObject = {};

    for(var i = 0; i<url.length ; i++){
        var char = url[i];

        if(char == "?" || char == "&" || readKeys == true){
            if(readKeys == false){
                readKeys = true;
                keyStart = i+1;
            }
            if(char == "="){
                keyEnd = i;
                keysArray.push(url.substring(keyStart ,keyEnd))
                readKeys = false;
            }
        }

        if(char == "=" || readValues == true){
            readValues = true;
            valueStart = i+1;
        }

        if(char == "&"){
            valueEnd = i;
            valuesArray.push(url.substring(valueStart,valueEnd))
            readValues = false;
        }
        else (i == url.length-1){
            valueEnd = i+1;
            valuesArray.push(url.substring(valueStart,valueEnd))
            readValues = false;
        }
    }
    for(var i= 0; i<keysArray.length ; i ++){
        parametersObject([keysArray[i]= valuesArray[i]]);
        console.log(keysArray[i] , valuesArray[i] ); 
    }
    return parametersObject;

}
console.log(parameters("http://localhost:3000/add?num1=5&num2=3"));
