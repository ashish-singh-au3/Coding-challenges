function boolean(str) {

    str = str.toLowerCase();
    var arrayOfCharacters = str.split("");

    var countX = arrayOfCharacters.reduce( function( n, val ) { //counting x
        return n + (val === 'x');
      }, 0);
      
    var countO = arrayOfCharacters.reduce( function( n, val ) {   //counting0
        return n + (val === 'o');
      }, 0);
    
    
    if ( countX == countO ) {  // checking if the num matches or not
      return true;
    } else {
      return false;
    }
}
console.log(boolean('ooxx'));