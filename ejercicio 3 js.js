function rot13(str) { 
  var newStr = "";
  for(var i=0;i<str.length;i++){
    let strUnit = str.charCodeAt(i);
    if(strUnit>=65 && strUnit<=90){
      newStr+=String.fromCharCode((strUnit+13-65)%26+65);
    }else{
      newStr+=String.fromCharCode(strUnit);
    }
  }
  return newStr;
}