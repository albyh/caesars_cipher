function doStuff( msg ){
    console.log( msg );
}

/*******************************************************************************************************************/

function rot13(str) { // LBH QVQ VG!

  var changeChar = "";

  //directions suggest charCodeAt() and fromCharCode
  //although I'd be inclined to fill an array with str.split()
  //or use str.replace() with a function? Not sure if that works

  //iterate through string replacing each character

  for (var i=0,l=str.length ; i<l ; i++ ) {

    //get the charcode using charCodeAt which will return the charcode at the index position
      if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90 ) { //if A-Z
         changeChar = str.charCodeAt(i)-13;                  //Shift the letter

        if ( changeChar < 65 ) {                             //if < A, start at Z
          changeChar += 26 ;                                 //it's 13 from either end of the alphabet
        }
    } else { changeChar = str.charCodeAt(i);                 // Replace with same char
           } 

    // Strings are immutable so need to recreate the string with the new char
    str = str.substr(0,i) + String.fromCharCode(changeChar) + str.substr(i+1);

  }

  return str;
}

// Change the inputs below to test
console.log( "Solution output ----> " + rot13("SERR PBQR PNZC") + " <----");
rot13("SERR PBQR PNZC");


/*******************************************************************************************************************/

window.onload = function(){
    doStuff( "this is passed to a separate .js file by window.onload");

    };

window.onclick = function () {
    console.log( "test click from window.onclick");
};