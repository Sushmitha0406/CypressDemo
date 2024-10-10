Object.objlength=function(myobj){
  var osize=0,key;
  for(key in myobj){
    if(myobj.hasOwnProperty(key)) osize++
  }
}

var student={
  name:"ABCD",
  class:"IV",
  rollno: 10
}

var objlength = Object.objlength(student);
console.log('length of obj:'+objlength);