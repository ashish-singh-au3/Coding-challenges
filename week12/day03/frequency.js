function frequency(array){
    let map = {}
    for(i=0;i<array.length;i++){
        const element = array[i];
        if(map[element]){

            map[element]++ ;
        }
        else{
            map[element] = 1;
        }
    }
    return map;
    }

    //console.log(frequency([2,2,2,2,4,5,6,6,7,9,9]));
    console.log(frequency(["Ansal", "Divyam", "Vaibhav", "Dwarak", "Divyam"]));