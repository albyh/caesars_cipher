function doStuff( msg ){
    console.log( msg );
}

/*******************************************************************************************************************/
/**********  SOLUTION 2  ****************/
/*******************************************************************************************************************/

function rot13(str) { // LBH QVQ VG!

  str = str.toUpperCase(); //immutable so have to store to a new variable

  //loop through all characters of passed string
  //String length is zero based.
  for ( var i=0, n=str.length ; i<n ; i++ ){
    var char = str.charCodeAt(i);

    //USE a conditional (ternary) operator instead of if...else
    (char >= 65) && (char <= 77) ? char += 13 :         //if A-M add 13
    (char >= 78) && (char <= 90) ? char -= 13 : 0 ;   //if N-Z subtract 13 : otherwise return 0/false/anything/nothing

    // Strings are immutable so need to recreate the string with the new char
    str = str.substr(0,i) + String.fromCharCode(char) + str.substr(i+1);

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